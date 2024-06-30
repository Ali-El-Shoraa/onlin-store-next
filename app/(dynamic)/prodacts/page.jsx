import Image from "next/image";
import Link from "next/link";

// https://dummyjson.com/products

async function getData() {
  const res = await fetch(`https://dummyjson.com/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Prodacts() {
  const data = await getData();

  const products = data.products;
  // products.length = 10;

  return (
    <div className="container mx-auto px-4 grid grid-cols-auto gap-5">
      {products.map((prodact) => (
        <Link
          key={prodact.id}
          href={`/prodacts/${prodact.id}`}
          className="flex flex-col items-center gap-4 rounded-2xl border border-solid border-[#555] overflow-hidden"
        >
          <div className="relative h-52 w-full">
            <Image
              className="rounded-2xl object-cover flex"
              src={prodact.thumbnail}
              alt="post"
              fill={true}
            />
          </div>

          <div className="px-4 pb-3">
            <h1 className="font-bold">{prodact.title}</h1>
            <p className="text-lg text-gray-700">{prodact.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
