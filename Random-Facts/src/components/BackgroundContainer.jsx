import { useState } from "react";
import { createClient } from "pexels";
import FactCard from "./FactCard";

const BackgroundContainer = () => {
  const [isBgImgFetched, setIsBgImgFetched] = useState(false);
  const [currentBgImage, setCurrBgImg] = useState(null);
  const [holdBgUrl, setHoldBgUrl] = useState(null);

  const DefaultBgImg = `url(https://ik.imagekit.io/demo/default-image.jpg)`;

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
  console.log("Before Test Is Bg Image Fetched");
  if (isBgImgFetched == false) {
    console.log("Start BgImage Fetching");
    client.photos
      .search({ query, per_page: 80, orientation })
      .then(({ photos }) => {
        console.log("Setting Bg Url");
        const random = Math.round(Math.random() * 80 - 1);
        setHoldBgUrl(photos[random].src[orientation]);
        console.log(photos[random].src);
        console.log("IsImgFc Setting About To Done");
        setIsBgImgFetched(true);

        console.log("holdUrl:\t" + holdBgUrl);
      });
  }
  console.log("Iam Count");
  {
    console.log("isBgFetched:\t" + isBgImgFetched);
  }
  return (
    <section
      style={
        isBgImgFetched != false
          ? {
              backgroundImage: currentBgImage,
            }
          : {
              backgroundImage: DefaultBgImg,
            }
      }
      className={
        "flex justify-center items-center bg-cover bg-no-repeat w-[100vw] h-[100vh]"
      }
    >
      {console.log("Inside Background Container JSX")}
      <FactCard
        isBgImgFetched={isBgImgFetched}
        setIsBgImgFetched={setIsBgImgFetched}
        holdBgUrl={holdBgUrl}
        setCurrBgImg={setCurrBgImg}
      />
    </section>
  );
};
export default BackgroundContainer;
