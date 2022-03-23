import React, { useState,useCallback,useMemo } from "react";
import "./CSS/capture.css";
import ImageCapture from "../imageCaptureCode/index.js";
import useWindowDimensions from "./utilities/UseWindowDimension";

const Capture = () => {
  const { height, width } = useWindowDimensions();
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [wd, setwd] = useState(width);

  const onCapture = (imageData) => {
    // read as webP
    setImgSrc(imageData.webP);
    // read as file
    setImgFile(imageData.file);
    
    // read as blob
    // imageData.blob
  };

  // Use useCallback to avoid unexpected behaviour while rerendering
  const onError = useCallback((error) => {
    console.log(error);
  }, []);

  // Use useMemo to avoid unexpected behaviour while rerendering
  const config = useMemo(() => ({ video: true }), []);
  return (
    <>
    <div className="contaier-fluid">
      <div className="container auth-vid-container">
        
      <h3>Capture your face to authenticate</h3>
      <ImageCapture
        onCapture={onCapture}
        onError={onError}
        width={(width>540)?400:300}
        userMediaConfig={config}
        
        />
      {imgSrc && (
        <div>
          <div>Captured Image:</div>
          <img src={imgSrc} alt="captured-img" />
        </div>
      )}
      </div>
      </div>
    </>
  );
};

export default Capture;
