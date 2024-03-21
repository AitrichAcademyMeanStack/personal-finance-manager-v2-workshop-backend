// import express from "express";
// import incomeController from "./Controller.js"

// const router = express()
// /**
//  * @swagger
//  *  components:
//  *      schemas:
//  *          Income:
//  *              type: object
//  *              required:
//  *                  - title
//  *                  - amount
//  *                  - date
//  *                  - category
//  *                  - description
//  *              properties :
//  *                  title:
//  *                      type: string
//  *                  amount:
//  *                      type: number
//  *                  date:
//  *                      type: string
//  *                  category:
//  *                      type: string  
//  *                  description:
//  *                      type: string  
//  *                      
//  */

// /**
//  * @swagger
//  *  /api/v1/income:
//  *      get:
//  *          summary: Fetch All Income
//  *          tags:
//  *              - Income
//  *          responses:
//  *              200:
//  *                  description: Returning Income
//  *                  content:
//  *                          application/json:
//  *                              schema:
//  *                                  type: array
//  *                                  items:
//  *                                      $ref:   '#/components/schemas/Income'
//  *                        
//  */



// router.get('/', incomeController.fecthIncome)
// /**
//  * @swagger
//  *  /api/v1/income:
//  *      post:
//  *          summary: Add a new Income
//  *          tags:
//  *              - Income
//  *          requestBody:
//  *              required: true
//  *              content:
//  *                  application/json:
//  *                          schema:
//  *                              $ref:'#/components/schemas/Income'
//  *          responses:
//  *              201:
//  *                  description: Income Added Successfully
//  *                  content:
//  *                          application/json:
//  *                                  schema:
//  *                                      $ref:'#/components/schemas/Income'
//  *              400:
//  *                  description: Bad request, check request body
//  *                                  
//  *          
//  *  
//  */
// router.post('/',incomeController.addIncome)

// /**
//  * @swagger
//  *  /api/v1/income/{incomeId}:
//  *      delete:
//  *          summary: Delete Income By ID
//  *          tags:
//  *              - Income
//  *          parameters:
//  *              - in: path
//  *                name: incomeId
//  *                required: true
//  *                schema:
//  *                  type: string
//  *                description: ID of the Income
//  *          responses:
//  *              204:
//  *                  description: Income Deleted Successfully
//  *              404:
//  *                  description: Income not found
//  */
// router.delete('/:incomeId',incomeController.deleteIncome)

// export default router

import express from "express";
import incomeController from "./Controller.js"

const router = express()

/**
 * @swagger
 *  components:
 *      schemas:
 *          Income:
 *              type: object
 *              required:
 *                  - title
 *                  - amount
 *                  - date
 *                  - category
 *                  - description
 *              properties :
 *                  title:
 *                      type: string
 *                  amount:
 *                      type: number
 *                  date:
 *                      type: string
 *                  category:
 *                      type: string
 *                  description:
 *                      type: string 
 *                     
 *                      
 */

/**
 * @swagger
 *  /api/v1/income/user/{userId}/:
 *      get:
 *          summary: Fetch All Income for a specific user
 *          tags:
 *              - Income
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the user
 *          responses:
 *              200:
 *                  description: Returning Income
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref:   '#/components/schemas/Income'
 *                        
 */


router.get('/user/:userId', incomeController.fecthIncome);
/**
 * @swagger
 *  /api/v1/income/user/{userId}:
 *    post:
 *          summary: Add a new Income for a specific user
 *          tags:
 *              - Income
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                      type: string
 *                      description: ID of the user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Income'
 *          responses:
 *              201:
 *                  description: Income Added Successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Income'
 *              400:
 *                  description: Bad request, check request body
 *                                  
 *          
 *  
 */
router.post('/user/:userId', incomeController.addIncome);

/**
 * @swagger
 *  /api/v1/income/{incomeId}/user/{userId}:
 *      delete:
 *          summary: Delete Income By ID for a specific user
 *          tags:
 *              - Income
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the user
 *              - in: path
 *                name: incomeId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the Income
 *          responses:
 *              204:
 *                  description: Income Deleted Successfully
 *              404:
 *                  description: Income not found
 */

// router.delete('user/:userId/expense/:expenseId', expenseController.deleteExpense);
router.delete('/:incomeId/user/:userId/', incomeController.deleteIncome);

export default router
