import express from "express";
import incomeCategoryController from "./Controller.js";

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          IncomeCategory:
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
 *  /api/v1/income-category:
 *      get:
 *          summary: Get all expense category
 *          tags:
 *              - IncomeCategory
 *          responses:
 *              200:
 *               description: Return array of Expense Category
 *               content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref:  '#/components/schemas/IncomeCategory'
 *
 *
 *
 */
router.get("/", incomeCategoryController.getAllCategories);

/**
 * @swagger
 *  /api/v1/income-category:
 *      post:
 *          summary: Add a new Expense Category
 *          tags:
 *              - IncomeCategory
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/IncomeCategory'
 *          responses:
 *              201:
 *                  description: Expense Category Added Successfully
 *                  content:
 *                        application/json:
 *                            schema:
 *                              $ref: '#/components/schemas/IncomeCategory'
 *              400:
 *                      description: Bad request , check the request body
 *
 */

router.post("/", incomeCategoryController.addCategory);

export default router;
