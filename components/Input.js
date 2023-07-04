import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({
  value,
  onValue,
  placeholder,
  secureTextEntry,
  keyboardType,
  onFocusChange,
}) => {
  const [focus, setFocus] = useState(false);

  const handleFocusChange = (newFocus) => {
    setFocus(newFocus);
    onFocusChange(newFocus);
  };
  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: focus ? "#FF6C00" : "#E8E8E8",
          backgroundColor: focus ? "#FFFFFF" : "#F6F6F6",
        },
      ]}
      value={value}
      onChangeText={onValue}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onFocus={() => {
        handleFocusChange(true);
      }}
      onBlur={() => {
        handleFocusChange(false);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,

    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,

    color: "#212121",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
});
