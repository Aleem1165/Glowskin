import React, { useState } from "react";
import images from "../../utilities/images";

export default function AboutUs() {
  const [signin, setSignin] = useState(false);
  const [progress, setProgress] = useState(40);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div
        className="p-4 bg-cover bg-center"
        style={
          {
            //   backgroundImage: `url(${images.dashboardBackground})`,
          }
        }
      >
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-semibold text-3xl border-b-4 border-lineBlue pb-1 pr-3">
            About Us
          </div>
          <p className="text-white text-opacity-50 mt-3 ">
            Welcome to Glowskin, your premier destination for CSGO Unboxing.
          </p>
        </div>

        <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
          <div className="text-white text-xl font-semibold ">Our Story</div>
          <p className="text-white text-opacity-50 w-full   ">
            Established by Hobbes, a seasoned CSGO gamer, Glowskin was born from
            the vision to create a transparent, responsible and thrilling CSGO
            unboxing platform.
          </p>
        </div>
        <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
          <div className="text-white text-xl font-semibold ">
            Our Philosophy
          </div>
          <p className="text-white text-opacity-50 w-full   ">
            At Glowskin, we believe in the power of fair play. We aim to offer a
            unique, exciting and above all, secure unboxing environment that
            caters to the worldwide CSGO community.
          </p>
        </div>
        <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
          <div className="text-white text-xl font-semibold ">Our Team</div>
          <p className="text-white text-opacity-50 w-full   ">
            Our administrative team, Sh3fas and Deviation, work tirelessly to
            maintain the integrity and functionality of our platform, while our
            SEO Manager, Gabriele Asaro, ensures we remain a leading name in the
            CSGO unboxing community.
          </p>
        </div>
        <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md mb-5">
          <div className="text-white text-xl font-semibold ">
            Our Commitment
          </div>
          <p className="text-white text-opacity-50 w-full ">
            We strive to continually enhance the CSGO unboxing experience,
            offering an exciting and secure platform for all our users.
          </p>
        </div>
      </div>
    </div>
  );
}
