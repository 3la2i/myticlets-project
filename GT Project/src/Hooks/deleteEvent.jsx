import axios from "axios";

async function DeleteEvent(url, id) {
  try {
    await axios.patch(`${url}/Events/${id}.json`, { isDeleted: true });
    console.log(`Event with ID ${id} marked as deleted.`);
  } catch (error) {
    console.error("Error marking event as deleted:", error);
  }
}

export default DeleteEvent;
