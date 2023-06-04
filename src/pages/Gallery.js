import React, { useState } from "react";
import classNames from "classnames";

import Layout from "../components/Layout";
import data from "../data.json";
import "../styles/Gallery.css";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [searchResults, setSearchResults] = useState(data.data);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    let results;
    if (selectedTab === "all") {
      results = data.data.filter(
        (item) =>
          item.category.toLowerCase().includes(query) ||
          item.title.toLowerCase().includes(query) ||
          item.caption.toLowerCase().includes(query)
      );
    } else {
      results = data.data.filter(
        (item) =>
          item.category === selectedTab &&
          (item.title.toLowerCase().includes(query) ||
            item.caption.toLowerCase().includes(query))
      );
    }

    setSearchResults(results);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);

    if (tab === "all") {
      setSearchResults(data.data);
    } else {
      const results = data.data.filter((item) => item.category === tab);
      setSearchResults(results);
    }
  };

  return (
    <Layout menuGallery="on">
      <div className="flex flex-col gap-12 my-4 pb-4">
        <div className="flex flex-col items-center border-y-2 border-gray-700 mt-8 p-8">
          <p className="flex text-3xl font-bold capitalize justify-center mb-2">
            Search Article
          </p>
          <input
            type="text"
            placeholder="Search by category, title, or caption"
            value={searchQuery}
            onChange={handleSearch}
            className="h-10 w-1/3 border-2 border-gray-700 rounded-md px-4"
          />
          <p className="flex text-3xl font-bold capitalize justify-center mt-8 mb-2">
            Article Categories
          </p>
          <div className="w-2/3 px-20 rounded-md tab-container flex justify-evenly gap-8 border-2 border-gray-500">
            <button
              className={classNames({ active: selectedTab === "all" })}
              onClick={() => handleTabClick("all")}
            >
              All
            </button>
            <button
              className={classNames({ active: selectedTab === "food" })}
              onClick={() => handleTabClick("food")}
            >
              Food
            </button>
            <button
              className={classNames({ active: selectedTab === "galaxy" })}
              onClick={() => handleTabClick("galaxy")}
            >
              Galaxy
            </button>
            <button
              className={classNames({ active: selectedTab === "fantasy" })}
              onClick={() => handleTabClick("fantasy")}
            >
              Fantasy
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center"></div>

        <div className="grid grid-cols-5 gap-6 px-4">
          {searchResults.map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-400 p-2 rounded-md shadow-md shadow-gray-500"
            >
              <img src={item.image} alt={item.title} className="rounded-md" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
