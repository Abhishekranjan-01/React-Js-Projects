import { useEffect } from "react";
import { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import fethImages from "../../API/fetchImages";

export default function backgroundContainer() {
  const [HoldBgUrl, setHoldBgUrl] = useState(false);
  console.log("I am bg Container");
  useEffect(() => {
    const query = "Nature";

    if (!HoldBgUrl) {
      console.log("Inside Bg , For Fetch Image");
      fethImages(query, setHoldBgUrl);
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
