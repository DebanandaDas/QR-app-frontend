import React, { useState,useCallback,useMemo } from "react";
import "./CSS/capture.css";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImageCapture from "../imageCaptureCode/index.js";

const Capture = () => {
  
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
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
      <div className="container">
      <h3>Capture your face to authenticate</h3>
      <ImageCapture
        onCapture={onCapture}
        onError={onError}
        width={400}
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
