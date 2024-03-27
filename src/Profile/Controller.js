

// import profileService from "./Service.js";
// import asyncErrorHandler from "../utils/asyncHandler.js";

// const addProfilePicture = asyncErrorHandler(async (req, res) => {
//   const userId = req.params.userid;

//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }

//   await profileService.uploadProfilePicture(req.file, userId);
  
//   // Constructing the image URL with the correct path format
//   const imageUrl = `http://${req.hostname}:${process.env.PORT}/File/ProfilePicture/${req.file.filename}`;
  
//   res.status(201).json({ message: "Profile Picture uploaded successfully", imageUrl: imageUrl });
// });

// const getprofilepicture = asyncErrorHandler(async(req,res)=>{
//   const userId = req.params.userId;
  
//   const imageUrl = await profileService.getProfilePicture(userId);
  
//   // Constructing the full image URL with the correct path format
//   const fullImageUrl = `http://${req.hostname}:${process.env.PORT}/File/ProfilePicture/${imageUrl}`;
  
//   res.status(200).json({ imageUrl: fullImageUrl });
// });



// export default { addProfilePicture, getprofilepicture };

import profileService from "./Service.js";
import asyncErrorHandler from "../utils/asyncHandler.js";

const addProfilePicture = asyncErrorHandler(async (req, res) => {
  const userId = req.params.userid;

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  await profileService.uploadProfilePicture(req.file, userId);
  
  // Constructing the image URL with the correct path format
  const imageUrl = `http://${req.hostname}:${process.env.PORT}/ProfilePicture/${req.file.filename}`;
  
  res.status(201).json({ message: "Profile Picture uploaded successfully", imageUrl: imageUrl });
});

const getprofilepicture = asyncErrorHandler(async(req,res)=>{
  const userId = req.params.userId;
  
  const imageUrl = await profileService.getProfilePicture(userId);
  
  // Splitting the imageUrl by backslash and getting the filename
  const imageUrlParts = imageUrl.split('\\');
  const filename = imageUrlParts[imageUrlParts.length - 1];
  
  // Constructing the full image URL with the correct path format
  const fullImageUrl = `http://${req.hostname}:${process.env.PORT}/ProfilePicture/${filename}`;
  
  res.status(200).json({ imageUrl: fullImageUrl });
});

export default { addProfilePicture, getprofilepicture };
