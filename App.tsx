import { colors } from "@/constants";
import ListingDetailsScreen from "@/screens/ListingDetails";
import ListingScreen from "@/screens/ListingScreen";
import ProductDetailScreen from "@/screens/ProductDetailScreen";
import WelcomeScreen from "@/screens/WelcomeScreen";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ProductDetailScreen soruce={require("@assets/products/chair.jpg")} /> */}
      {/* <ListingScreen /> */}
      <ListingDetailsScreen />
      <StatusBar backgroundColor={colors.PRIMARY_COLOR} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_SECONDARY_COLOR,
    ...Platform.select({
      android: {
        // paddingTop: StatusBar.currentHeight,
      },
    }),
  },
});
