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
    const profile = await Profile.findOneAndUpdate(
      { "user.userId": userId },
      {
        $set: {
          "user.firstName": existingUser.firstname,
          "user.lastName": existingUser.lastname,
          "user.email": existingUser.email,
          "user.phone": existingUser.phone,
          "user.userName": existingUser.username,
          "user.password": existingUser.password,
          imageUrls: file.path,
        }
      },
      { upsert: true, new: true }
    );

    logger.info("Profile Picture uploaded successfully");
  } catch (error) {
    logger.error("Error uploading profile picture:", error);
    throw error;
  }
};




const getProfilePicture = async (userId) => {
  try {
    // Find the profile document in the database for the given userId
    const profile = await Profile.findOne({ userId: userId });
    if (!profile) {
      throw new Error("Profile not found for this user");
    }

    // Extract the imageUrl from the profile document
    const imageUrl = profile.imageUrls;

    logger.info("Profile picture retrieved successfully");

    // Return the actual imageUrl from the database
    return imageUrl;
  } catch (error) {
    logger.error("Error retrieving profile picture:", error);
    throw error;
  }
};


export default { uploadProfilePicture, getProfilePicture };



// -----------------------------------------------------------------------------------
// import User from "../Models/UserModel.js";
// import logger from "../Middleware/logger.js";
// import Profile from "../Models/ProfileModel.js";

// const uploadProfilePicture = async (file, userId) => {
//   try {
//     const existingUser = await User.findById(userId);
//     if (!existingUser) {
//       throw new Error("User not found");
//     }

//     // Create or update the profile picture for the user
//     await Profile.create({ imageUrls: file.path });

//     logger.info("Profile Picture uploaded successfully");
//   } catch (error) {
//     logger.error("Error uploading profile picture:", error);
//     throw error;
//   }
// };

// // const getProfilePicture = async (userId) => {
// //   try {
// //     const profile = await Profile.findOne({ userId: userId });
// //     if (!profile) {
// //       throw new Error("Profile not found for this user");
// //     }

// //     logger.info("Profile picture retrieved successfully");
// //     return "1711427386578__about-2.jpg";
   

// //   } catch (error) {
// //     logger.error("Error retrieving profile picture:", error);
// //     throw error;
// //   }
// // };


// const getProfilePicture = async (userId) => {
//   try {
//     // Find the profile document in the database for the given userId
//     const profile = await Profile.findOne({ userId: userId });
//     if (!profile) {
//       throw new Error("Profile not found for this user");
//     }

//     // Extract the imageUrl from the profile document
//     const imageUrl = profile.imageUrls;

//     logger.info("Profile picture retrieved successfully");

//     // Return the actual imageUrl from the database
//     return imageUrl;
//   } catch (error) {
//     logger.error("Error retrieving profile picture:", error);
//     throw error;
//   }
// };


// export default { uploadProfilePicture, getProfilePicture };
