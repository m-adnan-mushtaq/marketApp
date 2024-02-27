import { colors } from "@/constants";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    marginTop: "auto",
    alignSelf: "flex-end",
    padding: 20,
    width: "100%",
  },
  logoWrapper: {
    marginTop: 50,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    aspectRatio: "1/1",
  },
  logoCaption: {
    color: colors.DARK_COLOR,
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "bold",
  },
});
