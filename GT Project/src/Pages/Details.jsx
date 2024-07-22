import { dbURL } from "../FirebaseConfig/Config";
import FetchEventById from "../Hooks/getEventByID";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import MainButton from "../Components/Buttons/MainButton";

const EventDetails = () => {
  const navigate = useNavigate();
  const eventId = JSON.parse(localStorage.getItem("Event id"));
  console.log("the id ", eventId);

  const [event, setEvent] = useState({});
  console.log(event);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${dbURL}/Events/${eventId}.json`);
        const eventData = response.data;

        console.log("Fetched event data: ", eventData);

        if (eventData) {
          setEvent(eventData);
        } else {
          console.log(`No data found for event with ID: ${eventId}`);
        }
      } catch (error) {
        console.error(
          `Error fetching data for event with ID: ${eventId}`,
          error
        );
      }
    };

    if (eventId !== null) {
      fetchEvent();
    }
  }, [eventId]);

  const [count, setCount] = useState(0);
  const ticketPrice = event.price;
  const totalPrice = count * ticketPrice;

  const handleIncrease = () => {
    if (count < event.numTickets) setCount(count + 1);
    if (count > 0 && count == event.numTickets) {
      Swal.fire({
        title: "The max number of tickets",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handelSelect = () => {
    if (count > 0) {
      localStorage.setItem("count tickets", JSON.stringify(count));
      localStorage.setItem("price tickets", JSON.stringify(totalPrice));
      localStorage.setItem(
        "all count tickets",
        JSON.stringify(event.numTickets)
      );

      navigate("/checkout");
    } else if (event.numTickets) {
      Swal.fire({
        title: "Sorry!",
        text: "Please select the number of tickets",
        icon: "question",
      });
    } else
      Swal.fire({
        title: "Sorry!",
        text: "The number of available tickets has sold out",
        icon: "error",
        confirmButtonText: "OK",
      });
  };
  if (!event) return <p>Loading...</p>;

  return (
    <>
      <div className=" bg-prim-dark text-white ">
        <main className="grid grid-col-1 lg:grid-cols-3 mx-8 sm:mx-8 lg:mx-12 xl:mx-24  my-12 gap-6">
          <div className="col-span-2 flex flex-col gap-4">
            <div id="img" className="bg-card rounded-lg ">
              <img
                src={event.image}
                alt="Event Banner"
                className="w-full h-100 object-cover rounded-lg"
              />
            </div>
            <div id="Content" className="flex flex-col gap-1">
              <h1 className="text-2xl  font-bold font-sans text-text-prim">
                {event.name}
              </h1>
              <p
                id="desciption"
                className="text-white text-opacity-50 mb-8 w-full lg:w-2/3 font-sans text-text-second"
              >
                {event.description}
              </p>
            </div>
          </div>
          {/* card details */}
          <div className="flex flex-col	">
            <div className=" text-white p-6 h-fit rounded-lg border-2 border-[#ff0055] w-full">
              <div id="avilabel" className="flex items-center ">
                {event.numTickets ? (
                  <span className="text-zinc-400">
                    Available: {event.numTickets}{" "}
                  </span>
                ) : (
                  <span className="text-red-400">Sold out</span>
                )}
              </div>

              <hr className="border-zinc-500 mb-4" />

              <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold">{event.price} JD</span>
                <div className="w-1/2">
                  <MainButton
                    className="bg-custom-red text-white py-2 px-4 rounded-lg hover:bg-custom-red-hover/80"
                    onClick={handelSelect}
                  >
                    Select Ticket
                  </MainButton>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <button
                    onClick={handleDecrease}
                    className="text-white bg-[#ff0055] px-2 py-1 rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="mx-4 text-lg">{count}</span>
                  <button
                    onClick={handleIncrease}
                    className="text-white bg-[#ff0055] px-2 py-1 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
                <span className="text-lg mx-8">{totalPrice} JD</span>
              </div>

              <hr className="border-zinc-500 mb-4 mt-9" />
              <div className="flex items-center mb-2">
                <img
                  aria-hidden="true"
                  alt="calendar-icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMBJREFUSEtjZKAxYKSx+Qx4LfjPy/sf5ADGz5+xqiMkD9aLzweEDCAkj2HBf15efwYGhg4GBgYNMoPuOgMjYwnjp0/bYPpRfPCfl/cJAwODNJmGw7TdY/z8WRmXBeAwpxQgxxm6D+hjAa5UQ8hn2CIdqw+GjwXoXiaVjy0foORcUg0cjQMGUoNsNA4wMvYgSEU8PA8ZGBnlCJU5BOQfMH7+rIiruAZVOJ0MDAzqZFpyiYGRsRJnhUOmoXi10bxVAQDOUr4ZXgKLyQAAAABJRU5ErkJggg=="
                  className="mr-2 "
                />
                <span className="text-zinc-400">
                  Start Date : {event.startDate}
                </span>
              </div>
              <span className="text-zinc-400 ml-8">
                End Date : {event.endDate}
              </span>
            </div>
          </div>
        </main>
      </div>
      <div className="mx-8 sm:mx-8 lg:mx-12 xl:mx-24 mb-40 my-12 ">
        <div id="featuers-Hiding">
          <p className="font-sans text-text-prim font-bold text-2xl">
            Event Location
          </p>
        </div>
        <iframe
          className="frameOfGps rounded-xl"
          width="100%"
          height="500px"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            event.location
          )}+(culture)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
          title="Event Location"
        >
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(
              event.location
            )}+(culture)`}
          >
            View on Google Maps
          </a>
        </iframe>
      </div>
    </>
  );
};

export default EventDetails;
