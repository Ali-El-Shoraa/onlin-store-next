import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Product({ params }) {
  const data = await getData(params.id);

  const products = data;

  return (
    <div className="container mx-auto px-4">
      {products ? (
        <>
          <header>
            <div>
              <h1 className="text-4xl mb-4">{products.title}</h1>
              <p className="text-lg">{products.description}</p>
            </div>

            <div className="relative h-80 w-80 mx-auto my-6">
              <Image
                className="object-cover rounded-2xl"
                src={products.thumbnail}
                alt="post product"
                fill={true}
              />
              <span className="absolute py-1 px-2 bottom-0 right-0 text-[#111] bg-[#53c28b]">
                {products.brand}
              </span>
            </div>
          </header>

          <div>
            <div className="my-6 flex items-center justify-center gap-3 flex-wrap">
              {products.images &&
                products.images.map((image, index) => (
                  <div key={index} className="relative h-40 w-40 my-6">
                    <Image
                      className="object-cover rounded-2xl cursor-pointer"
                      src={image}
                      alt="product image"
                      fill={true}
                    />
                  </div>
                ))}
            </div>

            <p className="columns-1 text-justify">{products.description}</p>
          </div>
        </>
      ) : (
        <h1>data is loading</h1>
      )}
    </div>
  );
}
