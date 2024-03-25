import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIdataProvider } from "../Home/Home";
import downloadImg from "../../Features/downloadImg";
import { FaDownload } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";

export default function ImageContainer() {
  const { dataFromAPI, setDataFromAPI } = useContext(APIdataProvider);

  const navigate = useNavigate();
  const [arrayOfImages, setArrayOfImage] = useState([]);
  const [loadImgs, setLoadImgs] = useState(true);

  const HandleScrollEvent = () => {
    if (
      Math.abs(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight -
          document.documentElement.scrollTop
      ) <= 15
    ) {
      let tempArr = [...dataFromAPI.slice(0, 9)];

      console.log("DFPI Le:\t", dataFromAPI.length);
      console.log("AFI Le:\t", arrayOfImages.length);
      setArrayOfImage([...arrayOfImages, ...tempArr]);
      setDataFromAPI(dataFromAPI.slice(9, Infinity));
    }
  };

  useEffect(() => {
    if (loadImgs) {
      let tempArr = [...dataFromAPI.slice(0, 9)];

      setArrayOfImage([...arrayOfImages, ...tempArr]);
      setDataFromAPI(dataFromAPI.slice(9, Infinity));
      setLoadImgs(false);
    }
  }, []);

  window.addEventListener("scroll", HandleScrollEvent);

  return (
    <main className=" pb-12 mx-auto">
      <div className="mt-[40px] columns-1 sm:columns-3 gap-[15px]">
        {arrayOfImages.map((allData, i) => (
          <div
            key={allData.id}
            className="relative overflow-hidden mb-[15px] rounded-md shadow-md shadow-gray-600 w-fit max-sm:flex max-sm:flex-col max-sm:items-center"
          >
            <img
              className="w-full bg-cover max-sm:px-2 sm:rounded-md rounded-sm"
              src={allData.src["original"]}
              alt={allData.alt}
            />

            <div className="absolute bottom-0  sm:left-0 w-11/12 sm:w-full flex items-center justify-between p-1 max-sm:px-0 sm:p-3 bg-black bg-opacity-50 text-white">
              <div className="flex items-center gap-4">
                <div className="flex gap-1 sm:gap-2">
                  <FcMindMap
                    className="text-white font-bold sm:text-2xl text-lg"
                    onClick={() => navigate("/About", { state: allData })}
                  />
                  <button
                    className="italic sm:font-semibold sm:text-lg underline"
                    onClick={() => navigate("/About", { state: allData })}
                  >
                    About
                  </button>
                </div>
              </div>
              <div>
                <button onClick={() => downloadImg(allData.src["original"])}>
                  <FaDownload className="text-white sm:text-2xl text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
