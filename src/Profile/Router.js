
import express from "express";
import { uploadprofilepicture } from "../Utils/Fileupload.js"; // Import multer configuration
import profileController from "./Controller.js";

const router = express.Router();

/**
 * @swagger
 *  components:
 *   schemas:
 *      Profile:
 *        type: object
 *        required:
 *          - imageUrls
 *        properties:
 *         ProfilePicture:
 *            type: string
 */

/**
 * @swagger
 * /api/v1/profile/user/{userid}:
 *  post:
 *      summary: add profilepicture in user profilepicture details
 *      description: This API is used to add profilepicture in user profile.
 *      consumes:
 *        - multipart/form-data
 *      tags:
 *        - Profile
 *      parameters:
 *        - in: path
 *          name: userid
 *          required: true
 *          description: Numeric ID is required.
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                ProfilePicture:
 *                  type: string
 *                  format: binary
 *      responses:
 *        200:
 *          description: user ProfilePicture updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Profile'
 *        400:
 *          description: Not found error, check the request body
 */
router.post('/user/:userid', uploadprofilepicture.single('ProfilePicture'), profileController.addProfilePicture); // Upload profile picture

/**
 * @swagger
 * /api/v1/profile/user/{userid}:
 *  get:
 *      summary: get  profilepicture
 *      description: this is is used to get  profilepicture
 *      tags:
 *          - Profile
 *      parameters:
 *          - in: path
 *            name: userid
 *            required: true
 *            description: numeric id is required
 *            schema:
 *                  type: string
 *      responses:
 *          200:
 *              description:  profilepicture retrived successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Profile' 
 */
router.get('/user/:userid',profileController.getprofilepicture)//getting 

export default router