import express from "express";
import { config } from "dotenv";
import cors from "cors";
// configures dotenv to work in your application
config();
const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your Next.js app's URL


const PORT = process.env.PORT;

const data = [
    {id: 1, name: "dominik"},
    {id: 2, name: "noel"},
]

app.get("/api", (request, response) => { 
  response.status(200).json(data);
}); 


app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
})