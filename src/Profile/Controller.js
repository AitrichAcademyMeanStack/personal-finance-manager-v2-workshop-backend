// import profileService from "./Service.js";

// import upload from "../Middleware/Fileupload.js";

// import asyncErrorHandler from "../Utils/asyncHandler.js";

// // Handling Profile picture uploading
// const uploadProfilePicture = asyncErrorHandler(async (req, res, next) => {
//   // function that takes the uploaded image's buffer and original name.
//   upload(req, res, async (error) => {
//     // Handling an error occurs during the upload
//     if (error) {
//       logger.error("Error while uploading profile picture : ", error);
//       return next(error);
//     }
//     if (!req.file) {
//       logger.error("No file uploaded.");
//       return next(new BadRequestError("No file uploaded."));
//     }
//     const uploadedImage = req.file; // Extracting file from the multer request
//     await profileService.uploadProfilePicture(
//       uploadedImage.buffer,
//       uploadedImage.originalname // Name of the image
//     ); // Calling service method
//     sendResponse(res, 200, "File uploaded successfully"); // Sending response
//   });
// });

// // Helper function to send JSON responses
// function sendResponse(response, status, data) {
//   response.status(status).json(data); // Sending response
// }

// export default { uploadProfilePicture };


import profileService from "./Service.js";
import asyncErrorHandler from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/errors.js";

const uploadProfilePicture = asyncErrorHandler(async (req, res, next) => {
  try {
    if (!req.file) {
      throw new BadRequestError("No file uploaded.");
    }
    const uploadedImage = req.file;
    await profileService.uploadProfilePicture(
      uploadedImage.buffer,
      uploadedImage.originalname
    );
    sendResponse(res, 200, "File uploaded successfully");
  } catch (error) {
    next(error);
  }
});

function sendResponse(response, status, data) {
  response.status(status).json(data);
}

export default { uploadProfilePicture };
