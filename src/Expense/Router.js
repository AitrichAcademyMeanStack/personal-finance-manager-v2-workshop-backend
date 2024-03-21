import express from "express";
import expenseController from "./Controller.js"

const router = express()

/**
 * @swagger
 *  components:
 *      schemas:
 *          Expense:
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
 *  /api/v1/expense/user/{userId}/:
 *      get:
 *          summary: Fetch All Expenses for a specific user
 *          tags:
 *              - Expense
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the user
 *          responses:
 *              200:
 *                  description: Returning Expense
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref:   '#/components/schemas/Expense'
 *                        
 */


router.get('/user/:userId', expenseController.fetchExpense);
/**
 * @swagger
 *  /api/v1/expense/user/{userId}:
 *    post:
 *          summary: Add a new Expense for a specific user
 *          tags:
 *              - Expense
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
 *                          $ref: '#/components/schemas/Expense'
 *          responses:
 *              201:
 *                  description: Expense Added Successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Expense'
 *              400:
 *                  description: Bad request, check request body
 *                                  
 *          
 *  
 */
router.post('/user/:userId', expenseController.addExpense);

/**
 * @swagger
 *  /api/v1/expense/{expenseId}/user/{userId}:
 *      delete:
 *          summary: Delete Expense By ID for a specific user
 *          tags:
 *              - Expense
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the user
 *              - in: path
 *                name: expenseId
 *                required: true
 *                schema:
 *                  type: string
 *                description: ID of the Expense
 *          responses:
 *              204:
 *                  description: Expense Deleted Successfully
 *              404:
 *                  description: Expense not found
 */

// router.delete('user/:userId/expense/:expenseId', expenseController.deleteExpense);
router.delete('/:expenseId/user/:userId/', expenseController.deleteExpense);

export default router
