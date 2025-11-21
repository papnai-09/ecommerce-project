import { Laptop, Book, Smartphone, Headphones } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Laptops", icon: Laptop },
  { name: "Books", icon: Book },
  { name: "Mobiles", icon: Smartphone },
  { name: "Headphones", icon: Headphones },
];

export default function CategorySection() {
  return (
    <div className="w-[90%] mx-auto mt-16">
      <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/category/${cat.name.toLowerCase()}`}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <cat.icon size={40} className="text-[#38bdf8]" />
            <p className="mt-3 font-medium">{cat.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
