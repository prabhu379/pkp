import joblib
import sys
import json
import numpy as np
import os

# Get the directory of the current script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Define the model path relative to the script's directory
model_path = os.path.join(script_dir, 'social_media_dropout_model.pkl')

# Load the model with error handling
try:
    model = joblib.load(model_path)
except FileNotFoundError:
    print(f"Error: Model file not found at {model_path}")
    sys.exit(1)
except Exception as e:
    print(f"Error loading model: {e}")
    sys.exit(1)


# Function to predict dropout based on features
def predict_dropout(features):
    try:
        features_scaled = np.array([features])  # Ensure features are in the correct shape
        prediction = model.predict(features_scaled)
        return prediction[0]
    except Exception as e:
        return f"Error in prediction: {e}"

if __name__ == "__main__":
    try:
        # Read JSON data from stdin (input from Node.js)
        data = sys.stdin.read()
        input_features = json.loads(data)

        # Extract features from the input data
        daily_usage_minutes = input_features.get("daily_usage_minutes", {})
        weekly_usage_minutes = input_features.get("weekly_usage_minutes", {})
        activity_breakdown = input_features.get("activity_breakdown", {})
        notifications_received = input_features.get("notifications_received", {})
        average_session_duration_minutes = input_features.get("average_session_duration_minutes", {})

        # Prepare a feature vector (adjust based on how your features are structured)
        features = [
            np.mean(list(daily_usage_minutes.values())) if daily_usage_minutes else 0,  # Average daily usage time
            np.mean(list(weekly_usage_minutes.values())) if weekly_usage_minutes else 0, # Average weekly usage time
            activity_breakdown.get("messaging", 0),
            activity_breakdown.get("content_scrolling", 0),
            notifications_received.get("daily", 0),
            np.mean(list(average_session_duration_minutes.values())) if average_session_duration_minutes else 0  # Average session duration
        ]

        # Predict dropout (1 for dropout, 0 for no dropout)
        prediction = predict_dropout(features)

        # Print the prediction (this will be sent back to Node.js)
        print(prediction)

    except json.JSONDecodeError:
        print("Error: Invalid JSON input")
    except Exception as e:
        print(f"Unexpected error: {e}")