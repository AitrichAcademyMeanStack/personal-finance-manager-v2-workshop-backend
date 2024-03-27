

// import multer from "multer";

// import profilepicturefilefilter from "../middleware/ProfilePicUpload.js";

// const profilepicturestorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'file/profilepicture'); // Adjusted destination directory
//     },
//     filename: (req, file, cb) => {
//         const filename = `${Date.now()}__${file.originalname}`;
//         cb(null, filename);
//     }
// });

// const uploadprofilepicture = multer({ storage: profilepicturestorage, fileFilter: profilepicturefilefilter });

// export { uploadprofilepicture };

import multer from "multer";

import profilepicturefilefilter from "../middleware/ProfilePicUpload.js";

const profilepicturestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'File/ProfilePicture'); // Adjusted destination directory
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()}__${file.originalname}`;
        cb(null, filename);
    }
});

const uploadprofilepicture = multer({ storage: profilepicturestorage, fileFilter: profilepicturefilefilter });

export { uploadprofilepicture };
