import { useState } from "react";
import { createClient } from "pexels";
import WavyBg from "./WavyBg";
import FactCard from "./FactCard";

const BackgroundContainer = () => {
  const [isBgImgFetched, setIsBgImgFetched] = useState(false);
  const [currentBgImage, setCurrBgImg] = useState(null);
  const [holdBgUrl, setHoldBgUrl] = useState(null);

  const client = createClient(
    "ZtKlkEPY4TJLdBGHjsyzEj5D8yvYzjW7fkUPFURNY8Wh1cejKeGZwikC"
  );

  const query = "Nature";
  const screenWidth = window.screen.availWidth;
  //   console.log(screenWidth);
  let orientation = "landscape";

  if (screenWidth < 450) {
    orientation = "portrait";
  } else {
    orientation = "landscape";
  }

  if (isBgImgFetched == false) {
    client.photos
      .search({ query, per_page: 80, orientation })
      .then(({ photos }) => {
        const random = Math.round(Math.random() * 80 - 1);
        setHoldBgUrl(photos[random].src[orientation]);

        setIsBgImgFetched(true);
      });
  }

  return (
    <section
      style={currentBgImage && { backgroundImage: currentBgImage }}
      className={
        "flex justify-center items-center bg-cover bg-no-repeat w-[100vw] h-[100vh]"
      }
    >
      {isBgImgFetched == false ? (
        <WavyBg />
      ) : (
        <FactCard
          isBgImgFetched={isBgImgFetched}
          setIsBgImgFetched={setIsBgImgFetched}
          holdBgUrl={holdBgUrl}
          setCurrBgImg={setCurrBgImg}
        />
      )}
    </section>
  );
};
export default BackgroundContainer;
