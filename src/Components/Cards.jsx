import React from "react";

const CardRow = () => {
  return (
    <section className="w-full px-12 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative w-full h-[500px]">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_401,c_limit/5cbd46b7-a103-416c-9c0d-9e40db7295f3/nike-just-do-it.jpg"
            alt="Nike Running"
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute bottom-6 left-8 text-white max-w-xs">
            <button className="mt-4 rounded-full bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition">
              Shop Running
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full h-[500px]">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_401,c_limit/b22103c4-c9eb-43c3-8b2d-7c452ae2bc98/nike-just-do-it.jpg"
            alt="Nike Lifestyle"
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute bottom-6 left-8 text-white max-w-xs">
            <button className="mt-4 rounded-full bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition">
              Shop Soccer
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-full h-[500px]">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_401,c_limit/343ea1f5-3d51-4332-b6e5-5858205f4eb9/nike-just-do-it.jpg"
            alt="Nike Lifestyle"
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute bottom-6 left-8 text-white max-w-xs">
            <button className="mt-4 rounded-full bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition">
              Shop Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardRow;
