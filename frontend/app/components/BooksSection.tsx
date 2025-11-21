import Image from "next/image";

export default function BooksSection() {
  return (
    <div className="w-[90%] mx-auto mt-20">
      <h2 className="text-2xl font-semibold mb-6">Books You May Like</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition"
          >
            <Image
              src={`/book${num}.jpg`}
              alt="Book"
              width={300}
              height={200}
              className="w-full rounded"
            />
            <p className="mt-3 font-medium">Book {num}</p>
            <p className="text-[#38bdf8] font-semibold">₹499</p>
          </div>
        ))}
      </div>
    </div>
  );
}
