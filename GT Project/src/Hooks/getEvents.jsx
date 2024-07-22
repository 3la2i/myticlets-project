import { dbURL } from "../FirebaseConfig/Config";


import { useState, useEffect } from "react";
import axios from "axios";

function FetchEvents(url) {
  const [Events, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/Events.json`);
        const data = response.data;

        if (data) {
          const eventsArray = Object.keys(data).map((key) => ({
            id: parseInt(key, 10),
            ...data[key],
          }));
          setData(eventsArray);
        } else {
          console.log("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }  , [url]);

  return [Events];
}

export default FetchEvents;
