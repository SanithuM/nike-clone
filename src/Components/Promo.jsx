import React from "react";

const CardRow = () => {
  return (
    <section className="w-full px-0 py-0">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Card 1 */}
        <div className="relative w-full h-[500px]">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_767,c_limit/d3ead45d-6af5-4f8c-8ed4-1df1a3fa3f28/nike-just-do-it.jpg"
            alt="Nike Running"
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute bottom-6 left-8 text-white max-w-xs"
          style={{ fontFamily: "'Helvetica Now MT Text', sans-serif" }}>
            <h2 className="text-lg font-semibold">Nike Sportstwear</h2>
            <h1 className="text-3xl font-semibold mt-2">Styled by Sauce Gardner</h1>
            <button className="mt-4 bg-white text-black rounded-full px-4 py-2 font-medium hover:bg-gray-200 transition">
              Shop
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full h-[500px]">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_767,c_limit/863b0394-111f-47ff-879f-42dc2854a969/nike-just-do-it.jpg"
            alt="Nike Lifestyle"
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute bottom-6 left-8 text-white max-w-xs"
          style={{ fontFamily: "'Helvetica Now MT Text', sans-serif" }}>
            <h2 className="text-lg font-semibold">Sabrina 3 'Radiant'</h2>
            <h1 className="text-3xl font-semibold mt-2">Build Your Game Like The Best</h1>
            <button className="mt-4 bg-white text-black rounded-full px-4 py-2 font-medium hover:bg-gray-200 transition">
              Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardRow;

