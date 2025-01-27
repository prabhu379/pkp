import mongoose from 'mongoose';

const { Schema } = mongoose;

// Social Media Usage Sub-schema
const socialMediaUsageSchema = new Schema({
  daily_usage_minutes: {
    instagram: { type: Number, required: true },
    facebook: { type: Number, required: true },
    twitter: { type: Number, required: true },
    snapchat: { type: Number, required: true },
    linkedin: { type: Number, required: true },
    other: { type: Number, required: true }
  },
  weekly_usage_minutes: {
    instagram: { type: Number, required: true },
    facebook: { type: Number, required: true },
    twitter: { type: Number, required: true },
    snapchat: { type: Number, required: true },
    linkedin: { type: Number, required: true },
    other: { type: Number, required: true }
  },
  favorite_platforms: {
    type: [String], // Array of platform names (e.g., ['Instagram', 'Snapchat'])
    required: true
  },
  activity_breakdown: {
    messaging: { type: Number, required: true },
    content_scrolling: { type: Number, required: true },
    posting: { type: Number, required: true },
    studying: { type: Number, required: true },
    other: { type: Number, required: true }
  },
  notifications_received: {
    daily: { type: Number, required: true },
    weekly: { type: Number, required: true }
  },
  average_session_duration_minutes: {
    instagram: { type: Number, required: true },
    facebook: { type: Number, required: true },
    twitter: { type: Number, required: true },
    snapchat: { type: Number, required: true },
    linkedin: { type: Number, required: true },
    other: { type: Number, required: true }
  }
});

// Main student schema
const studentSocialMediaSchema = new Schema({
  rollno: { type: String, required: true },
  name: { type: String, required: true },
  social_media_usage: { type: socialMediaUsageSchema, required: true },
  test_completion_rate: { type: Number, required: true },
  notifications_ignored: { type: Number, required: true },
  course_progress: { type: Number, required: true },
  last_active: { type: Date, default: Date.now }
}, { timestamps: true });

// Check if the model already exists in mongoose.models
const SocialMedia = mongoose.models.SocialMedia || mongoose.model('SocialMedia', studentSocialMediaSchema);

export default SocialMedia;
