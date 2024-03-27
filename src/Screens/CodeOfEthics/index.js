import React, { useState } from "react";
import images from "../../utilities/images";

export default function CodeOfEthics() {
  const [signin, setSignin] = useState(false);
  const [progress, setProgress] = useState(40);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-auto">
      <div
        className="p-4 bg-cover bg-center"
        style={
          {
            // backgroundImage: `url(${images.dashboardBackground})`,
          }
        }
      >
        <div className="flex flex-col items-start justify-center">
          <div className="text-white font-semibold text-3xl border-b-4 border-lineBlue pb-1 pr-3 mt-1">
            Code of Ethics: Upholding Integrity in CSGO Unboxing
          </div>

          <p className="text-white text-opacity-50 w-full mt-3">
            We're committed to fair, respectful, and responsible CSGO unboxing.
            Discover how we maintain a high ethical standard at Glowskin.
          </p>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold ">
              Respect for All
            </div>
            <p className="text-white text-opacity-50 w-full">
              We value the diversity of our community and strive to maintain a
              respectful CSGO environment. All users are expected to treat each
              other with dignity, regardless of their backgrounds, beliefs, or
              skill levels.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <div className="text-white text-xl font-semibold ">
            Fair Play
          </div>
          <p className="text-white text-opacity-50 w-full">
            Fair play is the cornerstone of our platform. Any form of cheating,
            exploitation, or manipulation of game outcomes is strictly
            prohibited. Users who violate this principle may face account
            suspension or termination.
          </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <div className="text-white text-xl font-semibold ">
            Responsible Gaming
          </div>
          <p className="text-white text-opacity-50 w-full">
            Glowskin is committed to promoting responsible gaming. We encourage
            users to engage in our platform within their financial means and to
            seek professional help if they suspect they may have a unboxing
            problem.
          </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <div className="text-white text-xl font-semibold ">
            Privacy Respect
          </div>
          <p className="text-white text-opacity-50 w-full">
            Respecting others' privacy is crucial. Users should refrain from
            sharing or soliciting personal information from other users. Any
            violations should be immediately reported to our team.
          </p>
          </div>

          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <div className="text-white text-xl font-semibold ">
            Non-Harassment
          </div>
          <p className="text-white text-opacity-50 w-full">
            We have zero tolerance for any form of harassment, including but not
            limited to bullying, discrimination, or hate speech. Any user found
            to be engaging in such behavior may be subject to disciplinary
            actions.
          </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">

          <div className="text-white text-xl font-semibold ">
            Compliance with Laws
          </div>
          <p className="text-white text-opacity-50 w-full">
            Users are responsible for complying with all applicable laws related
            to online CSGO and gambling in their respective jurisdictions.
            Glowskin cannot be held responsible for any user's non-compliance
            with local regulations.
          </p>
          </div>

          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md mb-5">

          <div className="text-white text-xl font-semibold ">
            Reporting Misconduct
          </div>
          <p className="text-white text-opacity-50 w-70p pb-2 mb-3">
            If you encounter any conduct that violates our Code of Ethics,
            please report it immediately to {"  "}
            <a className="text-white underline" href="#">
              support@glowskin.
            </a>
            {"  "} We are committed to investigating all reported incidents and
            taking appropriate action.
          </p>
          </div>

        </div>
      </div>
    </div>
  );
}
