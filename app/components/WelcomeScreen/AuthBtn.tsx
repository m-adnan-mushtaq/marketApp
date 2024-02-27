import { colors } from "@/constants";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

type CProps = {
  colorType: "primary" | "secondary";
  handlePress: () => void;
  children: React.ReactNode;
};
const AuthBtn = (props: CProps) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      style={[
        styles.btn,
        {
          backgroundColor:
            props.colorType === "primary"
              ? colors.PRIMARY_COLOR
              : colors.SECONDARY_COLOR,
        },
      ]}
    >
      <Pressable>
        <Text style={styles.btnText}>{props.children}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export default AuthBtn;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 20,
    margin: 10,
    padding: 10,
    alignItems: "center",
    elevation: 20,
  },
  btnText: {
    color: colors.LIGHT_COLOR,
    textTransform: "uppercase",
  },
});
