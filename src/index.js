import express from 'express';  // Importing Express.js
import dotenv from 'dotenv';   // Importing Dotenv
import cors from 'cors'; // Importing Cors
import connectToDatabase from "./Config/db.js"; // Importing Database Connection
import NotFoundError from './Exceptions/NotFoundError.js'; // Importing NotFoundError
// import { ErrorHandler } from './Utils/errorHandler.js'; // Importing Global Error Handler
import expenseRouter from "../src/Expense/Router.js" // Importing routes of Expense
import incomeRouter from "../src/Income/Router.js" // Importing routes of Income
import swaggerjsdoc from 'swagger-jsdoc' // importing swagger-jsdoc
import swaggerui from 'swagger-ui-express' // imorting swagger-ui-express
import path , { dirname }  from 'path'; // importing path , dirname API'S from path module
import { fileURLToPath } from 'url'; // importing url module
import profileRouter from "./Profile/Router.js";
import logger from "./Middleware/logger.js"
const __dirname = dirname(fileURLToPath(import.meta.url)); // Configuring dirname path
import userRouter from "./User/Router.js";
import expenseCategoryRouter from "./Category/ExpenseCategory/Router.js";
import incomeCategoryRouter from "./Category/IncomeCategory/Router.js";



// configuring .env file
dotenv.config({     
    path:"./.env"
})




const app = express()
app.use(express.static("File"))
// Defining Middleware
app.use(express.json())
app.use(cors())

//app.use('/File', express.static(path.join(__dirname, 'File')));
// Setup swagger
const swaggerDefinition = {
    openapi: "3.0.0",
    info:{
        title:"Expense Tracker",
        version:"1.0.0",
        description:"API FOR PERSONAL FINANCE MANAGEMENT"
    },
servers: [
    {
        url: "http://localhost:8080"
    },
],

}

// Swagger routes
const options = {
  swaggerDefinition,
  apis: [
    path.join(__dirname, "Expense", "Router.js"),
    path.join(__dirname, "Income", "Router.js"),
    path.join(__dirname, "User", "Router.js"),
    path.join(__dirname, "Account", "Router.js"),
    path.join(__dirname, "Category", "ExpenseCategory", "Router.js"),
    path.join(__dirname, "Category", "IncomeCategory", "Router.js"),
    path.join(__dirname, "Profile", "Router.js"),

  ],
};

const swaggerspecs = swaggerjsdoc(options);
app.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerspecs,{
    swaggerOptions: {
        docExpansion: "none",
    },
    customSiteTitle: "Personal Finance Management API"
}));

// Defining Routes
// app.use("/api/v1/user/:userId/expense",expenseRouter);

app.use("/api/v1/expense",expenseRouter);
app.use("/api/v1/income",incomeRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/profile",profileRouter);
app.use("/api/v1/expense-category", expenseCategoryRouter);
app.use("/api/v1/income-category", incomeCategoryRouter);

 


// Handling unmatched URL'S
// app.use("*" , (req , res , next) => {
//     const error =  new NotFoundError("Invalid Url")
//     next(error)

// })

// Global Error Handler
// app.use(ErrorHandler)

// Calling Database Connection
connectToDatabase()
  .then(() => {
    // After connecting to database, listening to server
    app.listen(process.env.PORT || 4000, () =>
      console.log(`💻 Server is listening on port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    logger.error("MongoDB Connection failed", err);
  });





