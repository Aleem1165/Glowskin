import React, { useState } from "react";
import images from "../../utilities/images";

export default function ContactUs() {
  const [signin, setSignin] = useState(false);
  const [progress, setProgress] = useState(40);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div
        className="p-4 bg-cover bg-center"
        style={
          {
            // backgroundImage: `url(${images.dashboardBackground})`,
          }
        }
      >
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-semibold text-3xl border-b-4 border-lineBlue pb-1 pr-3">
            Contact Us
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full ">
              At Glowskin, we value our community and are committed to providing
              top-notch service. Whether you have questions, suggestions, or
              require assistance, our team is ready to help.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md w-full">
            <div className="text-white text-xl font-semibold ">
              Reach Out to Us
            </div>
            <p className="text-white text-opacity-50 w-full">
              Our dedicated team is always eager to hear from you. We welcome
              all queries and feedback to continually improve and serve you
              better.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold  pb-2">
              Email Us
            </div>
            <p className="text-white text-opacity-50 w-full">
              Feel free to drop us an email at {"  "}
              <a className="text-white underline" href="#">
                support@glowskin.gg.
              </a>
              {"  "} We're committed to responding to all queries promptly and
              accurately. Your communication is important to us, and our team
              works diligently to respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
