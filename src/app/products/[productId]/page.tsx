import MainSection from "@/src/components/common/main_section/mainSection";
import Wrapper from "../../layout/wrapper/layout";
import Gallery from "./components/gallery/gallery";
import Summary from "./components/summary/summary";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <Wrapper>
      <MainSection withStyle="flex flex-col md:flex-row gap-y-4 gap-x-2">
        <Gallery
          images={[
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png",
          ]}
          productTitle="AKG"
        />
        <Summary
          summaryAvailability={11}
          summaryBrand="AKG"
          summaryCategory="Headphones"
          summaryDescription="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          summaryDiscountPercentage={6}
          summaryPrice={200.0}
          summaryRate={4.5}
          summarySku="SFJBEJW3"
          summaryTitle="AKG K240"
        />
      </MainSection>
    </Wrapper>
  );
};

export default ProductDetails;
