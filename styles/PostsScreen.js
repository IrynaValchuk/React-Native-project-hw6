import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
  userWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  textName: {
    fontSize: 13,
    fontFamily: "RobotoBold",
    color: "#212121",
  },
  textEmail: {
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.80)",
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
    alignItems: "center",
    justifyContent: "space-between",
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
