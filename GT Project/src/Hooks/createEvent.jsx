import axios from "axios";

async function CreateEvent(url, ids, data) {
    
  try {
    await axios.put(`${url}/Events/${ids}.json`, { ...data, id: ids });
    console.log("Event created successfully:", { ...data, id: ids });

  } catch (error) {
    console.error("Error creating event:", error);
  }
}

export default CreateEvent;
