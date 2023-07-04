import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    position: "relative",
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
    left: "40%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  logoutIcon: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  postImg: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  textComment: {
    marginBottom: 8,
    fontFamily: "RobotoMedium",
    fontSize: 16,
    color: "#212121",
  },
  infoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
  },
  countBox: {
    flexDirection: "row",
    gap: 24,
  },
  descrBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textCount: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  textLocation: {
    textDecorationLine: "underline",
    fontSize: 16,
    color: "#212121",
  },
});
