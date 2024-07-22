import heroImg from "../images/heroImg.png";
import cta from "../images/cta.png";
import hero4 from "../images/4.png";
import { Accordion } from "flowbite-react";
import MainButton from "../Components/Buttons/MainButton";
import { useState } from "react";
// import hero3 from "../images/3.png";

function Home() {
  return (
    <div className="flex flex-col gap-10  mx-8 sm:mx-8 lg:mx-12 xl:mx-24">
      <Hero />
      <Featuers />
      <CTA />
      <FAQ />
      <aboutUs />
    </div>
  );
}

function Hero() {
  return (
    <div
      id="hero-container"
      className=" relative grid grid-cols-1 md:grid-cols-2 justify-center content-center "
    >
      <div
        id="gradiant"
        className="absolute top-0 left-0 right-0 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl  bg-indigo-800  "
      ></div>
      <div
        id="gradiant"
        className="absolute bottom-0 right-100 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl bg-none  sm:bg-pink-500"
      ></div>
      <div id="img" className="relative z-10">
        <img src={heroImg} />
      </div>
      <div
        id="content"
        className=" content-center justify-center relative z-10 "
      >
        <div id="text" className=" flex flex-col gap-6">
          <p className="text-text-prim  font-sans font-bold text-3xl md:text-7xl ">
            Experience the Ultimate eGaming Events Live!
          </p>
          <p className="text-text-second font-sans font-medium text-lg md:text-xl text-justify">
            Get your tickets for the most exciting tournaments and gaming
            conventions around the world.
          </p>
          <div id="btns" className="w-1/2">
            <MainButton className="font-sans">Explore Now</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function Featuers() {
  const [featuersList, setFeatuersList] = useState({
    featuers: [
      {
        featuer: "  Wide Range of Events",
        description:
          "Access tickets to the hottest eGaming events worldwide, from major tournaments to local gaming conventions",
      },
      {
        featuer: "Easy and Secure Ticket Purchasing ",
        description:
          "Enjoy a seamless and secure ticket buying experience with multiple payment options.",
      },
      {
        featuer: "Exclusive Offers and Discounts",
        description:
          "Take advantage of special promotions, early bird discounts, and group rates.",
      },
      {
        featuer: "  Event Location in Map",
        description:
          " Easily find the event venue with interactive maps showing the location ",
      },
    ],
  });
  return (
    <div className="pt-12">
      <div id="featuers-Hiding">
        <p className="font-sans text-text-prim font-bold text-2xl">
          Featuers For You
        </p>
      </div>
      <div
        id="featuers-list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 gap-6 py-6"
      >
        {featuersList.featuers.map((featuer) => (
          <FeatuerCard
            key={featuer.id}
            featuer={featuer.featuer}
            description={featuer.description}
          />
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 gap-6 py-6"></div>
  // );
}

function FeatuerCard({ featuer, description }) {
  return (
    <div>
      <div
        id="card"
        className=" h-full relative z-10 bg-gradient-prim rounded-2xl flex p-7 flex-col items-center gap-4 justify-between font-sans text-start align-start "
      >
        <div className="w-full">
          <p id="featuer" className="text-purple-300  text-lg bold font-bold">
            {featuer}
          </p>
        </div>
        <div>
          <p
            id="description"
            className="text-text-second text-start font-medium text-base"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div
      id="card "
      className="grid grid-cols-1 md:grid-cols-2 bg-gradient-second p-10 md:p-20 rounded-2xl "
    >
      <div
        id="gradiant"
        className="absolute top-0 left-0 right-0 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl  bg-indigo-800  "
      ></div>
      <div id="content" className="flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-text-prim font-sans font-bold text-2xl md:text-4xl">
            Be Part of the Biggest eGaming Events!
          </p>
          <p className="font-sans font-medium text-text-second text-lg md:text-xl">
            Create an account and get your tickets for the hottest eGaming
            events.
          </p>
        </div>
        <div className="w-full md:w-1/2 ">
          <MainButton>Available Tickets</MainButton>
        </div>
      </div>
      <div
        id="img"
        className=" justify-end hidden md:flex invisible md:visible"
      >
        <div
          id="gradiant"
          className="absolute top-0 left-0 right-0 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl  bg-indigo-800  "
        ></div>
        <img src={cta} className="w-1/2 h-auto" />
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="flex justify-center mt-20 m-auto mb-3 w-full">
      <Accordion className="self-center text-white bg-second-dark w-full">
        <h1 className="text-left font-bold text-2xl ml-5 mb-4 mt-4">FAQ's</h1>
        <Accordion.Panel className="focus:ring-transparent bg-blk">
          <Accordion.Title className="text-white bg-blk text-sm hover:bg-blk focus:ring-transparent">
            How do I purchase tickets for a gaming event on GTickets?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white text-sm">
              Visit our website at GTickets.com. Browse or search for the gaming
              event you want to attend. Click on the event to view more details.
              Select the number of tickets you want and click "Buy Now".
              Complete the checkout process by entering your payment and contact
              information. Once your purchase is complete, you will receive a
              confirmation email with your e-tickets.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="focus:ring-transparent">
          <Accordion.Title className="text-white text-sm bg-blk hover:bg-blk focus:ring-transparent">
            Can I get a refund or exchange my tickets if I can’t attend the
            event?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white text-sm">
              Refunds and exchanges are subject to the event organizer's policy.
              Typically, tickets are non-refundable and non-exchangeable unless
              the event is canceled or rescheduled. Please check the specific
              event's refund policy on the event details page or contact our
              customer support for further assistance.Flowbite is first
              conceptualized and designed using the Figma software so everything
              you see in the library has a design equivalent in our Figma file.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="focus:ring-transparent">
          <Accordion.Title className="text-white bg-blk text-sm hover:bg-light focus:ring-transparent">
            How will I receive my tickets after purchase?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white text-sm">
              After you complete your purchase on GTickets, you will receive an
              email confirmation with your e-tickets attached. You can either
              print the tickets or display them on your mobile device at the
              event entrance. Make sure to bring a valid ID matching the name on
              the ticket for verification.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="focus:ring-transparent">
          <Accordion.Title className="text-white text-sm bg-blk hover:bg-light focus:ring-transparent">
            What should I do if I haven’t received my e-tickets?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white text-sm">
              If you haven’t received your e-tickets, please check your spam or
              junk email folder. If they are not there, contact our customer
              support team with your order number and email address used for the
              purchase. We will promptly resend your tickets to ensure you
              receive them in time for the event.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
export default Home;
