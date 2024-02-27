import { colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_COLOR,
    alignItems: "center",
  },
  btnWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  product: {
    width: "90%",
    height: "80%",
    marginTop: "auto",
    resizeMode: "contain",
    marginBottom: 10,
  },
});
