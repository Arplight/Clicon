import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <br />
      <Link href={"/auth"}>Auth</Link>
      <br />
      <Link href={"/products"}>Products</Link>
      <br />
      <Link href={"/products/2"}>ProductsDetails</Link>
    </nav>
  );
};

export default Navbar;
