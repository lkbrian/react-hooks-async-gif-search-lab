import React from "react";

function GifList({ data }) {
    const style={
        display:"flex",
        flexDirection:"column",
        gap:"20px"
    }

  return (
    <div style={style}>
      {data.map((dataset,index) => <img src={dataset.url} alt="images" key={index}/>)}
    </div>
  );
}

export default GifList;
