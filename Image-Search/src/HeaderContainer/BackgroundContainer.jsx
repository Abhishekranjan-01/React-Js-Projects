import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import InputContainer from "./InputContainer/InputContainer";

export default function backgroundContainer() {
  const [HoldBgUrl, setHoldBgUrl] = useState(false);
  useEffect(() => {
    const query = "Nature";
    const screenWidth = window.screen.availWidth;

    let orientation = "landscape";

    if (screenWidth < 450) {
      orientation = "portrait";
    } else {
      orientation = "landscape";
    }
    if (!HoldBgUrl) {
      axios
        .get(
          `https://api.pexels.com/v1/search/?page=1&per_page=80&orientation=${orientation}&query=${query}`,
          {
            headers: {
              Authorization: import.meta.env.VITE_PEXEL_HEADER_BG_FETCH,
            },
          }
        )
        .then((res) => {
          const random = Math.round(Math.random() * 80 - 1);
          console.log(res.data.photos[random]);
          console.log(HoldBgUrl);
          console.log(res.data.photos[random].src[orientation]);
          setHoldBgUrl(`url(${res.data.photos[random].src[orientation]})`);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  });

  return (
    <header
      style={{
        backgroundImage: HoldBgUrl && HoldBgUrl,
      }}
      className={`flex flex-col justify-center bg-black w-screen h-96 bg-no-repeat bg-cover`}
    >
      <InputContainer />
    </header>
  );
}
