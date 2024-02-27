import { colors } from "@/constants";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ProductCard: React.FC<{
  source: ImageSourcePropType;
  price: number;
}> = ({ source, price }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={source} />
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginHorizontal: "auto",
    marginVertical: 10,
    backgroundColor: colors.LIGHT_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    overflow: "hidden",
    alignSelf: "center",
  },
  img: {
    width: "100%",
    resizeMode: "cover",
    height: 200,
  },
  price: {
    color: colors.SECONDARY_COLOR,
    fontWeight: "500",
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
