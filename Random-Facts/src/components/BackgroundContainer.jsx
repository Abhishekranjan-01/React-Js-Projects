import { useState } from "react";
import CardContainer from "./CardContainer";
import { createClient } from "pexels";

const BackgroundContainer = () => {
  const [isBackgroundFetched, setBackgroundFetched] = useState(false);
  let test = true;

  const dBI =
    "bg-[url('https://images.pexels.com/photos/957039/hut-alpine-mountains-bavaria-957039.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&dpr=1')]";

  let turl =
    "https://images.pexels.com/photos/101529/pexels-photo-101529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&dpr=1";

  let burl = `url(${turl})`;

  const client = createClient(
    "ZtKlkEPY4TJLdBGHjsyzEj5D8yvYzjW7fkUPFURNY8Wh1cejKeGZwikC"
  );

  const query = "Nature";
  const screenWidth = window.screen.availWidth;
  //   console.log(screenWidth);
  let orientation = "landscape";
  if (screenWidth < 450) {
    orientation = "potrait";
  } else {
    orientation = "landscape";
  }
  if (isBackgroundFetched == false) {
    client.photos
      .search({ query, per_page: 80, orientation })
      .then((photos) => {
        const random = Math.round(Math.random() * 80 - 1);
        // console.log(photos.photos[random]);
        // console.log(photos.photos[random].src.landscape);
        const bgImageUrl = `'${
          photos.photos[random].src.landscape + "&dpr=1"
        }'`;
        // console.log(burl);
        console.log(bgImageUrl);
        const bgImageClass = `bg-[url(${burl})]`;
        // console.log(bgImageClass);
        // console.log(dBI);

        setBackgroundFetched(bgImageClass);
      });
  }

  // 450>Landscape
  // 450<Potrait
  {
    console.log("Available Height:\t" + window.screen.orientation.type);
  }

  return (
    <section
      style={{
        backgroundImage: burl,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={" w-[100vw] h-[100vh]"}
    >
      {/* <CardContainer /> */}
    </section>
  );
};
export default BackgroundContainer;
