import React from "react";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  { id: 1, name: "Air Jordan 1", img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" },
  { id: 2, name: "Dunk", img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/60ce51e6-ab01-46fd-a0d0-e1987fa52554/nike-just-do-it.jpg" },
  { id: 3, name: "Field General", img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/927d52e4-7593-40ef-ba4a-90685b225199/nike-just-do-it.jpg" },
  { id: 4, name: "Air Force 1", img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/999d4075-e65c-4de9-8ad9-a54dddcc52ee/nike-just-do-it.jpg" },
  { id: 5, name: "Air Max", img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/5fa3bdd7-062b-40b6-88a4-9d5802d2a6f8/nike-just-do-it.jpg" },
  { id: 6, name: "Vomero", img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/537cf473-291c-48e9-bd29-5cb37ad013b1/nike-just-do-it.jpg" },
  { id: 7, name: "Cortez", img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/65805582-b64e-4b1d-83b8-49b69b34c41e/nike-just-do-it.jpg" },
  { id: 8, name: "CITY", img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/290542af-0464-4c20-955e-4f34a697e097/nike-just-do-it.jpg" },
];

const ClassicsSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="w-full px-6 py-16">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6"
      style={{ fontFamily: "'Helvetica Now MT Text', sans-serif" }}>
        <h2 className="text-2xl font-semibold ml-6">Shop the Classics</h2>
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth no-scrollbar"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[220px] flex-shrink-0">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <p className="mt-3 text-lg font-medium"style={{ fontFamily: "'Helvetica Now MT Text', sans-serif" }}>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassicsSection;
