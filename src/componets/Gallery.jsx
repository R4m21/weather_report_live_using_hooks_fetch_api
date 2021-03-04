import React from 'react';
import Card from "./Card";
import sData from "./SData";

const Gallery = () => {
    const ncard = (val) => (
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
      );
    return (
        <>
        {sData.map(ncard)}
        </>
    )
}
export default Gallery;
