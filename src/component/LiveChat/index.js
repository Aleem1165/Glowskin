import React, { useState } from "react";
import images from "../../utilities/images";
import "../../App.css";

export default function LiveChat() {
  const [message, setMessage] = useState([
    {
      image: images.liveChatUser,
      name: "Rifat al-Wakim",
      message: "nevermind",
      count: 20,
    },
    {
      image: images.liveChatUser2,
      name: "Brooklyn Simmons",
      message: "damn i woulda been damn i woulda been",
      count: 12,
    },
    {
      image: images.liveChatUser3,
      name: "Leslie Alexander",
      message: "juicer medusa",
      count: 12,
    },
    {
      image: images.liveChatUser4,
      name: "Guy Hawkins",
      message: "nevermind",
      count: 25,
    },
    {
      image: images.liveChatUser5,
      name: "Robert Fox",
      message: "juicer medusa",
      count: 20,
    },
    {
      image: images.liveChatUser6,
      name: "Jacob Jones",
      message: "i woulda been happy i woulda been happy",
      count: 20,
    },
    {
      image: images.liveChatUser7,
      name: "Wade Warren",
      message: "good win",
      count: 22,
    },
    {
      image: images.liveChatUser,
      name: "Rifat al-Wakim",
      message: "nevermind",
      count: 20,
    },
    {
      image: images.liveChatUser2,
      name: "Brooklyn Simmons",
      message: "damn i woulda been damn i woulda been",
      count: 12,
    },
    {
      image: images.liveChatUser3,
      name: "Leslie Alexander",
      message: "juicer medusa",
      count: 12,
    },
    {
      image: images.liveChatUser4,
      name: "Guy Hawkins",
      message: "nevermind",
      count: 25,
    },
    {
      image: images.liveChatUser5,
      name: "Robert Fox",
      message: "juicer medusa",
      count: 20,
    },
    {
      image: images.liveChatUser6,
      name: "Jacob Jones",
      message: "i woulda been happy i woulda been happy",
      count: 20,
    },
    {
      image: images.liveChatUser7,
      name: "Wade Warren",
      message: "good win",
      count: 22,
    },
  ]);
  return (
    <div className="border border-lineBlue w-[200px] h-[88vh] mr-[10px] fixed top-[12vh] right-0 hidden 2xl:block">
      <div className="flex items-end justify-between pt-4 pr-2 border-b border-lineBlue pb-2">
        <div className="text-sm font-semibold text-white ml-4">
          <div>
            <span className="text-yellow">Live</span> Chat
          </div>
          <div className="text-xs flex items-center">
            <div className="w-1 h-1 rounded-full bg-green mt-[2px]"></div>
            1050. members
          </div>
        </div>
        <div className="flex items-center">
          <img src={images.flag} className="w-4 h-3" />
          <div className="text-white text-xs font-semibold ml-[2px] mr-[2px]">
            English
          </div>
          <img src={images.chatArrowDown} className="w-3 h-2" />
        </div>
      </div>
      <div className=" h-[63vh] check overflow-y-scroll">
        {message.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between px-2 py-3"
            >
              <div className="flex items-center justify-center ">
                <img src={images.liveChatUser} className="w-10 rounded-full" />
                <div className="ml-2 w-28">
                  <div className="text-xs text-yellow font-semibold">
                    {item.name}
                  </div>
                  <div className="text-xs text-white opacity-50">
                    {item.message}
                  </div>
                </div>
              </div>
              <div className="w-5 h-5 bg-yellow flex items-center justify-center text-xs text-white rounded-md">
                {item.count}
              </div>
            </div>
          );
        })}
      </div>
      <div className="border border-lineBlue px-3 pt-3 rounded-md text-lineBlue  w-90p mx-auto flex flex-row items-start justify-between">
        <textarea
          type="text"
          placeholder="Message..."
          className="w-full pr-2 focus:outline-none text-xs textArea"
          // style={{ textAlignVertical: "top" }}
        ></textarea>
        <img
          src={images.message2}
          className="w-6 cursor-pointer active:opacity-50"
        />
      </div>
    </div>
  );
}
