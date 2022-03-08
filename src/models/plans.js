import { Schema, model } from "mongoose";
const planSchema = new Schema(
    {
      NamePlan: {
        type: String,
        required: true,
        trim: true
      },
      Description: {
        type: String,
        trim: true
      },
      Price: {
        type: Number,
        required: true,
        unique: true,
      },
      unique: {
        type: Number,
        required: true
      }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  export default model("Plan", planSchema);