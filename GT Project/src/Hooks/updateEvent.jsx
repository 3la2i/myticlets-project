import axios from "axios";

async function EditEvent(url, id , updatedData) {
    
  try {
    await axios.patch(`${url}/Events/${id}.json`, updatedData);
    console.log("Event created successfully:", { updatedData,  id });

  } catch (error) {
    console.error("Error creating event:", error);
  }
}

export default EditEvent;

