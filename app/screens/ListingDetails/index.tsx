import ProductCard from "@/components/Products/ProductCard";
import Avatar from "@/components/Users/Avatar";
import { Text, View } from "react-native";
import { styles } from "./styles";

const ListingDetailsScreen = () => {
  return (
    <View>
      <ProductCard source={require("@assets/products/couch.jpg")} price={90} />
      <View style={styles.avatrDetails}>
        <Avatar source={require("@assets/users/mosh.jpg")} />
        <View>
          <Text>Mosh Hamadani</Text>
          <Text style={styles.avatarCaption}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;
