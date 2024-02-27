import ProductCard from "@/components/Products/ProductCard";
import React from "react";
import { View } from "react-native";

const ListingScreen = () => {
  return (
    <View>
      <ProductCard source={require("@assets/products/couch.jpg")} price={100} />
      <ProductCard source={require("@assets/products/chair.jpg")} price={50} />
    </View>
  );
};

export default ListingScreen;
