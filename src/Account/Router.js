import express from "express";
import accountController from "./Controller.js"

const router = express()

 /**
 * @swagger
 *  components:
 *      schemas:
 *          Account:
 *              type: object
 *              required:
 *                  - email
 *                  - phone
 *                  - username
 *                  - password
 *              properties :
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
 *  /api/v1/user/{userId}/account:
 *      get:
 *          summary: Fetch All Account
 *          tags:
 *              - Account
 *          responses:
 *              200:
 *                  description: Returning Account
 *                  content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref:   '#/components/schemas/Account'
 *                        
 */

router.get('/', accountController.getAllaccount)

//get userbyid
/**
 * @swagger
 *  /api/v1/user/{userId}/account:
 *      get:
 *          summary: Get user By ID
 *          tags:
 *              - Account
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
 *                              $ref: '#/components/schemas/Account'
 *              404:
 *                  description: User not found
 */
router.get('/:userId',accountController.getAllaccount);


 
//update user
/**
 * @swagger
 *  /api/v1/user/{userId}/account:
 *      put:
 *          summary: Update user By ID
 *          tags:
 *              - Account
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
 *                          $ref: '#/components/schemas/Account'
 *          responses:
 *              200:
 *                  description: Account updated successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Account'
 *              404:
 *                  description: User not found
 */
router.put('/:userId',accountController.updateAccount);



export default router




