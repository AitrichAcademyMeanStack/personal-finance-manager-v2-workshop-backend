import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProfileSchema = new Schema(
  {  user: {
    userId: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    userName: String,
    password: String,
  },
    imageUrls: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Profile = model("Profile", ProfileSchema);

export default Profile;
