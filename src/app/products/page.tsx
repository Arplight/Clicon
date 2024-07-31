import ProductCard from "@/src/components/common/product_card/productCard";
import Wrapper from "../layout/wrapper/layout";
import Filter from "./components/filter";
import Grid from "./components/grid";

const Products = ({ params }: { params: string }) => {
  return (
    <Wrapper>
      <section className="flex gap-1 flex-col xl:flex-row relative">
        <Filter
          categoriesData={[
            "Category-1",
            "Category-2",
            "Category-3",
            "Category-4",
            "Category-5",
            "Category-6",
          ]}
        />
        <Grid />
      </section>
    </Wrapper>
  );
};

export default Products;
