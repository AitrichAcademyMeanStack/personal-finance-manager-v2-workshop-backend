import express from "express";
import userController from "./Controller.js"

const router = express()

 /**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              properties :
 *                  firstname:
 *                      type: string
 *                  lastname:
 *                      type: string
 *                  email:
 *                      type: string
 *                  phone:
 *                      type: number  
 *                  username:
 *                      type: string  
 *                  password:
 *                      type: string
 *                      
 */
//get all users
/**
 * @swagger
 *  /api/v1/user:
 *      get:
 *          summary: Fetch All User
 *          tags:
 *              - User
 *          responses:
 *              200:
 *                  description: Returning User
 *                  content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref:   '#/components/schemas/User'
 *                        
 */

router.get('/', userController.getAllusers)

//add users
/**
 * @swagger
 *  /api/v1/user:
 *      post:
 *          summary: Add a new user
 *          tags:
 *              - User
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              201:
 *                  description: User Added Successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              400:
 *                  description: Bad request, check request body
 */

router.post('/', userController.createUser)

//delete user

/**
 * @swagger
 *  /api/v1/user/{userId}:
 *      delete:
 *          summary: Delete user By ID
 *          tags:
 *              - User
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the user
 *          responses:
 *              204:
 *                  description: user Deleted Successfully
 *              404:
 *                  description: user not found
 */
router.delete('/:userId',userController.deleteUser)

//get userbyid
/**
 * @swagger
 *  /api/v1/user/{userId}:
 *      get:
 *          summary: Get user By ID
 *          tags:
 *              - User
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the user
 *          responses:
 *              200:
 *                  description: Returning User
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              404:
 *                  description: User not found
 */
router.get('/:userId',userController.getUserById);

 //update user
/**
 * @swagger
 *  /api/v1/user/{userId}:
 *      put:
 *          summary: Update user By ID
 *          tags:
 *              - User
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: User updated successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              404:
 *                  description: User not found
 */
router.put('/:userId',userController.updateUser);

/**
 * @swagger
 *  /api/v1/user/{userId}:
 *      put:
 *          summary: Update user By ID
 *          tags:
 *              - User
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: User updated successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              404:
 *                  description: User not found
 */
router.get('/:userId', userController.getUserById);

export default router