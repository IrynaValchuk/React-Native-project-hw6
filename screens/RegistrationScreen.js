import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
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

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const navigation = useNavigation();

  const handelSubmit = () => {
    if (login === "" || email === "" || password === "") {
      Alert.alert("Помилка", "Введіть всі необхідні дані");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Помилка", "Введіть дійсну електронну пошту.");
      return;
    }
    console.log(
      `"login:" ${login}, "email:" ${email}, "password:" ${password}`
    );
    setLogin("");
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

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={gStyles.container}>
        <ImageBackground
          source={require("../assets/images/bgImage.jpg")}
          resizeMode="cover"
          style={gStyles.bgImage}
        >
          <View
            style={[
              gStyles.contentContainer,
              { height: isShowKeyboard ? 629 : 549 },
            ]}
          >
            <View style={gStyles.addImageBox}>
              <TouchableOpacity style={gStyles.addImageBtn}>
                <Image source={require("../assets/images/addImageBtn.png")} />
              </TouchableOpacity>
            </View>
            <Text style={gStyles.title}>Реєстрація</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={{
                width: "100%",
              }}
            >
              <View style={gStyles.inputWrap}>
                <Input
                  value={login}
                  onValue={setLogin}
                  placeholder="Логін"
                  onFocusChange={handleFocusChange}
                />
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
            <SubmitButton text="Зареєстуватися" onPress={handelSubmit} />
            <View style={gStyles.textBox}>
              <Text style={gStyles.text}>Вже є акаунт?</Text>
              <TouchableOpacity
                onPress={() => {
                  goToLogin();
                }}
              >
                <Text style={[gStyles.textLink, gStyles.text]}>Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
