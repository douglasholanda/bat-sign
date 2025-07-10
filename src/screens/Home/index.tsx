import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import bat_logo from "../../../assets/bat-logo.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles/styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export default function Home({ navigation }: Props) {
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.containerSafe}>
          <View style={styles.containerImg}>
            <Image style={styles.img} source={bat_logo} />
          </View>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.9}
            onPressOut={() => navigation.navigate("FormScreen")}
          >
            <Text style={styles.btnText}>activate bat signal</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
