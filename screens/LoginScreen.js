import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

import { gStyles } from "../styles/global.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const navigation = useNavigation();

  const handelSubmit = () => {
    if (email === "" || password === "") {
      Alert.alert("Помилка", "Введіть всі необхідні дані");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Помилка", "Введіть дійсну електронну пошту.");
      return;
    }
    console.log(`"email:" ${email}, "password:" ${password}`);
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleFocusChange = (newFocus) => {
    setIsShowKeyboard(newFocus);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const goToRegistration = () => {
    navigation.navigate("Registration");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={gStyles.container}>
        <ImageBackground
          source={require("../assets/images/bgImage.jpg")}
          style={gStyles.bgImage}
          resizeMode="cover"
        >
          <View
            style={[
              gStyles.contentContainer,
              styles.formContainer,
              { height: isShowKeyboard ? 507 : 489 },
            ]}
          >
            <Text style={gStyles.title}>Увійти</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={{ width: "100%" }}
            >
              <View style={gStyles.inputWrap}>
                <Input
                  value={email}
                  onValue={setEmail}
                  keyboardType="email-address"
                  placeholder="Адреса електронної пошти"
                  onFocusChange={handleFocusChange}
                />
                <View>
                  <Input
                    value={password}
                    onValue={setPassword}
                    placeholder="Пароль"
                    secureTextEntry={isShowPassword}
                    onFocusChange={handleFocusChange}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      handleShowPassword();
                    }}
                    style={gStyles.showPasswordBox}
                  >
                    <Text style={gStyles.text}>
                      {isShowPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <SubmitButton text="Увійти" onPress={handelSubmit} />
            <View style={gStyles.textBox}>
              <Text style={gStyles.text}>Немає акаунту?</Text>
              <TouchableOpacity
                onPress={() => {
                  goToRegistration();
                }}
              >
                <Text style={[gStyles.textLink, gStyles.text]}>
                  Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 32,
  },
});
