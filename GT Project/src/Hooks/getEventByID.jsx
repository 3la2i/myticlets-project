import { useState, useEffect } from "react";
import axios from "axios";

function FetchEventById(url, id) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/Events/${id}.json`);
        const data = response.data;

        if (data) {
          setEvent({ id, ...data });
        } else {
          console.log(`No data found for event with ID: ${id}`);
        }
      } catch (error) {
        console.error(`Error fetching data for event with ID: ${id}`, error);
      }
    };

    fetchData();
  }, [url, id]);

  return [event];
}

export default FetchEventById;
