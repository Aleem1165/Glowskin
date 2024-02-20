import React, { useState } from "react";
import images from "../../utilities/images";

export default function Disclaimer() {
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
            Disclaimer
          </div>

          <p className="text-white text-opacity-50 w-full mt-3">
            Welcome to Glowskins.gg. Your use of our platform is subject to the
            understanding and acceptance of the following disclaimers. We
            encourage you to read them carefully to ensure that your experience
            aligns with our efforts to maintain a secure, fair, and responsible
            gaming environment.
          </p>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold ">
              Age Restriction
            </div>
            <p className="text-white text-opacity-50 w-full">
              Glowskins.gg strictly adheres to age restriction laws in relation
              to online gambling. It is mandatory for all users to be at least
              18 years of age, or the legal age for gambling in their respective
              jurisdictions, whichever is greater. By using our platform, you
              confirm that you meet this age requirement.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold ">
              Responsible Gaming
            </div>
            <p className="text-white text-opacity-50 w-full">
              We are committed to promoting responsible gaming. While we aim to
              provide an exciting gaming experience, we encourage users to
              gamble responsibly and within their financial capabilities. If you
              feel you may have a gambling problem, we strongly recommend
              seeking professional help.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold ">
              Liability Limitations
            </div>
            <p className="text-white text-opacity-50 w-full">
              While we strive to provide a seamless and secure platform,
              Glowskins.gg cannot guarantee complete immunity from potential
              technical glitches, inaccuracies, or typographical errors. We will
              endeavor to rectify any issues upon notification, but we cannot be
              held liable for any losses or damages that may arise from such
              errors.
            </p>
          </div>
        </div>
        <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
          <div className="text-white text-xl font-semibold ">
            Content and Copyrights
          </div>
          <p className="text-white text-opacity-50 w-full">
            Unless otherwise stated, Glowskins.gg holds the copyrights for all
            content on our platform. Any unauthorized reproduction or
            distribution of our content may result in legal action.
          </p>
        </div>
        <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
          <div className="text-white text-xl font-semibold ">
            Third-Party Links
          </div>
          <p className="text-white text-opacity-50 w-full">
            Our platform may contain links to third-party websites. These links
            are provided for your convenience and do not imply our endorsement
            of the third-party sites. Glowskins.gg does not bear any
            responsibility for the content, policies, or practices of these
            sites.
          </p>
        </div>
        <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md mb-5">
          <div className="text-white text-xl font-semibold ">
            Changes to the Disclaimer
          </div>
          <p className="text-white text-opacity-50 w-full">
            Glowskins.gg reserves the right to modify this disclaimer at any
            time. We encourage users to regularly review this page for updates.
            Continued use of our platform after changes constitutes agreement to
            the revised terms.
          </p>
          <p className="text-white text-opacity-50 w-full">
            If you have any queries regarding our disclaimer, please feel free
            to contact us at {"  "}
            <a className="text-white underline" href="#">
              support@glowskins.gg.
            </a>
            {"  "} Your understanding and compliance with our disclaimers are
            essential to maintaining a responsible and enjoyable gaming
            environment.
          </p>
        </div>
      </div>
    </div>
  );
}
