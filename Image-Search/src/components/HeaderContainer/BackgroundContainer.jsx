import { useEffect } from "react";
import { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import fethImages from "../../API/fetchImages";
import getOrientation from "../../Orientation/getOrientation";

export default function backgroundContainer() {
  const [HoldBgUrl, setHoldBgUrl] = useState(false);
  useEffect(() => {
    const query = "Nature";

    if (!HoldBgUrl) {
      fethImages(query, getOrientation(), setHoldBgUrl);
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
