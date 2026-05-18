"use client";

import { useEffect } from "react";

const ascii = String.raw`
WWWW     WWWW    WWW
 WWWW   WWWW   WWWW 
  WWWW WWWW   WWWW    
   WWWWWWW   WWWW    
    WWWWW   WWWW   
`;

const HomePageLogoConsole = () => {
  useEffect(() => {
    console.info(ascii);
  }, []);

  return null;
};

export { HomePageLogoConsole };
