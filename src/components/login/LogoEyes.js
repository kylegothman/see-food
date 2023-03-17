import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "./login.css";
import sf_logo from "../../assets/sf_logo.png";
import logo_eyes from "../../assets/logo_eyes.png";

export default function LogoEyes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const anchorRef = React.useRef(null);

  const anchorX = anchorRef.current?.getBoundingClientRect().left + anchorRef.current?.getBoundingClientRect().width / 2;
  const anchorY = anchorRef.current?.getBoundingClientRect().top + anchorRef.current?.getBoundingClientRect().height / 2;
 
  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
  }

  const angleDeg = angle(mousePosition.x, mousePosition.y, anchorX, anchorY);

  return (
    <Box className="main" >
      <img id="anchor" ref={anchorRef} src={sf_logo} alt="logo" />
      <Box id="eyes">
        <img height='35px' width='35px' className="eye" src={logo_eyes} alt="pupil" style={{ top: 38, right: 73, transform: `rotate(${270 + angleDeg}deg)`}} />
        <img height='35px' width='35px' className="eye" src={logo_eyes} alt="pupil" style={{ top: 38, right: 41, transform: `rotate(${270 + angleDeg}deg)` }} />
      </Box>
    </Box>
  );
}