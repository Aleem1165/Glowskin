import { useState } from "react";
import images from "../../utilities/images";

const HomeLastCard = () => {
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
  return (
    <div className="mx-auto  w-full mt-16">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {data.map((card, index) => (
            <div
              key={card.id}
              className="bg-cover bg-contain bg-no-repeat flex flex-col items-center justify-between pt-3 pb-5 cursor-pointer "
              style={{
                backgroundImage: `url(${images.dashboardLastCardBG})`,
              }}
            >
              <img
                src={card.image}
                className="rounded-md  w-50p transition-transform duration-300 transform hover:scale-105 "
              />
              <div className=" flex flex-col items-center">
                <div className="text-yellow text-xl font-semibold">
                  {card.title}
                </div>
                <div className="w-80p text-center text-sm text-white">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLastCard;
