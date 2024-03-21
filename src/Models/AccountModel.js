import mongoose from "mongoose"; 

const { Schema, model } = mongoose;

const AccountSchema = new Schema(
    {
     
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true 
        },
        phone: {
            type: Number, 
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true 
        },
        password: {
            type: String,
            required: true,
            trim: true 
        }
    },
    { timestamps: true, versionKey: false } 
);

const Account = model("Account", AccountSchema);

export default Account;
