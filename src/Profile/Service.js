import fileWrite from "../Utils/FileWrite";


// Passing image to the writeFile
const uploadProfilePicture = async (image, fileName) => {
  try {
    logger.info("Writing to file!.....");
    await fileWrite.writeFile(image, fileName); // Calling writeFile method
  } catch (error) {
    throw error;
  }
};
export default { uploadProfilePicture };