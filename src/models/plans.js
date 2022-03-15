import { Schema, model } from "mongoose";
const planSchema = new Schema(
    {
      Plan: {
        type: String,
        trim: true
      },
      Description: {
        type: String,
        trim: true
      },
      Price: {
        type: String,
        unique: true,
      }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  export default model("Plan", planSchema);