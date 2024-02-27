import { Image, ImageSourcePropType, StyleSheet } from "react-native";

const Avatar: React.FC<{
  source: ImageSourcePropType;
}> = ({ source }) => {
  return <Image style={styles.img} source={source} />;
};

export default Avatar;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
  },
});
