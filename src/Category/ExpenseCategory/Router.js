import express from "express";
import expenseCatgoryController from "./Controller.js";

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          ExpenseCategory:
 *              type: object
 *              required:
 *                  - title
 *                  - description
 *              properties:
 *                  title:
 *                      type: string
 *                  description:
 *                      type: string
 *
 *
 */

/**
 * @swagger
 *  /api/v1/expense-category:
 *      get:
 *          summary: Get all expense category
 *          tags:
 *              - ExpenseCategory
 *          responses:
 *              200:
 *               description: Return array of Expense Category
 *               content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref:  '#/components/schemas/ExpenseCategory'
 *
 *
 *
 */
router.get("/", expenseCatgoryController.getAllCategories);

/**
 * @swagger
 *  /api/v1/expense-category:
 *      post:
 *          summary: Add a new Expense Category
 *          tags:
 *              - ExpenseCategory
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ExpenseCategory'
 *          responses:
 *              201:
 *                  description: Expense Category Added Successfully
 *                  content:
 *                        application/json:
 *                            schema:
 *                              $ref: '#/components/schemas/ExpenseCategory'
 *              400:
 *                      description: Bad request , check the request body
 *
 */

router.post("/", expenseCatgoryController.addCategory);


export default router;
