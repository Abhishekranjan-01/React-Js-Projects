import axios from "axios";
import { useContext } from "react";
import getOrientation from "../Orientation/getOrientation";
import { APIdataProvider } from "../components/Home/Home";
import { setDataFromAPIRef } from "../components/Home/Home";
export default function fethImages(query, orientation, setHoldBgUrl = null) {
  axios
    .get(
      `https://api.pexels.com/v1/search/?page=1&per_page=80&orientation=${getOrientation()}&query=${query}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_PEXEL_HEADER_BG_FETCH,
        },
      }
    )
    .then((res) => {
      const random = Math.round(Math.random() * 80 - 1);

      setHoldBgUrl(`url(${res.data.photos[random].src[orientation]})`);
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
}
