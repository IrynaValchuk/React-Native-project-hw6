import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    marginBottom: 33,
    fontFamily: "RobotoMedium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  contentContainer: {
    position: "relative",
    alignItems: "center",
    paddingTop: 92,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  addImageBox: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addImageBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  inputWrap: {
    gap: 16,
    width: "100%",
    marginBottom: 43,
  },
  showPasswordBox: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  textBox: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  textLink: {
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
