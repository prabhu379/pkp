import sys
import pickle
import numpy as np
import warnings

# Suppress all warnings
warnings.filterwarnings("ignore")

# Load trained model
with open("dropout_model_academic.pkl", "rb") as f:
    scaler, model = pickle.load(f)

# Ensure that we have the correct number of arguments
if len(sys.argv) != 4:
    print("Error: Not enough arguments provided. Expected: GPA, Attendance, Study Hours.")
    sys.exit(1)

# Read input values from command line arguments
try:
    gpa = float(sys.argv[1])  # First argument is GPA
    attendance_percentage = float(sys.argv[2])  # Second argument is Attendance Percentage
    study_hours = float(sys.argv[3])  # Third argument is Study Hours per week
except ValueError:
    print("Error: Invalid input data. Please ensure all inputs are numeric.")
    sys.exit(1)

# Preprocess input
input_data = scaler.transform([[gpa, attendance_percentage, study_hours]])

# Predict dropout risk
prediction = model.predict(input_data)

# Convert output to readable format
risk_levels = {0: "Low Risk", 1: "Moderate Risk", 2: "High Risk"}
result = risk_levels[int(prediction[0])]

# Print result for Node.js
print(result)
