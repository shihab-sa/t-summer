import tshirtImage from "./assets/iamges/t-shirt.jpg";
import { Upload, Mouse } from "lucide-react";

const TshirtDesigner = () => {
  return (
    <div className="min-h-screen bg-[#faeee7] flex justify-center items-center">
      <div className="flex flex-wrap space-x-4 p-4 text-white">
        <div className="relative w-64 h-96 border-2 border-black rounded flex justify-center items-center">
          <img
            src={tshirtImage}
            alt="T-Shirt"
            className="w-full h-full object-cover rounded"
          />

          {/* ---- Add your logo image here, for example ---- */}
        </div>

        {/* ---  Input Logo and Submit Section Start ---- */}
        <div className="flex flex-col space-y-4">
          <div className="mt-2 w-64 h-12 flex items-center justify-center relative">
            <div className="absolute left-0 bg-[#232323] rounded">
              <div className="relative inline-block">
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label className="block px-24 py-4 text-sm font-bold text-white bg-gradient-to-b border bg-[#9656a1] rounded shadow-sm cursor-pointer hover:border-black hover:shadow-md active:bg-gradient-to-b active:from-gray-200 active:to-gray-100">
                  <div className=" flex items-center gap-2">
                    <Upload />
                    Upload
                  </div>
                </label>
              </div>
            </div>
          </div>
          <button className="block px-24 py-4 bg-[#232323] font-bold text-white rounded hover:bg-[#232323] transition ease-out delay-0 hover:-translate-y-1 hover:scale-110 duration-200">
            <div className="flex items-center gap-2">
              <Mouse />
              Submit
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TshirtDesigner;
