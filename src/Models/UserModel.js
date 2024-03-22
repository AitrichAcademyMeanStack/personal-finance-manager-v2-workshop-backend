import mongoose from "mongoose"; 

const { Schema, model } = mongoose;

const UserSchema = new Schema(
    {
        firstname: {
            type: String,
            // required: true,
            trim: true,
                },
        lastname: {
            type: String, 
            // required: true,
        
            trim: true
        },
        email: {
            type: String,
            // required: true,
            trim: true,
            unique: true 
        },
        phone: {
            type: Number, 
            // required: true,
            trim: true
        },
        username: {
            type: String,
            // required: true,
            trim: true,
            unique: true 
        },
        password: {
            type: String,
            // required: true,
            trim: true 
        },
        
    },
    { timestamps: true, versionKey: false } 
);

const User = model("User", UserSchema);

export default User;
