import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={imageUrl} width="500px" height="auto" alt='' />
        {box.map(((box,index) => (
                  <div
                  className="boundingBox"
                  style={{
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow,
                    left: box.leftCol
                  }}
                  key={index}
                ></div>
        
        )))}
      </div>
    </div>
  );
};

export default FaceRecognition;
