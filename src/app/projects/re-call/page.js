import React from "react";

const ScrollableImage = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <div className="h-full overflow-y-auto pointer-events-auto">
        <img
          src="/re_Call.png"
          alt="Long scrollable image"
          className="w-[55%] h-auto mx-auto min-h-screen object-cover opacity-90"
        />
      </div>
    </div>
  );
};

export default ScrollableImage;
