import React, { useState, useRef } from "react";

function TShirtEditor() {
  const [logo, setLogo] = useState(null); // লোগো আপলোডের জন্য স্টেট
  const [logoPosition, setLogoPosition] = useState({ x: 50, y: 50 }); // লোগোর পজিশন
  const [isDragging, setIsDragging] = useState(false); // ড্র্যাগিং কন্ট্রোল করার জন্য
  const logoRef = useRef(null); // লোগো DOM রেফারেন্স

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const tshirtRect = event.target.getBoundingClientRect();
      const mouseX = event.clientX - tshirtRect.left;
      const mouseY = event.clientY - tshirtRect.top;
      setLogoPosition({ x: mouseX, y: mouseY });
    }
  };

  const downloadFinalImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const tshirtImage = new Image();
    tshirtImage.src = "/path-to-tshirt-image.png";
    const logoImage = new Image();
    logoImage.src = logo;

    canvas.width = 400;
    canvas.height = 400;

    tshirtImage.onload = () => {
      ctx.drawImage(tshirtImage, 0, 0, canvas.width, canvas.height);
      logoImage.onload = () => {
        ctx.drawImage(
          logoImage,
          logoPosition.x - 25,
          logoPosition.y - 25,
          50,
          50
        );
        const finalImage = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = finalImage;
        link.download = "tshirt-design.png";
        link.click();
      };
    };
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      {/* T-Shirt Editor Section */}
      <div
        className="relative border border-gray-300 w-80 h-80 bg-white"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img
          src="/path-to-tshirt-image.png"
          alt="T-Shirt"
          className="absolute w-full h-full object-contain"
        />
        {logo && (
          <img
            ref={logoRef}
            src={logo}
            alt="Logo"
            className="absolute cursor-move"
            style={{
              left: `${logoPosition.x}px`,
              top: `${logoPosition.y}px`,
              width: "50px",
              height: "50px",
              position: "absolute",
            }}
            onMouseDown={handleMouseDown}
          />
        )}
      </div>

      {/* Upload Field */}
      <div className="mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mb-4"
        />
        <button
          onClick={downloadFinalImage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download Final Design
        </button>
      </div>
    </div>
  );
}

export default TShirtEditor;
