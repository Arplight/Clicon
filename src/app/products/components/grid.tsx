import ProductCard from "@/src/components/common/product_card/productCard";
import Pagination from "./pagination";
import { VscSearchStop } from "react-icons/vsc";
import MainSection from "@/src/components/common/main_section/mainSection";

const Grid = ({ productsData }: { productsData: IProducts }) => {
  return (
    <div className="w-full xl:w-5/6 p-1 flex flex-col">
      {productsData && productsData.products?.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
            {productsData.products?.map((card) => (
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
        </>
      ) : (
        <MainSection withStyle="flex flex-col gap-1 items-center justify-center w-full h-full">
          <VscSearchStop size={100} />
          <h1 className="font-bold">No results Found!</h1>
        </MainSection>
      )}
    </div>
  );
};

export default Grid;
