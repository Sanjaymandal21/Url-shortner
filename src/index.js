//import...http
import "dotenv/config";
import http from "http";
import app from "./app.js";
import connectDB from "./db/db.connect.js";

import { config, sendMail } from "./utils/mailer.js";

//create Server..
const server = http.createServer(app);

const PORT = process.env.PORT;
await config(
  process.env.USER_EMAIL,
  process.env.APP_PASSWORD,
  process.env.SMTP_HOST,
  process.env.SMTP_PORT
);
await sendMail("sanjaymandal9058@gmail.com", "OTP", "Your otp is: 1234");

//listen on any port..
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  connectDB();
});
