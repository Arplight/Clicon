import ProductCard from "@/src/components/common/product_card/productCard";

const Grid = () => {
  const images: string[] = [
    "https://i.imgur.com/9LFjwpI.jpeg",
    "https://i.imgur.com/vzrTgUR.jpeg",
    "https://i.imgur.com/p5NdI6n.jpeg",
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
