import { useState } from "react";
import images from "../../utilities/images";
import { usePayment } from "../../Screens/Layout";

const HomeLastCard = () => {
  const { paymentModal, setPaymentModal } = usePayment();

  const [data] = useState([
    {
      title: "Cases Creation",
      description:
        "Cse Creation allows players to create their own cases with items and odds of their choice.",
      image: images.DashboardLastCard1,
    },
    {
      title: "10k Daily Race",
      description:
        "Win up to 5000 Gems daily on our 10k Daily Race.Earn your spot on the Leaderboard just by playing.",
      image: images.DashboardLastCard2,
    },
    {
      title: "Cash Top-Ups",
      description:
        "Glowskins offers a wide variety of methods for user to deposit & withdraw with.",
      image: images.DashboardLastCard3,
    },
  ]);

  const handleNavigate = (index) => {
   if(index === 2){
    setPaymentModal(true)
   }
  }

  return (
    <div className="mx-auto  w-full mt-16">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {data.map((card, index) => (
            <div
              onClick={() => handleNavigate(index)}
              key={card.id}
              className="hover:scale-105 transition-transform duration-300 transform bg-cover bg-darkBlue2 border-r border-l border-t border-lineBlue bg-contain bg-no-repeat flex flex-col items-center justify-between pt-3 pb-5 cursor-pointer "
            >
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={card.image}
                  className="rounded-md object-contain w-[50%] h-[120px]"
                />
                <div className="text-yellow text-xl font-semibold w-full text-center">
                  {card.title}
                </div>
              </div>

              <div className="w-full px-1 md:px-8 mt-2 text-center text-sm text-white">
                {card.description
                  .split(
                    /(create their own cases|5000 Gems|Leaderboard|Glowskins.gg|wide variety of methods)/
                  )
                  .map((part, i) => {
                    if (
                      [
                        "create their own cases",
                        "5000 Gems",
                        "Leaderboard",
                        "Glowskins.gg",
                        "wide variety of methods",
                      ].includes(part.trim())
                    ) {
                      return (
                        <span
                          key={i}
                          className="text-headerBorder font-semibold"
                        >
                          {part}
                        </span>
                      );
                    }
                    return <span key={i}>{part}</span>;
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLastCard;
