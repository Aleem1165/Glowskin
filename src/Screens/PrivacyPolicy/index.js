import React, { useState } from "react";
import images from "../../utilities/images";

export default function PrivacyPolicy() {
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
          <div className="text-white font-semibold text-xl border-b-4 border-lineBlue pb-1 pr-3">
            Privacy Policy
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY SUBSCRIBING,
              ACCESSING, OR USING OUR WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE
              READ, UNDERSTAND, AGREE AND ACCEPT ALL THE TERMS OF THIS PRIVACY
              POLICY. IF YOU DO NOT AGREE TO THESE TERMS, PLEASE CEASE USE OF
              THIS WEBSITE.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              Glowskin Entertainment Ltd LLC. ("Glowskin Entertainment Ltd")
              respects your privacy and takes your rights seriously. We provide
              you with this Privacy Policy ("Policy") to inform you of our
              policies and procedures regarding the collection, use and
              disclosure of personal information We receive from users and
              subscribers ("User") to our Site and Services (“Site” or
              “Website”).
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              Glowskin Entertainment Ltd reserves the right to make any changes
              to this Policy at any time, notice of which may be posted on this
              privacy page. Users must refer back to the Policy to read any
              changes in Glowskin Entertainment Ltd’s Privacy Policy.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              1. Information Collection. While using this site, Users may
              provide Glowskin Entertainment Ltd with personally identifiable
              information. This refers to information about Users that can be
              used to contact or identify a User, and information on a User's
              use of and activities on the Site ("Personal Information").
              Personal Information that Glowskin Entertainment Ltd collects may
              include, but is not limited to, a User's name, billing
              information, and email address. A User's credit card information
              is not stored on our servers. When a User visits the Site, our
              servers automatically record information that the browser sends
              whenever a User visits a website. This information may include,
              but is not limited to, a User's computer’s Internet Protocol
              address (IP address), browser type, and the web page the User was
              visiting before arriving on the Site. Glowskin Entertainment Ltd
              uses “cookies” to collect information. A cookie is a small data
              file that is transferred to a User's computer’s hard disk to
              facilitate your computer’s future access to this information.
              “Persistent cookies” are utilized to save a User's user ID and
              login password to facilitate future logins. Glowskin Entertainment
              Ltd uses cookies to better understand how our Users interact with
              the Site, to monitor usage and how traffic arrives at the Site,
              and to improve the functionality of the Site.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              2. How We Use Personal Information. Personal Information is used
              to:
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • provide and improve the Site, services, features and content;
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • to administer a User's membership and use of the Site;
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • to enable Users to enjoy and easily navigate the Site;
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • to better understand User needs and interests;
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • to fulfill requests a User may make;
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • to personalize the User experience;
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • to provide or offer software updates and product announcements;
              and
            </p>
            <p className="text-white text-opacity-50 w-full ml-5">
              • to provide Users with further information and offers from
              Glowskin Entertainment Ltd that Glowskin LLC believes Users may
              find useful or interesting, including newsletters, marketing or
              promotional materials and other information on services and
              products offered by Glowskin Entertainment Ltd or third parties
              that are authorized by Glowskin Entertainment Ltd.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              3. Personal Information is gathered to monitor and analyze use of
              Glowskin Entertainment Ltd and its services, for technical
              administration, to increase the Site’s functionality and
              user-friendliness, to better tailor it to User needs, to generate
              and derive useful data and information concerning the interests,
              characteristics and website use behavior of Users, and to verify
              that the proper information is submitted to fulfill and process
              User requests. If a User decides at any time that they no longer
              wish to receive Glowskin Entertainment Ltd emails or
              communications, they should click on the unsubscribe link provided
              in Glowskin LLC’s marketing emails or email contact@glowskin.com
              with subject line "unsubscribe."
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              4. Merchants, Service Providers, Business Partners and Others.
              Glowskin Entertainment Ltd may work with third-party providers to
              enable Users to purchase or rent items. We may employ third party
              companies and individuals to facilitate the Glowskin Entertainment
              Ltd Site and service, to provide service on Glowskin Entertainment
              Ltd’s behalf, to perform website-related services (including but
              not limited to maintenance services, database management, web
              analytics and improvement of Glowskin Entertainment Ltd’s
              features), or to assist Glowskin Entertainment Ltd’s in analyzing
              how the Site and service are used and can be improved. These third
              parties have access to your Personal Information only for purposes
              of performing these tasks on our behalf.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              5. Compliance with Laws and Law Enforcement. Glowskin
              Entertainment Ltd must cooperate with government and law
              enforcement officials and private parties to enforce and comply
              with the law. In the event of a claim and/or legal process
              (including but not limited to subpoenas), to protect the property
              and rights of Glowskin Entertainment Ltd or a third party, to
              protect the safety of the public or any person, or to prevent or
              stop any activity Glowskin Entertainment Ltd may consider to pose
              a risk of being illegal, unethical, inappropriate or legally
              actionable, Glowskin Entertainment Ltd reserves the right to
              disclose any Personal Information about you to government or law
              enforcement officials or private parties as Glowskin Entertainment
              Ltd in its sole discretion finds necessary or appropriate. 6.
              Business Transfers. In the event of a merger, acquisition,
              reorganization or sale of assets, Glowskin Entertainment Ltd may
              sell, transfer or otherwise share some or all of its assets, and
              our Users' Personal Information may be transferred as part of that
              transaction.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              6. Business Transfers. In the event of a merger, acquisition,
              reorganization or sale of assets, Glowskin Entertainment Ltd may
              sell, transfer or otherwise share some or all of its assets, and
              our Users' Personal Information may be transferred as part of that
              transaction.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              7. Changing or Deleting Your Information. A request to delete a
              User's account is different from a request to unsubscribe from
              emails and communications. Users may opt to unsubscribe from our
              email alerts, which will terminate the issuance of automatically
              generated emails that inform Users about new features of the Site
              or to market Glowskin LLC's services. To delete a User account
              entirely from Glowskin Entertainment Ltd, the User must email
              team@Glowskin Entertainment Ltd.co with the subject line "delete
              account."
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md ">
            <p className="text-white text-opacity-50 w-full mt-2 ">
              8. Security. Glowskin Entertainment Ltd takes the security of
              Personal Information seriously. Glowskin LLC appreciates our
              Users' use of the Site and will employ reasonable measures
              designed to protect Personal Information from unauthorized access
              and unsolicited contact from third-party groups. To that end, all
              sensitive Personal Information is transmitted through secure
              networks. Credit card numbers are not stored or held on our
              servers.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 w-full rounded-md mb-5">
            <p className="text-white text-opacity-50 w-full ">
              Contacting Us. If you have any questions about this Privacy
              Policy, please contact Glowskin LLC at officialglowskin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
