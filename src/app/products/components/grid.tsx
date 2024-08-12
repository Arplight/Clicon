import ProductCard from "@/src/components/common/product_card/productCard";
import Pagination from "./pagination";

const Grid = ({ productsData }: { productsData: IProducts }) => {
  return (
    <span className="w-full xl:w-5/6 p-1 flex flex-col">
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
        {productsData &&
          productsData.products?.map((card) => (
            <li key={card.id}>
              <ProductCard
                cardDescription={card.description}
                cardTitle={card.title}
                cardPrice={card.price}
                cardId={card.id}
                cardImages={card.images}
              />
            </li>
          ))}
      </ul>

      <Pagination productsData={productsData} />
    </span>
  );
};

export default Grid;
