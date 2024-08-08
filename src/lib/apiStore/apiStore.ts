import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const BASE_URL: string = "https://dummyjson.com/";

// Auth endpoints
export const signUp_API = createAsyncThunk(
  "auth/signUp",
  async (signUpData: ISignUp) => {
    try {
      const response = await fetch(`${BASE_URL}users/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      if (!response.ok) {
        toast.error(response.statusText);
      }
      return response.json();
    } catch (error: any) {
      toast.error(error.message);
      console.error(error);
    }
  }
);

export const signIn_API = createAsyncThunk(
  "auth/signIn",
  async (signInData: ISignIn) => {
    try {
      const response = await fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error(error);
        toast.error("Invalid credentials");
      }
      return response.json();
    } catch (error: any) {
      console.error(error.message);
    }
  }
);

// Products endpoints
export async function getAllProducts({
  currentPage,
  searchQuery,
  category,
}: {
  currentPage: number;
  searchQuery?: string;
  category?: string;
}) {
  const skip: number = currentPage * 10;

  const url = new URL(`${BASE_URL}products`);

  if (searchQuery) {
    url.pathname += `/search`;
    url.searchParams.append("q", searchQuery);
  }
  if (category) {
    url.pathname += `/category/${category}`;
  }
  url.searchParams.append("limit", "12");
  url.searchParams.append("skip", skip.toString());
  // console.log(url);
  try {
    const response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return response.json();
  } catch (error) {
    throw new Error("Something went wrong!");
    console.error(error);
  }
}

export async function getProductsByCategory(selectedCategory: string) {
  try {
    const response = await fetch(
      `${BASE_URL}products/category/${selectedCategory}?limit=8&skip=0`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return response.json();
  } catch (error) {
    throw new Error("Something went wrong!");
    console.error(error);
  }
}

export async function getProductDetails(productId: string) {
  try {
    const response = await fetch(
      `${BASE_URL}products/${productId}`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return response.json();
  } catch (error) {
    throw new Error("Something went wrong!");
    console.error(error);
  }
}

// Categories endpoint
export async function getAllCategories() {
  try {
    const response = await fetch(
      `${BASE_URL}products/category-list`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return response.json();
  } catch (error) {
    throw new Error("Something went wrong!");
    console.error(error);
  }
}
