// import { useDispatch, useSelector } from "react-redux";
import MainButton from "../components/common/buttons/main_button/mainButton";
import Carousel from "../components/common/carousel/carousel";
import MainSection from "../components/common/main_section/mainSection";
import { getProductsByCategory } from "../lib/apiStore/apiStore";
import Wrapper from "./layout/wrapper/layout";

const Home = async () => {
  {
    /* data fetching */
  }
  const beautyData: IProducts = await getProductsByCategory("beauty");
  const groceriesData: IProducts = await getProductsByCategory("groceries");
  const laptopsData: IProducts = await getProductsByCategory("laptops");
  const smartphonesData: IProducts = await getProductsByCategory("smartphones");
  const vehiclesData: IProducts = await getProductsByCategory("vehicle");

  return (
    <Wrapper>
      <Carousel cardsData={beautyData.products} carouselTitle="Beauty" />
      <Carousel cardsData={groceriesData?.products} carouselTitle="Groceries" />
      <Carousel cardsData={laptopsData?.products} carouselTitle="Laptops" />
      <Carousel
        cardsData={smartphonesData?.products}
        carouselTitle="Smartphones"
      />
      <Carousel cardsData={vehiclesData?.products} carouselTitle="Vehicles" />
      <MainSection withStyle="flex">
        <MainButton
          buttonLabel={"Explore more"}
          buttonRole={"button"}
          isHollow={false}
          isLarge={false}
          isLoading={false}
          isDisabled={false}
          withStyle="m-auto"
          withLink="/products"
        />
      </MainSection>
    </Wrapper>
  );
};

export default Home;
