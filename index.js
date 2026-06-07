import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World v4.1",
    status: "Github actions",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
