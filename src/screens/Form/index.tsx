import React, { useRef, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import bat_logo from "../../../assets/bat-logo.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "FormScreen">;

export function Form({ navigation }: Props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleFocus = (inputName: string) => {
    setFocusedInput(inputName);
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const sentForm = () => {
    Alert.alert(
      `Formulário enviado!`,
      `Nome: ${name},\nSobrenome: ${surname},\nTelefone: ${phone},\nLocalização: ${location},\nObservação: ${note} `
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.containerImg}>
          <Image style={styles.img} source={bat_logo} />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, width: "100%" }}
        >
          <ScrollView
            ref={scrollViewRef}
            style={styles.containerScroll}
            contentContainerStyle={{ paddingBottom: 20 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.itemForm}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.inputOneLine}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.itemForm}>
              <Text style={styles.label}>Sobrenome</Text>
              <TextInput
                style={styles.inputOneLine}
                value={surname}
                onChangeText={(text) => setSurname(text)}
              />
            </View>
            <View style={styles.itemForm}>
              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.inputOneLine}
                value={phone}
                onChangeText={(text) => setPhone(text)}
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.itemForm}>
              <Text style={styles.label}>Endereço Completo</Text>
              <TextInput
                style={styles.inputOneLine}
                value={location}
                onChangeText={(text) => setLocation(text)}
              />
            </View>
            <View
              style={[
                styles.itemForm,
                focusedInput === "note" && { paddingBottom: 30 },
              ]}
            >
              <Text style={styles.label}>Observações final</Text>
              <TextInput
                multiline
                numberOfLines={4}
                maxLength={250}
                style={styles.inputMultiLine}
                value={note}
                onChangeText={(text) => setNote(text)}
                onFocus={() => handleFocus("note")}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => sentForm()}
            >
              <Text style={styles.btnText}>Enviar</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
