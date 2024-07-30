import MainButton from "../components/common/buttons/main_button/mainButton";
import Carousel from "../components/common/carousel/carousel";
import MainSection from "../components/common/main_section/mainSection";
import Wrapper from "./layout/wrapper/layout";

const Home = () => {
  const testData = [
    {
      cardDescription: "lorem",
      cardTitle: "lorem",
      cardPrice: 12,
      cardId: 12,
      cardImages: ["", ""],
    },
    {
      cardDescription: "lorem",
      cardTitle: "lorem",
      cardPrice: 12,
      cardId: 12,
      cardImages: ["", ""],
    },
    {
      cardDescription: "lorem",
      cardTitle: "lorem",
      cardPrice: 12,
      cardId: 12,
      cardImages: ["", ""],
    },
    {
      cardDescription: "lorem",
      cardTitle: "lorem",
      cardPrice: 12,
      cardId: 12,
      cardImages: ["", ""],
    },
    {
      cardDescription: "lorem",
      cardTitle: "lorem",
      cardPrice: 12,
      cardId: 12,
      cardImages: ["", ""],
    },
    {
      cardDescription: "lorem",
      cardTitle: "lorem",
      cardPrice: 12,
      cardId: 12,
      cardImages: ["", ""],
    },
  ];
  return (
    <Wrapper>
      <Carousel cardsData={testData} carouselTitle="Clothes" />
      <Carousel cardsData={testData} carouselTitle="Electronics" />
      <Carousel cardsData={testData} carouselTitle="Furniture" />
      <Carousel cardsData={testData} carouselTitle="Shoes" />
      <Carousel cardsData={testData} carouselTitle="Miscellaneous" />
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
