import multer from "multer"; // Dependency for handling multipart/form-data
import UnsupportedMediaTypeError from "../exceptions/UnsupportedMediaTypeError.js";
import PayloadTooLargeError from "../exceptions/PayloadTooLargeError.js";

// multer for handling multipart/form-data
const upload = multer({
  // Configuration for file upload
  fileFilter: (req, file, cb) => {
    // It is an function of multer and return a callback function
    const fileSize = parseInt(req.headers["content-length"]);
    if (
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/jpeg"
    ) {
      return cb(
        new UnsupportedMediaTypeError(
          "Only PNG, JPG, and JPEG files are allowed."
        )
      ); // The Promise is Rejected and stoping the file upload
    }

    // Check file size (2 MB limit)
    if (fileSize > 2 * 1024 * 1024) {
      return cb(new PayloadTooLargeError("File size exceeds the 2 MB limit.")); // The Promise is Rejected and stoping the file upload
    }

    // The Promise is Accepted and allowing the file to upload
    cb(null, true);
  },
}).single("image"); // single file upload with the field name "image."

export default upload;
