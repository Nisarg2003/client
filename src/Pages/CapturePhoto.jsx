import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CapturePhoto = () => {
  const imageLogoImage = "https://s3-alpha-sig.figma.com/img/95ba/3481/3ad994db5b5e421121cc1ef38e21523e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DT7LoXockAWf5-7MafqzBO6U5Z79HxJPBOneR3SfSW6lEeg-CyRmVS16BYjuM24HIVXuseqYpz3LJMFGvBEac~Mp6nzCv16HfwUoT32zTd-xpKnusPRxhYDEdgQlXpBgAHvzHVR8YiIXrcrYAEwUCFsHOou2w3sGIuqb8lLJ1W5gBF3fC~Fa03h7lO9d6EQBVhSxkSToQHuNJ3FVfP-UyFUvz-6E4zVt4Lb5KwdnbqKhHxOStQokD3VxBqaERnhKcz5Y0peKKCEE3-K1-04PFaSqqgBTzuyHUfhIFcIw7P1rXwJTsMvLbJpRmo4yUZThsOAkATvopi3EMLsy~ZTicA__";
  const [signUp, setSignUp] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = React.useRef(null);
  const navigate = useNavigate()

  const handleCapturePhoto = () => {
      if (!showCamera) {
        // If the camera is not visible, show the camera on the first click
        setShowCamera(true);
      } else {
        // If the camera is visible, capture the photo on the second click
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
        setShowCamera(false);
      }
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setShowCamera(true);
  };

  const handleLogin = () => {
    setSignUp(!signUp);
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  const handleSubmit = () => {
    // console.log('Submitted:', capturedImage);
    navigate('/')
  };

  const imageLogo = {
    backgroundImage: `url(${imageLogoImage})`,
    width: '98px',
    height: '98px',
    top: '73px',
    position: 'relative',
    left: '10px',
    backgroundSize: 'cover',
  };

  return (
    <>
      <div className="flex">
        <div className="mr-4">
          <img style={imageLogo} src={imageLogoImage} alt="Logo" />
        </div>
        <div className="flex ml-[120px] mt-[100px]">
          <button
            className="font-poppins font-semibold text-2xl leading-10 text-gray-400 mx-4 cursor-pointer focus:text-indigo-600 focus:outline-none"
            onClick={handleSignUp}
          >
            SignUp <span className="mx-2"> /</span>
          </button>
          <button
            autoFocus
            className="font-poppins font-semibold text-2xl leading-10 text-gray-400 mx-0 cursor-pointer focus:text-indigo-600 focus:outline-none"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
  
      <div
        className="mt-[100px] ml-[130px]"
        style={{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '30px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#505050',
        }}
      >
        Please Capture our face to continue
      </div>
  
      {/* Card Container */}
      <div
        className="w-[514px] h-[450px] bg-gradient-to-b from-gray-600 to-gray-800 border-1 border-solid border-gray-700 rounded-md absolute ml-[130px] mt-10"
        style={{
          backgroundImage: 'linear-gradient(0deg, #919191, #919191), linear-gradient(0deg, #C0C0C0, #C0C0C0)',
        }}
      >
        {showCamera ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="absolute top-0 left-0 w-full h-full rounded-md"
            />
            <div
              className="absolute top-0 left-0 w-full h-full cursor-pointer"
              onClick={handleCapturePhoto}
              style={{ background: 'rgba(0,0,0,0)', zIndex: 2 }}
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <FontAwesomeIcon icon={faCamera} size="3x" className="text-white" />
          </div>
        )}
      </div>
  
      {/* Capture Button Outside the Card */}
      {!capturedImage && (
  <>
<button
  className=" text-white py-2 px-4 rounded-md mt-[550px] ml-[300px]"
  style={{
    width: '160px',
    height: '50px',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '27px',
    letterSpacing: '0em',
    borderRadius: '15px',
    background: '#261E3B'
  }}
  onClick={handleCapturePhoto}
>
  Capture
</button>

  </>
)}
  {/* Display Captured Image and Buttons */}
{capturedImage && (
  <>
  <img
      src={capturedImage}
      alt="Captured"
      className="absolute mt-10 ml-[130px] w-[514px] h-[450px] rounded-md object-cover"
    />
          
  
    <div className="absolute mt-[550px] ml-[400px] transform -translate-x-1/2 flex">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2" onClick={handleRetake}
       style={{
        width: '160px',
        height: '50px',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '27px',
        letterSpacing: '0em',
        borderRadius: '15px',
        background: '#A0A0A0'
    }}>
        Retake
      </button>
      <button className="bg-green-550 text-white py-2 px-4 rounded-md" onClick={handleSubmit}
       style={{
        width: '160px',
        height: '50px',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '27px',
        letterSpacing: '0em',
        borderRadius: '15px',
        background: '#261E3B'
      }}>
        Submit
      </button>
    </div>
  </>
)}
    </>
  );
      }  

export default CapturePhoto;
