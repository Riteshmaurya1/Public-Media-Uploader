import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import mediaRoutes from "./routes/mediaRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// Routes
app.use("/api/media", mediaRoutes);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Public Media Uploader API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f3f4f6;
          color: #1f2937;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #2563eb;
          font-size: 2.5rem;
        }
        p {
          margin-top: 10px;
          font-size: 1.1rem;
        }
        code {
          background-color: #e5e7eb;
          padding: 4px 8px;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Public Media Uploader API</h1>
      <p>Status: <strong>Running</strong></p>
      <p>Use endpoint: <code>/api/media/upload</code> to upload media</p>
    </body>
    </html>
  `);
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
