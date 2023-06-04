import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React from "react";

import data from "../data.json";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const slideData = [
    {
      image:
        "https://img.freepik.com/free-photo/close-up-woman-s-hand-holding-bowl-noodles-with-eggs-onion-broccoli-bowl-black-background_23-2148123680.jpg?w=740&t=st=1685547267~exp=1685547867~hmac=aab4fd11ea8563f75012b5297377c387fc66d040f46743260ee69f8962788ca4",
      title: "Ramen",
      caption:
        "Close-up of a woman's hand holding a bowl of noodles with eggs, onion, broccoli on a black background.",
      category: "food",
    },
    {
      image:
        "https://img.freepik.com/free-photo/space-background-with-stardust-shining-stars-realistic-colorful-cosmos-with-nebula-milky-way_1258-150930.jpg?w=740&t=st=1685547588~exp=1685548188~hmac=9ed400d6ae3e2d620456adcdf459d830c4ca19f4f8514742730f6fc3aae31b3d",
      title: "Stardust",
      caption:
        "Space background with stardust and shining stars realistic colorful cosmos with nebula and milky way.",
      category: "galaxy",
    },
    {
      image:
        "https://img.freepik.com/free-photo/incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai_1258-150853.jpg?w=740&t=st=1685547852~exp=1685548452~hmac=70078ce6cd624b34077c152056d907aedb6636fbc27387f656acde5908d6c683",
      title: "Steampunk Balloon",
      caption:
        "Incredible major steampunk balloon floating above water surface illustrations.",
      category: "fantasy",
    },
  ];

  return (
    <div className="w-full border-2 border-gray-400 pb-8 rounded-md shadow-lg shadow-gray-500">
      <Slider {...settings}>
        {data.data.map((slide, index) => (
          <div key={index} className="w-full">
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
            <img
              src={slide.image}
              className="w-full h-screen object-cover mb-[-5rem] bg-gray-300"
            />
            <div className="text-center text-white font-bold">
              <p className="text-3xl capitalize">{slide.title}</p>
              <p>{slide.caption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
