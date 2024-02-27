import { colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatrDetails: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  avatarCaption: {
    color: colors.SILVE_COLOR,
    textTransform: "capitalize",
  },
});
