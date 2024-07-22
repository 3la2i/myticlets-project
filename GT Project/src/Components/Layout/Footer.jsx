
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Foot() {
  return (
    <Footer container className="bg-blk ">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
          <div>
            <Footer.Brand
               href="#"
               name={<span className="text-white">GTickets</span>}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-white" title="about" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="#">GTickets</Footer.Link>
                <Footer.Link className="text-white" href="#">GT Team</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="#">Github</Footer.Link>
                <Footer.Link className="text-white" href="#">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="#">Privacy Policy</Footer.Link>
                <Footer.Link className="text-white" href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className="text-white" href="#" by="GTickets™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
            <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
            <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-white" href="#" icon={BsGithub} />
            <Footer.Icon className="text-white" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
