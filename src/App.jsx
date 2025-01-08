import React, { useState, useRef } from "react";
import tshirtImage from "./assets/iamges/t-shirt.jpg";
import { Upload, Mouse } from "lucide-react";

const TshirtDesigner = () => {
  const [logo, setLogo] = useState(null);
  const [logoPosition, setLogoPosition] = useState({ x: 50, y: 50 });
  const [logoSize, setLogoSize] = useState({ width: 100, height: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const tshirtRef = useRef(null);
  const canvasRef = useRef(null);

  // Upload Handling The File
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      // Set the uploaded logo image
      reader.onload = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handling The Drag
  const handleMouseDown = (e) => {
    const rect = tshirtRef.current.getBoundingClientRect();
    setIsDragging(true);
    setLogoPosition({
      x: e.clientX - rect.left - logoSize.width / 2,
      y: e.clientY - rect.top - logoSize.height / 2,
    });
  };

  // Handle The Dragging
  const handleMouseMove = (e) => {
    if (isDragging || isResizing) {
      const rect = tshirtRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (isDragging) {
        setLogoPosition({
          x: x - logoSize.width / 2,
          y: y - logoSize.height / 2,
        });
      }

      if (isResizing) {
        const newWidth = x - logoPosition.x;
        const aspectRatio = logoSize.width / logoSize.height;
        setLogoSize({
          width: newWidth,
          height: newWidth / aspectRatio,
        });
      }
    }
  };

  // Mouse Up and Down
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    const rect = tshirtRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setLogoPosition({
      x: x - logoSize.width / 2,
      y: y - logoSize.height / 2,
    });
  };

  // Find the Final Image
  const handleGenerateImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = 256;
    canvas.height = 384;

    // Draw your T-shirt
    const tshirtImg = new Image();
    tshirtImg.src = tshirtImage;

    tshirtImg.onload = () => {
      ctx.drawImage(tshirtImg, 0, 0, canvas.width, canvas.height);

      // Draw logo if present
      if (logo) {
        const logoImg = new Image();
        logoImg.src = logo;

        logoImg.onload = () => {
          ctx.drawImage(
            logoImg,
            logoPosition.x,
            logoPosition.y,
            logoSize.width,
            logoSize.height
          );

          // Trigger download
          const link = document.createElement("a");
          link.download = "tshirt-design.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        };
      }
    };
  };

  return (
    <div
      className="min-h-screen bg-[#faeee7] flex justify-center items-center"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="flex flex-wrap space-x-4 p-4 text-white">
        {/* T-Shirt Image Section */}
        <div
          ref={tshirtRef}
          className="relative w-64 h-96 border-2 border-black rounded flex justify-center items-center"
          onDragOver={handleDragOver} // Allow drag over
          onDrop={handleDrop} // Handle the drop event
        >
          {/* Predefined T-Shirt Image */}
          <img
            src={tshirtImage}
            alt="T-Shirt"
            className="w-full h-full object-cover rounded"
          />
          {logo && (
            <div
              className="absolute border border-dashed border-black"
              style={{
                top: `${logoPosition.y}px`,
                left: `${logoPosition.x}px`,
                width: `${logoSize.width}px`,
                height: `${logoSize.height}px`,
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
                draggable
                onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
                onMouseDown={handleMouseDown}
              />
              {/* Resize */}
              <div
                className="absolute bottom-0 right-0 w-4 h-4 bg-black cursor-se-resize"
                onMouseDown={() => setIsResizing(true)}
              />
            </div>
          )}
        </div>

        {/* Upload Section */}
        <div className="flex flex-col space-y-4">
          <div className="mt-2 w-64 h-12 flex items-center justify-center relative">
            <div className="absolute left-0 bg-[#232323] rounded">
              <div className="relative inline-block">
                <input
                  type="file"
                  onChange={handleFileChange}
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
          <button
            onClick={handleGenerateImage}
            className="block px-24 py-4 bg-[#232323] font-bold text-white rounded hover:bg-[#232323] transition ease-out delay-0 hover:-translate-y-1 hover:scale-110 duration-200"
          >
            <div className="flex items-center gap-2">
              <Mouse />
              Submit
            </div>
          </button>
        </div>
      </div>

      {/* Hidden Canvas */}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
};

export default TshirtDesigner;
