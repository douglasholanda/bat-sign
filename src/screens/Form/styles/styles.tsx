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
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingBottom: 20,
  },
  containerScroll: {
    width: "100%",
    paddingBottom: 30,
  },
  containerImg: {
    width: 100,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "black",
    marginBottom: 10,
    marginLeft: 20,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  itemForm: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
    marginLeft: 5,
    color: "rgba(0,0,0,0.8)",
    fontWeight: 500,
  },
  inputOneLine: {
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,0.8)",
    borderRadius: 10,
    paddingLeft: 15,
    height: 48,
  },
  inputMultiLine: {
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,0.8)",
    borderRadius: 10,
    paddingLeft: 15,
    height: 80,
  },
  btn: {
    alignSelf: "center",
    marginTop: 30,
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.1)",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  btnText: {
    fontSize: 17,
    fontWeight: 500,
    color: "white",
  },
});
