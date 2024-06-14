import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { getAllUpcomingEvents } from "./events.js";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  console.log("test");
  res.send("server running!");
});

app.get("/upcoming-events", async (req, res) => {
  try {
    const upcomingEvents = await getAllUpcomingEvents();
    if (upcomingEvents.success) {
      res.status(200).json(upcomingEvents);
    } else {
      res.status(404).json({
        success: false,
        error: "No upcoming events found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
