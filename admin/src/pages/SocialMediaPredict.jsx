import React, { useState, useEffect } from "react";
import axios from "axios";

const SocialMediaPredict = () => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch predictions from the backend
  const fetchPredictions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://localhost:4000/api/admin/predict-dropout-social-media"
      );
      console.log("API Response:", response.data); // Debugging
      setPredictions(response.data.predictions || []);
    } catch (err) {
      setError("Failed to fetch predictions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Call the fetch function on component mount
  useEffect(() => {
    fetchPredictions();
  }, []);

  // Function to render predictions
  const renderPredictions = () => {
    return predictions.map((prediction, index) => (
      <div key={index} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
        <p className="font-medium text-gray-700">
          Name: {prediction.studentDetails?.name || "Unknown"}
        </p>
        <p className="text-gray-600">
          Roll No: {prediction.studentDetails?.student_id || "N/A"}
        </p>
        <p
          className={`font-bold ${
            Number(prediction.prediction) === 1 ? "text-red-500" : "text-green-500"
          }`}
        >
          Prediction: {Number(prediction.prediction) === 1 ? "Risk to Dropout" : "Not at a Risk to Dropout"}
        </p>
      </div>
    ));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Social Media Dropout Predictions
          </h1>
          <button
            onClick={fetchPredictions}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Refresh Predictions
          </button>
        </div>
        <div>
          {loading && <p className="text-gray-500">Loading predictions...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && (
            <div className="space-y-4">{renderPredictions()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPredict;
