import { useState } from "react";
import { IoVolumeHigh } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Audio() {
  const [active, setActive] = useState(false);
  const wordInfo = useSelector((state) => state.wordInfo);

  return (
    <span
      onClick={(e) => {
        document.querySelector("audio").play();
        setActive(true);
      }}
    >
      <IoVolumeHigh
        className={(active && `text-green-500`) + " text-2xl sm:text-3xl"}
      ></IoVolumeHigh>
      <audio
        onEnded={() => {
          setActive(false);
        }}
        className="block text-lg bg-transparent "
        src={wordInfo[0].phonetics[wordInfo[0].phonetics.length - 1].audio}
      ></audio>
    </span>
  );
}
