import React, { useState } from 'react';
import "./CSS/capture.css";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const Capture = () => {

    const [dataUri, setDataUri] = useState('');
    function handleTakePhotoAnimationDone (dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
        console.log(dataUri);
      }
      const isFullscreen = false;
  return (
    <div className="container-fluid">
        <div className="container">
    

         <Camera  onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
            /> 
            
        
        </div>

    </div>
  )
}

export default Capture