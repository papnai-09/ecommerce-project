import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <div className="w-[90%] mx-auto mt-16">
      <h2 className="text-2xl font-semibold mb-6">Featured Electronics</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition"
          >
            <Image
              src={`/product${num}.jpg`} // add product images in public/
              alt="Product"
              width={300}
              height={200}
              className="w-full rounded"
            />
            <p className="mt-3 font-medium">Product {num}</p>
            <p className="text-[#38bdf8] font-semibold">₹999</p>
          </div>
        ))}
      </div>
    </div>
  );
}
