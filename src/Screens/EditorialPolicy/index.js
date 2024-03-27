import React, { useState } from "react";
import images from "../../utilities/images";

export default function EditorialPolicy() {
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
            Editorial Policy
          </div>

          <p className="text-white text-opacity-50 w-full mt-3">
            At Glowskin, we strive to provide our users with the most
            accurate, up-to-date, and comprehensive information related to the
            CSGO unboxing landscape. Our editorial policy outlines the standards
            and guidelines we follow to ensure the reliability and
            trustworthiness of our content.
          </p>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold">
              1. Accuracy and Trustworthiness
            </div>
            <p className="text-white text-opacity-50 w-full">
              All content created for Glowskin undergoes meticulous
              research, verification, and review processes. We strive to deliver
              accurate, clear, and concise information that our users can trust.
              We also endeavor to correct any inaccuracies promptly upon
              discovery or notification.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold">
              2. Unbiased Reporting
            </div>
            <p className="text-white text-opacity-50 w-full">
              Our editorial team is committed to maintaining objectivity and
              impartiality in all our content. Any reviews, comparisons, or
              recommendations we provide are based solely on merit and do not
              favor any entity, product, or service over another without
              substantiated reasons.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold">
              3. Expertise and Authoritativeness
            </div>
            <p className="text-white text-opacity-50 w-full">
              Our content is created by a team of experienced writers and
              editors with deep knowledge of the CSGO unboxing landscape. We aim
              to provide authoritative and informative content that adds value
              to our users' experience on our platform.
            </p>
          </div>

          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold">
              4. Regular Updates
            </div>
            <p className="text-white text-opacity-50 w-full">
              Given the fast-paced nature of the online gaming world, we
              consistently update our content to reflect the latest
              developments, trends, and regulations in the CSGO unboxing scene.
            </p>
          </div>

          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold">
              5. User-Generated Content
            </div>
            <p className="text-white text-opacity-50 w-full">
              User-generated content, including comments or forum posts, are the
              sole responsibility of the users who post them. While we encourage
              open dialogue, any content deemed inappropriate, offensive, or in
              violation of our Code of Ethics may be removed.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md mb-5">
            <div className="text-white text-xl font-semibold">
              6. Transparency
            </div>
            <p className="text-white text-opacity-50 w-full">
              We believe in transparency and disclosure. Any affiliations,
              partnerships, or sponsored content will be clearly identified to
              provide our users with a clear understanding of our relationships
              with third parties.
            </p>
            <p className="text-white text-opacity-50 ">
              If you have any questions or suggestions regarding our editorial
              policy, feel free to contact us at {"  "}{" "}
              <a className="text-white underline" href="#">
                support@glowskin.gg.
              </a>{" "}
              {"  "} Your feedback is invaluable in helping us maintain the high
              editorial standards that you expect and deserve from Glowskin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
