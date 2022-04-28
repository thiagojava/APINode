const dotenv = require("dotenv");

dotenv.config();
const connectToDatabase = require("./src/database/connect");

require("./modules/express");

connectToDatabase();
