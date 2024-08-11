// Auth types
interface ISignUp {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}
interface ISignIn {
  username: string;
  password: string;
}

// Products api types
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO 8601 format string
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string; // ISO 8601 format string
  updatedAt: string; // ISO 8601 format string
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

interface IProducts {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
// cart
interface ICart {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  subtotal: number;
  image: string;
}
// favourites
interface IFav {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
