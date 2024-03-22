// import User from "../Models/UserModel.js";
// import Profile from "../Models/ProfileModel.js";
// // import logger from "../Middleware/logger.js"

// const uploadProfilePicture = async (file, userId) => {
//   try {
//     // Check if the user exists
//     const existingUser = await User.findById(userId);
//     if (!existingUser) {
//       throw new Error("User not found");
//     }

//     // Create or update the profile picture for the user
//     existingUser.profilePicture = {
//       title: file.originalname,
//       profilePicture: file.path,
//     };

//     // Save the user with the updated profile picture
//     await existingUser.save();

//     logger.info("Profile Picture uploaded successfully");
//   } catch (error) {
//     logger.error("Error uploading profile picture:", error);
//     throw error;
//   }
// };

// export default { uploadProfilePicture };

import User from "../Models/UserModel.js";
import logger from "../Middleware/logger.js";
import Profile from "../Models/ProfileModel.js";


const uploadProfilePicture = async (file, userId) => {
  try {
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      throw new Error("User not found");
    }

    await Profile.create({imageUrls: file.path})

    logger.info("Profile Picture uploaded successfully");
  } catch (error) {
    logger.error("Error uploading profile picture:", error);
    throw error;
  }
};

export default { uploadProfilePicture };
