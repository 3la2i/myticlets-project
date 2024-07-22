import { Carousel } from "flowbite-react";
import hero from "../images/1.png";
import hero2 from "../images/2.png";
import hero3 from "../images/3.png";
import hero4 from "../images/4.png";
import hero5 from "../images/6.png";

import TicketCard from "../Components/TicketCard";
import SpecialOfferCard from "../Components/SpecialOfferCard"; // Import the new component
import FetchEvents from "../Hooks/getEvents";
import { dbURL } from "../FirebaseConfig/Config";
import { Accordion } from "flowbite-react";

export default function HomeComponent() {
  const [events] = FetchEvents(dbURL);

  // Sample data for additional cards (you can replace this with real data or adjust as needed)
  const additionalCards = [
    {
      title: "Special Event 1",
      description: "Join us for a special event featuring unique activities.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/project-4-bbf17.appspot.com/o/Apex%20Legends%2F1340730.jpeg?alt=media&token=2a257251-0585-4bb6-af4e-41fe4c824a28",
      previous_price: "100$",
      current_price: "70$",
    },
    {
      title: "Special Event 2",
      description: "Don’t miss out on this exclusive opportunity.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/project-4-bbf17.appspot.com/o/Magic%3A%20The%20Gathering%2F1305445.jpg?alt=media&token=c7dcd886-979b-4d8f-8e2a-2cd5df55bfe8",
      previous_price: "180$",
      current_price: "75$",
    },
    {
      title: "Special Event 3",
      description: "Experience something extraordinary with us.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/project-4-bbf17.appspot.com/o/Smash%20World%20Tour%2Fsmash-world-tour_feature.jpg?alt=media&token=3bf7da7e-199a-4135-9644-1ca7a2d71095",
      previous_price: "200$",
      current_price: "100$",
    },
  ];

  return (
    <div className="min-h-screen h-full ml-20 mr-20 mb-12   mt-10">
      <Carousel className="h-full rounded-lg h-[400px]">
        <img src={hero} alt="..." className="rounded-xl" />
        <img src={hero2} alt="..." className="rounded-xl" />
        <img src={hero3} alt="..." className="rounded-xl" />
      </Carousel>

      <h2 className="text-2xl font-bold mt-12 text-white">
        Currently Trending Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {events &&
          events
            .slice(0, 3)
            .map((event) => (
              <TicketCard
                key={event.id}
                name={event.name}
                startDate={event.startDate}
                endDate={event.endDate}
                price={event.price}
                eventId={event.id}
                img={event.image}
              />
            ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 text-white">Upcoming Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {events &&
          events
            .slice(3, 6)
            .map((event) => (
              <TicketCard
                key={event.id}
                name={event.name}
                startDate={event.startDate}
                endDate={event.endDate}
                price={event.price}
                eventId={event.id}
                img={event.image}
              />
            ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 text-white">Most Liked</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {events &&
          events
            .slice(6, 9)
            .map((event) => (
              <TicketCard
                key={event.id}
                name={event.name}
                startDate={event.startDate}
                endDate={event.endDate}
                price={event.price}
                eventId={event.id}
                img={event.image}
              />
            ))}
      </div>

      <div className="flex justify-center mt-20 m-auto mb-3 border-blk">
        <Accordion
          className="ms-70 mt-4 self-center text-white bg-second-dark"
          style={{ width: "1350px" }}
        >
          <h1 className="text-left font-bold text-2xl ml-5 mb-4 mt-4">FAQ's</h1>
          <Accordion.Panel className="border-black focus:ring-transparent bg-blk">
            <Accordion.Title className="text-white bg-blk text-sm hover:bg-blk focus:ring-transparent">
              How do I purchase tickets for a gaming event on GTickets?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-white text-sm">
                Visit our website at GTickets.com. Browse or search for the
                gaming event you want to attend. Click on the event to view more
                details. Select the number of tickets you want and click "Buy
                Now". Complete the checkout process by entering your payment and
                contact information. Once your purchase is complete, you will
                receive a confirmation email with your e-tickets.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel className="border-black focus:ring-transparent">
            <Accordion.Title className="text-white text-sm bg-blk hover:bg-blk focus:ring-transparent">
              Can I get a refund or exchange my tickets if I can’t attend the
              event?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-white text-sm">
                Refunds and exchanges are subject to the event organizer's
                policy. Typically, tickets are non-refundable and
                non-exchangeable unless the event is canceled or rescheduled.
                Please check the specific event's refund policy on the event
                details page or contact our customer support for further
                assistance.Flowbite is first conceptualized and designed using
                the Figma software so everything you see in the library has a
                design equivalent in our Figma file.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel className="border-black focus:ring-transparent">
            <Accordion.Title className="text-white bg-blk text-sm hover:bg-light focus:ring-transparent">
              How will I receive my tickets after purchase?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-white text-sm">
                After you complete your purchase on GTickets, you will receive
                an email confirmation with your e-tickets attached. You can
                either print the tickets or display them on your mobile device
                at the event entrance. Make sure to bring a valid ID matching
                the name on the ticket for verification.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel className="border-black focus:ring-transparent">
            <Accordion.Title className="text-white text-sm bg-blk hover:bg-light focus:ring-transparent">
              What should I do if I haven’t received my e-tickets?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-white text-sm">
                If you haven’t received your e-tickets, please check your spam
                or junk email folder. If they are not there, contact our
                customer support team with your order number and email address
                used for the purchase. We will promptly resend your tickets to
                ensure you receive them in time for the event.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <section className="py-6 dark:bg-gray-100 text-white mt-20">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            Meet Our team
          </h1>
          <p className="max-w-2xl text-center dark:text-gray-600">
            Skilled developers crafting seamless ticketing experiences for
            gaming enthusiasts.
          </p>
          <div className="flex flex-row flex-nowrap justify-center overflow-auto">
            <div className="flex flex-col justify-center m-4 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={hero4}
              />
              <p className="text-xl font-semibold leading-tight">
                Obada Jawabreh
              </p>
              <p className="dark:text-gray-600">Scrum Master</p>
            </div>
            <div className="flex flex-col justify-center m-4 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={hero4}
              />
              <p className="text-xl font-semibold leading-tight">
                Noor Atallah
              </p>
              <p className="dark:text-gray-600">Product Owner</p>
            </div>
            <div className="flex flex-col justify-center m-4 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={hero4}
              />
              <p className="text-xl font-semibold leading-tight">
                Abd-alrahman Mnasour
              </p>
              <p className="dark:text-gray-600">QA</p>
            </div>
            <div className="flex flex-col justify-center m-4 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={hero4}
              />
              <p className="text-xl font-semibold leading-tight">Alaa Ata</p>
              <p className="dark:text-gray-600">Developer</p>
            </div>
            <div className="flex flex-col justify-center m-4 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={hero4}
              />
              <p className="text-xl font-semibold leading-tight">
                Mariam Khasawneh
              </p>
              <p className="dark:text-gray-600">Developer</p>
            </div>
            <div className="flex flex-col justify-center m-4 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={hero4}
              />
              <p className="text-xl font-semibold leading-tight">
                Hashem Frehat
              </p>
              <p className="dark:text-gray-600">Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
