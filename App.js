import { StyleSheet, Text, View, TextIpunt } from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [estatura, setEstatura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState("");
  const calcularIMC = () => {
    setIMC(peso / (estatura * estatura));
  };
  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text>
      <Text> NOMBRE:</Text>
      <TextIpunt
        style={styles.input}
        value={nombre}
        onChangeText={(value) => setNombre(value)}
        placeholder="Nombre"
      />
      <Text> APELLIDO:</Text>
      <TextIpunt
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
        placeholder="Apellido"
      />
      <Text> ESTATURA (cm): </Text>

      <TextIpunt
        style={styles.input}
        value={estatura}
        onChangeText={setEstatura}
        placeholder="Ingrese su estatura"
        keyboardType="numeric"
      />

      <Text> PESO (kg): </Text>
      <TextIpunt
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
        placeholder="Ingrese su  peso"
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calcularIMC} />
      <Text> RESULTADO: </Text>
      <Text>{imc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
