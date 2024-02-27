import { colors } from "@/constants";
import { Image, ImageSourcePropType, StatusBar, View } from "react-native";
import { styles } from "./style";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const ProductDetailScreen: React.FC<{ soruce: ImageSourcePropType }> = ({
  soruce,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnWrapper}>
        <Entypo name="cross" color={colors.LIGHT_COLOR} size={30} />
        <FontAwesome name="trash" color={colors.LIGHT_COLOR} size={30} />
      </View>
      <Image style={styles.product} source={soruce} />
      <StatusBar backgroundColor={colors.DARK_COLOR} />
    </View>
  );
};

export default ProductDetailScreen;
