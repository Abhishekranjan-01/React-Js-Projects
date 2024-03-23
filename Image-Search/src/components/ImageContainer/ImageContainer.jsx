import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { APIdataProvider } from "../Home/Home";
import getOrientation from "../../Orientation/getOrientation";
import downloadImg from "../../Features/downloadImg";
import { FaCamera, FaDownload } from "react-icons/fa";

export default function ImageContainer() {
  const { dataFromAPI } = useContext(APIdataProvider);

  const navigate = useNavigate();
  return (
    <main className=" bg-[#F8F8F8] pb-12">
      <div className="mt-[40px] columns-1 sm:columns-3 gap-[15px]">
        {dataFromAPI.map((allData) => (
          <div
            key={allData.id}
            className="relative group overflow-hidden mb-[15px] rounded-md shadow-md shadow-gray-600"
          >
            <img
              className="w-full bg-cover"
              src={allData.src[getOrientation()]}
              alt={allData.alt}
              onClick={() => navigate("/About", { state: allData })}
            />
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-3 bg-black bg-opacity-50 text-white xs:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4">
                <FaCamera className="text-white font-bold text-2xl" />
                <p className="bottom-[10px]">{allData.photographer}</p>
              </div>
              <div>
                <button onClick={() => downloadImg(allData.src["orignal"])}>
                  <FaDownload className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
