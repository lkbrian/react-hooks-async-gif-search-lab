import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [fetchedData, setFetchedData] = useState();
  const [ispending, setIsPending] = useState(true);
  const [searchTerm, setSearchTerm] = useState("cats");

  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=X0b3Dp9DJHDveC1K5XPwQ8M3B2DNrJAE&q=${searchTerm}&limit=3&offset=gif&rating=g&lang=en&bundle=messaging_non_clips`;

  const style = {
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "40px",
  };
  const handleSearch = (searchTerm) => {
    // console.log(searchTerm);
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const fetchGIF = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(`HTTP Error ! Status: ${response.status}`);
        const data = await response.json();
        setFetchedData(data);
        setIsPending(false);
      } catch (error) {
        console.error("Failed to fetch", error.message);
      }
    };
    fetchGIF();
  }, [API_URL]);

  const url =
    fetchedData && fetchedData.data.map((data) => data.images.original);

  return (
    <div className="p-2" style={style}>
      {ispending ? <h2>Loading...</h2> : <GifList data={url} />}
      <GifSearch onSearch={handleSearch} />
    </div>
  );
}

export default GifListContainer;
