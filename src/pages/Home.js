import React from "react";

import Layout from "../components/Layout";
import Slider from "../components/Slider";
import data from "../data.json";

const Home = () => {
  const dataArray = data.data;
  const categories = Array.from(
    new Set(dataArray.map((item) => item.category))
  );

  return (
    <Layout menuHome="on">
      <div className="my-4">
        <span className="flex text-3xl font-bold capitalize justify-center mt-8 mb-2">
          Entire Articles
        </span>
        <div className="overflow-x-hidden">
          <Slider />
        </div>
        <div className="flex flex-col gap-8 py-20 px-4">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="text-3xl font-bold capitalize mb-2">
                {category} Articles
              </h2>
              <div className="grid grid-cols-5 gap-6">
                {dataArray
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.title}
                      className="border-2 border-gray-400 p-2 rounded-md shadow-md shadow-gray-500"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-md"
                      />
                      <h2 className="font-semibold">{item.title}</h2>
                      <p className="text-sm">{item.caption}</p>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
