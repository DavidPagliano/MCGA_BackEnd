import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
      trim: true
    },
    LastName: {
      type: String,
      trim: true
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Phone: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Contact", contactSchema);