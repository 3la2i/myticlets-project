import MainButton from "../Components/Buttons/MainButton";
import { useNavigate } from "react-router-dom";

function TicketCard({ name, startDate, endDate, price, eventId, img }) {
  const navigate = useNavigate();
  const handleSelectTicket = (ticketId) => {
    localStorage.setItem("Event id", JSON.stringify(ticketId));
    navigate("details");
  };

  return (
    // <div
    //   id="card"
    //   className="relative z-10 bg-second-dark rounded-2xl flex p-6 flex-col items-center gap-3 justify-between transition-transform duration-200 hover:scale-105 hover:bg-gradient-four-colors"
    // >
    <div
      id="card"
      className="relative z-10 bg-gradient-prim rounded-2xl flex p-6 flex-col items-center gap-3 justify-between transition-transform duration-200 hover:scale-105 hover:bg-gradient-second"
    >
      <div id="img" className="h-1/2 w-full rounded-lg overflow-hidden">
        <img
          src={img}
          alt="Event"
          className="object-cover h-full w-full"
          style={{ objectFit: "cover", minHeight: "100%", minWidth: "100%" }}
        />
      </div>

      <div id="" className="self-stretch w-full flex flex-col gap-3">
        <div id="content" className="flex flex-col gap-1">
          <h6
            id="name"
            className="self-stretch text-text-prim font-medium font-sans "
          >
            {name}
          </h6>
          <p id="date" className="text-sm text-text-second font-semibold">
            Start : {startDate}
            <br />
            End : {endDate}
          </p>
          <p id="price" className="text-base text-text-prim font-bold">
            ${price}
          </p>
        </div>
        <MainButton
          id={eventId}
          className="flex self-stretch w-full"
          onClick={() => handleSelectTicket(eventId)}
        >
          Select Ticket
        </MainButton>
      </div>
    </div>
  );
}

export default TicketCard;
