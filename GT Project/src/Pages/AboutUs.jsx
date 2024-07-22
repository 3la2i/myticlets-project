import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import hero4 from "../images/4.png";

function AboutUs() {
  return (
    <div className=" mx-8 sm:mx-8 lg:mx-12 xl:mx-24 h-auto flex flex-col gap-0 py-20">
      <Hero />
      <Mission />
      <Team />
    </div>
  );
}

function Hero() {
  return (
    <div className=" flex-col min-h-full  text-center content-center m-0 md:mx-16">
      <div
        id="gradiant"
        className="absolute top-0 left-0 right-0 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl  bg-indigo-800  "
      ></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 ">
        <div className="felx con">
          <img src={about1} alt="" />
        </div>
        <div className="flex flex-col justify-center text-start">
          <p className="text-text-prim font-bold text-3xl font-sans">
            About Us
          </p>
          <div className="w-full flex content-center text-start justify-center">
            <p className="text-text-second font-semibold text-xl font-sans">
              At GTickets we are passionate about bringing gamers and eSports
              enthusiasts together. Founded by a team of dedicated gaming
              aficionados, our mission is to revolutionize the way you
              experience eGaming events by providing a seamless and exciting
              ticketing platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className=" flex-col min-h-full  text-center content-center m-0 md:mx-16">
      <div
        id="gradiant"
        className="absolute top-0 left-0 right-0 w-80 md:w-96 h-96 shrink-0 rounded-full blur-3xl  bg-indigo-800  "
      ></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center text-start">
          <p className="text-text-prim font-bold text-3xl font-sans">
            Our Mission
          </p>
          <div className="w-full flex content-center text-start justify-center">
            <p className="text-text-second font-semibold text-xl font-sans">
              Our mission is to revolutionize the eGaming experience by
              providing a seamless and accessible ticketing platform that
              connects gamers to the events they love.
            </p>
          </div>
        </div>
        <div className="felx con">
          <img src={about2} alt="" />
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <section className="py-6 dark:bg-gray-100 text-white mt-20">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="font-bold leading-none text-center text-3xl  text-text-prim">
          Meet Our team
        </h1>
        <p className="max-w-2xl text-center text-text-second text-lg">
          Skilled developers crafting seamless ticketing experiences for gaming
          enthusiasts.
        </p>
        <div className="flex flex-row flex-nowrap justify-center overflow-auto">
          <div
            id="teamMember"
            className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-6 "
          >
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
      </div>
    </section>
  );
}
export default AboutUs;
