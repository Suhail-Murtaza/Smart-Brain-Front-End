import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
  return (
    <div className="ma0 pa0">
      <div className="center ma2 pa0">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center black" type="text" onChange={onInputChange}/>
          <button className="w-30 grow f4 link ph3 pv2 dib white detBut" onClick={onPictureSubmit}>
            Detect
          </button>
        </div>
      </div>
      <p className="f3 white hover-white ma0 pa0">
        {"The Smart Brain App will detect face(s) in the image."}
      </p>
      <p className="f3 white hover-white ma0 pa3">
        {"Paste the url of any image above and see the magic happen."}
      </p>
    </div>
  );
};

export default ImageLinkForm;
