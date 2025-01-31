import SocialMedia from "../models/socialMediaModel.js";
import { spawn } from "child_process";

export const predictDropoutBasedOnSocialMedia = async (req, res) => {
  try {
    // Fetch all student data from MongoDB
    const studentDataArray = await SocialMedia.find();

    // Check if there are students in the database
    if (!studentDataArray || studentDataArray.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }

    // Use Promise.all to handle multiple predictions asynchronously
    const predictionPromises = studentDataArray.map((studentData) => {
      return new Promise((resolve, reject) => {
        const { social_media_usage } = studentData;

        // Validate that the required data exists
        if (!social_media_usage) {
          return reject("Missing social media usage data for a student");
        }

        // Extract the necessary features
        const {
          daily_usage_minutes,
          weekly_usage_minutes,
          favorite_platforms,
          activity_breakdown,
          notifications_received,
          average_session_duration_minutes,
        } = social_media_usage;

        // Prepare features to send to Python
        const features = {
          daily_usage_minutes,
          weekly_usage_minutes,
          favorite_platforms,
          activity_breakdown,
          notifications_received,
          average_session_duration_minutes,
        };

        // Log the features for debugging
        console.log("Features sent to Python:", features);

        // Spawn the Python process to run the prediction script
        const pythonProcess = spawn("python", ["./python_services/social_media_prediction.py"]);
        pythonProcess.stdin.write(JSON.stringify(features));
        pythonProcess.stdin.end();

        // Handle Python stdout (prediction result)
        pythonProcess.stdout.on("data", (data) => {
          const prediction = data.toString().trim();
          resolve({ studentDetails: studentData, prediction });
        });

        // Handle Python stderr (errors)
        pythonProcess.stderr.on("data", (data) => {
          console.error(`stderr: ${data.toString()}`);
          reject(data.toString());
        });

        // Handle Python process exit
        pythonProcess.on("close", (code) => {
          if (code !== 0) reject(`Python process exited with code ${code}`);
        });
      });
    });

    // Wait for all predictions to complete
    const predictions = await Promise.all(predictionPromises);

    // Send the predictions for all students to the frontend
    res.json({ predictions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};