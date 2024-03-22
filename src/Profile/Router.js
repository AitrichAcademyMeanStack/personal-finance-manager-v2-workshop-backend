
import express from "express";
import multer from "multer";
import profileController from "./Controller.js";


const router = express.Router();
const uploadImage = multer();
/**
 * @swagger
 *  components:
 *   schemas:
 *      Profile:
 *        type: object
 *        required:
 *          - firstname
 *          - lastname
 *          - imageUrls
 *         properties:
 *         firstname: 
 *           type: string
 *         lastnmae:
 *           type: string       
 */

 /**
 * @swagger
 * /api/v1/profile:
 *   post:
 *     summary: Add profilepic
 *     consumes:
 *       - multipart/form-data
 *       - application/json
 *     tags:
 *       - Profile
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *              type: object
 *              properties:
 *                  imageUrls:
 *                      type: array
 *                      items:
 *                          type: string
 *                          format: binary
 *              required:
 *                  - imageUrls
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       201:
 *         description: Profilepic added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       400:
 *         description: Bad request, check the request body
 */

router.post("/", uploadImage.single('imageUrls'), profileController.uploadProfilePicture);

export default router





