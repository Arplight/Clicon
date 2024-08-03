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
            "Category-7",
            "Category-8",
            "Category-9",
            "Category-10",
            "Category-11",
            "Category-12",
            "Category-13",
            "Category-14",
            "Category-15",
            "Category-16",
            "Category-17",
            "Category-18",
            "Category-19",
            "Category-20",
            "Category-21",
            "Category-22",
            "Category-23",
            "Category-24",
          ]}
        />
        <Grid />
      </section>
    </Wrapper>
  );
};

export default Products;
