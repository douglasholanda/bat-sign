import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerSafe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  containerImg: {
    width: 200,
    height: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 50,
  },
  btn: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 18,
  },
});
