import fs from "fs";
// import path from 'path';

export function getAllUpcomingEvents() {
  // const filePath = path.join(process.cwd(), 'assets', 'upcomingEvents.json');

  try {
    const events = JSON.parse(
      fs.readFileSync("./assets/upcomingEvents.json", "utf8")
    );
    return { success: true, payload: events };
  } catch (err) {
    return { success: false, error: err };
  }
}
