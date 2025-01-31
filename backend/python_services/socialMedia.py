import joblib
from sklearn.linear_model import LogisticRegression
import numpy as np

# Simulated data (replace with actual training data)
# X_train should be a 2D array (features)
# y_train should be a 1D array (labels, e.g., 0 for no dropout, 1 for dropout)

# Example: Features could include average daily usage, average weekly usage, activity breakdown, etc.
# In this example:
# [average_daily_usage, average_weekly_usage, messaging_activity, content_scrolling_activity, notifications_received]

X_train = np.array([
    [45, 315, 40, 30, 80, 15],  # Example feature set 1 (average daily usage, weekly usage, etc.)
    [30, 210, 35, 25, 60, 10],  # Example feature set 2
    [60, 420, 50, 40, 100, 20], # Example feature set 3
    [20, 140, 30, 20, 70, 8]    # Example feature set 4
])

# Example labels (1 = dropout, 0 = no dropout)
y_train = np.array([1, 0, 1, 0])  # Corresponding labels

# Initialize and train the Logistic Regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Save the trained model to a file
joblib.dump(model, 'social_media_dropout_model.pkl')

# Check if the model is saved correctly by loading it again
loaded_model = joblib.load('social_media_dropout_model.pkl')
print("Model successfully saved and loaded:", loaded_model)