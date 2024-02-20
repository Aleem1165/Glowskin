import React, { useState } from "react";
import images from "../../utilities/images";

export default function AMLPolicy() {
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
            AML Policy
          </div>

          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold ">
              Introduction
            </div>
            <p className="text-white text-opacity-50 ">
              Glowskin Entertainment Ltd (“Glowskin”, “we”, “us”, or “our”) is
              committed to maintaining a safe, secure, and compliant platform
              for our users to engage in gaming and other entertainment
              activities. As part of our commitment, we have implemented an
              Anti-Money Laundering (“AML”) Policy to prevent our platform from
              being used for illicit activities, including money laundering and
              terrorist financing. Our websites, www.glowskin.gg are owned by
              Glowskin Entertainment Ltd.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold  ">
              Know Your Customer (KYC) Procedures
            </div>
            <p className="text-white text-opacity-50 ">
              Glowskin Entertainment is committed to conducting thorough and
              effective KYC procedures to verify the identities of our users and
              prevent money laundering and terrorist financing on our platform.
              Our KYC procedures are designed to be compliant with regulatory
              requirements and are regularly reviewed and updated to ensure they
              are effective.
            </p>
            <p className="text-white text-opacity-50 ">
              To ensure compliance with AML regulations, Glowskin Entertainment
              partners with Sumsub, a leading KYC and AML provider. Sumsub
              conducts advanced KYC checks on all withdrawals from FIAT deposits
              to cryptocurrency. When a user requests a withdrawal of crypto to
              FIAT currency, we require them to submit the following
              information:
            </p>
            <p className="text-white text-opacity-50  ml-2 ">• Full name</p>
            <p className="text-white text-opacity-50  ml-2 ">• Date of birth</p>
            <p className="text-white text-opacity-50  ml-2 ">
              • Residental address
            </p>
            <p className="text-white text-opacity-50  ml-2 ">
              • Government-issued identification document (passport, national ID
              card, or driver's license)
            </p>
            <p className="text-white text-opacity-50  ml-2 ">
              • Proof of address (utility bill, bank statement, or any other
              document showing the user’s name and residential address)
            </p>
            <p className="text-white text-opacity-50 ">
              We verify this information through our partner, Sumsub, who
              performs advanced KYC checks, including facial recognition and
              biometric data analysis, to ensure the authenticity of the
              submitted documents.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold  ">
              AML Controls
            </div>
            <p className="text-white text-opacity-50 ">
              Glowskin Entertainment has implemented several AML controls to
              prevent money laundering and terrorist financing on our platform.
              These controls are designed to be compliant with regulatory
              requirements and are regularly reviewed and updated to ensure they
              are effective.
            </p>
            <p className="text-white text-opacity-50 ">
              Transaction Monitoring: We monitor all transactions on our
              platform for suspicious activity, including large transactions,
              unusual patterns, and transactions from high-risk countries. Our
              advanced transaction monitoring systems use machine learning
              algorithms and rule-based engines to detect suspicious activity,
              such as transactions involving high-risk countries, high-value
              transactions, and transactions with no apparent economic or lawful
              purpose.
            </p>
            <p className="text-white text-opacity-50 ">
              Risk Assessment: We perform regular risk assessments to identify
              and mitigate potential AML risks on our platform. We also
              categorize our users based on their AML risk profile and apply
              appropriate AML controls accordingly. Our risk assessment process
              takes into account factors such as the user’s location,
              transaction history, and the type of gaming and entertainment
              activities they engage in.
            </p>
            <p className="text-white text-opacity-50 ">
              Employee Training: We provide regular AML training to our
              employees to ensure they are aware of AML risks and understand
              their role in preventing money laundering and terrorist financing
              on our platform. Our training covers topics such as AML
              regulations, risk assessment, and suspicious activity detection.
            </p>
            <p className="text-white text-opacity-50 ">
              Customer Due Diligence (CDD): We perform customer due diligence on
              all users to verify their identities and assess their AML risk. We
              also conduct enhanced due diligence on high-risk users, including
              politically exposed persons (PEPs) and users from high-risk
              countries. Our CDD procedures are designed to be compliant with
              regulatory requirements and are regularly reviewed and updated to
              ensure they are effective.
            </p>
            <p className="text-white text-opacity-50 ">
              Enhanced Transaction Monitoring: In addition to our regular
              transaction monitoring, we use advanced transaction monitoring
              systems to detect suspicious activity, such as transactions
              involving high-risk countries, high-value transactions, and
              transactions with no apparent economic or lawful purpose. Our
              enhanced transaction monitoring systems use machine learning
              algorithms and rule-based engines to detect suspicious activity
              and generate alerts for further investigation.
            </p>
            <p className="text-white text-opacity-50  ">
              Record Keeping: We maintain records of all transactions on our
              platform, including user identification, transaction history, and
              risk assessments. These records are kept for a minimum of five
              years and are designed to be compliant with regulatory
              requirements
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md">
            <div className="text-white text-xl font-semibold  ">
              External Support
            </div>
            <p className="text-white text-opacity-50 ">
              In addition to our internal AML controls and procedures, Glowskin
              Entertainment engages with external partners to ensure compliance
              with AML regulations. These partners include:
            </p>
            <p className="text-white text-opacity-50  ">
              Sumsub: Our partner for performing KYC checks on all
              cryptocurrency withdrawals from FIAT deposits. Law Enforcement and
              Regulatory Authorities: We cooperate with law enforcement and
              regulatory authorities in the investigation of any suspected money
              laundering or terrorist financing activities on our platform. AML
              Consultants: We engage with AML consultants to review and assess
              our AML controls and procedures and to provide recommendations for
              improvement.
            </p>
          </div>
          <div className="bg-btnDark opacity-90 mt-5 px-4 py-2 rounded-md mb-5">
            <div className="text-white text-xl font-semibold ">Conclusion</div>
            <p className="text-white text-opacity-50 w- ">
              Glowskin Entertainment takes its AML responsibilities seriously
              and is committed to maintaining a safe and secure platform for our
              users. We recognize the importance of preventing money laundering
              and terrorist financing on our platform and have implemented a
              robust AML policy to achieve this goal. Our AML controls and
              procedures are regularly reviewed and updated to ensure they are
              effective and in line with regulatory requirements. If you have
              any questions or concerns about our AML policy, please contact us
              at admin@glowskin.gg.
            </p>
            <p className="text-white text-opacity-50 w-  mb-3">
              Legal Team of Glowskin Entertainment Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
