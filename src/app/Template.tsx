import MainButton from "../components/common/buttons/main_button/mainButton";
import { GiShoppingCart } from "react-icons/gi";
import QuantityButton from "../components/common/buttons/quantity_button/quantityButton";

const Template = () => {
  return (
    <>
      {/* Typography */}
      <h1>lorem ipsum</h1>
      <h2>lorem ipsum</h2>
      <h3>lorem ipsum</h3>
      <p className="large-paragraph">lorem ipsum</p>
      <p className="small-paragraph">lorem ipsum</p>

      {/* Buttons */}
      <MainButton
        buttonLabel={"Buy Now"}
        buttonRole={"button"}
        isHollow={false}
        isLarge={false}
        isLoading={false}
        isDisabled={false}
      />
      <br />
      <br />

      <MainButton
        buttonLabel={"Add to cart"}
        buttonRole={"button"}
        isHollow={false}
        isLarge={false}
        isLoading={false}
        isDisabled={false}
        buttonIcon={<GiShoppingCart size={20} />}
      />
      <br />
      <MainButton
        buttonLabel={"Buy Now"}
        buttonRole={"button"}
        isHollow={true}
        isLarge={false}
        isLoading={false}
        isDisabled={false}
      />
      <br />
      <br />

      <QuantityButton />
      {/* Product card */}
    </>
  );
};

export default Template;
