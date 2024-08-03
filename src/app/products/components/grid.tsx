import ProductCard from "@/src/components/common/product_card/productCard";

const Grid = () => {
  const images: string[] = [
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png",
  ];
  return (
    <ul className="w-full xl:w-5/6  p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
      {Array.from({ length: 20 }, (_, index) => index + 1).map(
        (card, index) => (
          <li key={index}>
            <ProductCard
              cardDescription="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
              cardTitle="AKG K240"
              cardPrice={12000}
              cardId={12}
              cardImages={images}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default Grid;
