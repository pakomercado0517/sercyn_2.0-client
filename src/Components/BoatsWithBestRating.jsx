import React from "react";
import { useSelector } from "react-redux";

function BoatsWithBestRating() {
  const bestRating = useSelector((state) => state.bestRating);

  return (
    <div className="grid max-w-3xl mb-8 border border-blue-200 rounded-lg shadow-sm md:mb-12 md:mx-4 md:grid-cols-2">
      {bestRating.map((el) => {
        return (
          <div key={el.id}>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-blue-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
              <blockquote className="max-w-2xl mx-auto mb-4 text-[#1da2d8] lg:mb-8 ">
                <h3 className="text-lg font-semibold text-[#064273] ">
                  Embarcación {el.Boat?.name}
                </h3>
                <p className="my-4 font-light">"{el.comment}"</p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                <img
                  className="rounded-full w-9 h-9"
                  src={el.Client?.photo}
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium text-[#064273] text-left">
                  <div>{`${el.Client?.first_name} ${el.Client?.last_name}`}</div>
                  {/* <div className="text-sm font-light text-[#1da2d8]">
                    Developer at Open AI
                  </div> */}
                </div>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
}

export default BoatsWithBestRating;
