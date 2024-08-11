import ProductCard from "@/src/components/common/product_card/productCard";
import Wrapper from "../layout/wrapper/layout";
import Filter from "./components/filter";
import Grid from "./components/grid";
import { getAllCategories, getAllProducts } from "@/src/lib/apiStore/apiStore";

const Products = async ({
  searchParams,
}: {
  searchParams: { page?: number; query?: string; category?: string };
}) => {
  const currentPage: number = Number(searchParams.page || 0);
  const searchQuery: string = searchParams.query || "";
  const selectedCategory: string = searchParams.category || "";
  const categoriesData: string[] = await getAllCategories();
  const productsData: IProducts = await getAllProducts({
    currentPage,
    searchQuery,
    selectedCategory,
  });
  return (
    <Wrapper>
      <section className="flex gap-1 flex-col xl:flex-row relative">
        <Filter categoriesData={categoriesData} />
        <Grid productsData={productsData} />
      </section>
    </Wrapper>
  );
};

export default Products;
