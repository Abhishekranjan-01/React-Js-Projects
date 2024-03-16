import axios from "axios";
import { useState } from "react";
import WavyBg from "./WavyBg";
import FactCard from "./FactCard";

const BackgroundContainer = () => {
  const [isBgImgFetched, setIsBgImgFetched] = useState(false);
  const [currentBgImage, setCurrBgImg] = useState(null);
  const [holdBgUrl, setHoldBgUrl] = useState(null);

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
    axios
      .get(
        `https://api.pexels.com/v1/search/?page=1&per_page=80&orientation=${orientation}&query=${query}`,
        {
          headers: {
            Authorization: import.meta.VITE_PEXEL_BG_FETCH,
          },
        }
      )
      .then((res) => {
        const random = Math.round(Math.random() * 80 - 1);

        setHoldBgUrl(res.data.photos[random].src[orientation]);
        setIsBgImgFetched(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
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
