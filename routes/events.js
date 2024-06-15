import fs from "fs";
import path from 'path';

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

//get one upcoming event by id
export function getUpcomingEventById(id){
  
  try {
    // const data = fs.readFileSync(filePath, 'utf8');
    const events = getAllUpcomingEvents()
    for(let i = 0; i <= events.length; i++){
      if(events[i].id === id)
    console.log('your event', events[i]);
   return events[i] ;
    }
   
  } catch (err) {
    console.error(err);
    throw new Error(err.message)
  }
}