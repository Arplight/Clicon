import MainSection from "@/src/components/common/main_section/mainSection";
import Wrapper from "../../layout/wrapper/layout";
import Gallery from "./components/gallery/gallery";
import Summary from "./components/summary/summary";
import { getProductDetails } from "@/src/lib/apiStore/apiStore";

const ProductDetails = async ({
  params,
}: {
  params: { productDetails: string };
}) => {
  const pathArr: string[] = params.productDetails.split("-");
  const pathId: string = pathArr[pathArr.length - 1];
  const productData: Product = await getProductDetails(pathId);
  return (
    <Wrapper>
      <MainSection withStyle="flex flex-col md:flex-row gap-y-4 gap-x-2">
        <Gallery images={productData?.images} productTitle="AKG" />
        <Summary
          summaryAvailability={productData.stock}
          summaryBrand={productData?.brand}
          summaryCategory={productData?.category}
          summaryDescription={productData?.description}
          summaryDiscountPercentage={productData?.discountPercentage}
          summaryPrice={productData?.price}
          summaryRate={productData?.rating}
          summarySku={productData?.sku}
          summaryTitle={productData?.title}
          summaryId={productData?.id}
          summaryImage={productData?.images[0]}
        />
      </MainSection>
    </Wrapper>
  );
};

export default ProductDetails;
