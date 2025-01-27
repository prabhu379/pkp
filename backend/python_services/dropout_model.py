import joblib
from sklearn.linear_model import LogisticRegression
import numpy as np

# Simulated data (replace with actual training data)
# X_train should be a 2D array (features)
# y_train should be a 1D array (labels, e.g., 0 for no dropout, 1 for dropout)
X_train = np.array([[10, 2, 5], [5, 1, 3], [8, 3, 6]])  # Example features
y_train = np.array([0, 1, 0])  # Example labels (0 = no dropout, 1 = dropout)

# Train your model
model = LogisticRegression()
model.fit(X_train, y_train)

# Save the trained model
joblib.dump(model,'dropout_model.pkl')

# Check if model is saved by loading it again
loaded_model = joblib.load('dropout_model.pkl')
print("Model successfully saved and loaded:", loaded_model)
