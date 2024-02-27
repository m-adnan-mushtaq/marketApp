import { Alert, Image, ImageBackground, Text, View } from "react-native";
import { style } from "./style";
import AuthBtn from "@/components/WelcomeScreen/AuthBtn";

const BgImage = require("@assets/background.jpg");
const Logo = require("@assets/logo-red.png");
const WelcomeScreen = () => {
  const handleRegister = () => {
    Alert.alert("register clicked");
  };

  const handleLogin = () => {
    Alert.alert("login clicked");
  };

  return (
    <ImageBackground blurRadius={5} source={BgImage} style={style.bgImage}>
      <View style={style.logoWrapper}>
        <Image source={Logo} style={style.logo} />
        <Text style={style.logoCaption}>Sell what you don't need</Text>
      </View>
      <View style={style.buttonWrapper}>
        <AuthBtn handlePress={handleLogin} colorType="primary">
          Login
        </AuthBtn>
        <AuthBtn handlePress={handleRegister} colorType="secondary">
          register
        </AuthBtn>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
