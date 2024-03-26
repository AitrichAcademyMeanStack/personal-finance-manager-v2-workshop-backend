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

// import User from "../Models/UserModel.js";
// import logger from "../Middleware/logger.js";
// import Profile from "../Models/ProfileModel.js";


// const uploadProfilePicture = async (file, userId) => {
//   try {
//     const existingUser = await User.findById(userId);
//     if (!existingUser) {
//       throw new Error("User not found");
//     }

//     await Profile.create({imageUrls: file.path})

//     logger.info("Profile Picture uploaded successfully");
//   } catch (error) {
//     logger.error("Error uploading profile picture:", error);
//     throw error;
//   }
// };

// const getprofilepicture = async(userId)=>{
//   try {
//         const existinguser= await User.findById(userId)
//     if (existinguser) {
       
//         const profilepicture =  existinguser.ProfilePicture
//         if (profilepicture) {
          
//           logger.info("profile picture is getting successfully")
//           return  profilepicture
//         }
//       } else {
//         logger.error("job  profile not found with specific id")
       
//       }
//     } 
//     catch (error) {
//       logger.error("Error uploading profile picture:", error);
//       throw error;
//     }
  
// };


// export default { uploadProfilePicture,getprofilepicture };

import User from "../Models/UserModel.js";
import logger from "../Middleware/logger.js";
import Profile from "../Models/ProfileModel.js";

const uploadProfilePicture = async (file, userId) => {
  try {
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      throw new Error("User not found");
    }

    // Create or update the profile picture for the user
    await Profile.create({ userId: userId, imageUrl: file.path });

    logger.info("Profile Picture uploaded successfully");
  } catch (error) {
    logger.error("Error uploading profile picture:", error);
    throw error;
  }
};

const getProfilePicture = async (userId) => {
  try {
    const profile = await Profile.findOne({ userId: userId });
    if (!profile) {
      throw new Error("Profile not found for this user");
    }

    logger.info("Profile picture retrieved successfully");
    return profile.imageUrls;
  } catch (error) {
    logger.error("Error retrieving profile picture:", error);
    throw error;
  }
};

export default { uploadProfilePicture, getProfilePicture };
