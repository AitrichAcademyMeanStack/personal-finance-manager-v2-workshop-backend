import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProfileSchema = new Schema(
  {
    imageUrls: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Profile = model("Profile", ProfileSchema);

export default Profile;
