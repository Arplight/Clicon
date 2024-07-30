"use client";
import MainButton from "../components/common/buttons/main_button/mainButton";
import { GiShoppingCart } from "react-icons/gi";
import QuantityButton from "../components/common/buttons/quantity_button/quantityButton";
import ProductCard from "../components/common/product_card/productCard";
import InputField from "../components/common/input_field/inputField";
import { Form, Formik } from "formik";

const Template = () => {
  const images: string[] = [
    "https://i.imgur.com/9LFjwpI.jpeg",
    "https://i.imgur.com/vzrTgUR.jpeg",
    "https://i.imgur.com/p5NdI6n.jpeg",
  ];

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
      <br />
      <br />
      {/* Product card */}
      <ProductCard
        cardDescription="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        cardTitle="AKG K240"
        cardPrice={12000}
        cardId={12}
        cardImages={images}
      />
      <br />
      <br />
      {/* Input fields */}
      <Formik
        initialValues={{ username: "" }}
        validationSchema={""}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <InputField
            fieldLabel={"Username"}
            fieldName={"username"}
            fieldPlaceholder={"Please enter your username"}
            fieldType={"text"}
            fieldMaxLength={80}
            isRequired={true}
          />
          <InputField
            fieldLabel={"E-mail"}
            fieldName={"email"}
            fieldPlaceholder={"Please enter your email"}
            fieldType={"email"}
            fieldMaxLength={80}
            isRequired={true}
          />
          <InputField
            fieldLabel={"password"}
            fieldName={"password"}
            fieldPlaceholder={"Please enter your password"}
            fieldType={"password"}
            fieldMaxLength={80}
            isRequired={true}
          />
        </Form>
      </Formik>
      <br />
      <br />
    </>
  );
};

export default Template;
