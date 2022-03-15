import { config } from "dotenv";

config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'beliewebdb',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${process.env.MONGODB_DATABASE || "beliewebdb"}`,
  PORT: process.env.PORT || 3000,
  SECRET: 'belie-api'
};