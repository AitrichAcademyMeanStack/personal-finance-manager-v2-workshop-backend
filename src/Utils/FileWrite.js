import { mkdir as _mkdir, createWriteStream } from "fs";
import { join } from "path";
import { promisify } from "util";
import logger from "../logging/Logger.js";

// To wrting image into file
const writeFile = async (fileData, fileName) => {
  try {
    const directoryPath = "data/picture"; // Directory path

    // Convert fs.mkdir to a promise-based function
    const mkdir = promisify(_mkdir);

    // Ensure the directory exists; create it if it doesn't
    await mkdir(directoryPath, { recursive: true });

    const filePath = join(directoryPath, fileName); // Creating file path

    // Create a writable stream to write data to a file
    const writableStream = createWriteStream(filePath);

    // Write data to the stream
    writableStream.write(fileData);

    // End the stream to indicate that no more data will be written
    writableStream.end();

    // Handle the 'finish' event to know when the stream has finished writing
    writableStream.on("finish", () => {
      logger.info("Write operation finished.");
    });

    // Handle any errors that may occur during the write operation
    writableStream.on("error", (err) => {
      logger.error("Error:", err);
      throw err;
    });
  } catch (error) {
    throw error;
  }
};
export default { writeFile };
