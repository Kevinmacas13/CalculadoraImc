import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [estatura, setEstatura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const calcularIMC = () => {
    const estaturaMetros = parseFloat(estatura) / 100;
    const pesoNum = parseFloat(peso);
    if (estaturaMetros > 0 && pesoNum > 0) {
      const resultado = pesoNum / (estaturaMetros * estaturaMetros);
      setIMC(resultado.toFixed(2));

      if (resultado < 18.5) {
        setMensaje("Bajo peso");
      } else if (resultado < 25) {
        setMensaje("Peso normal");
      } else if (resultado < 30) {
        setMensaje("Sobrepeso");
      } else {
        setMensaje("Obesidad");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <Text>NOMBRE:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      />

      <Text>APELLIDO:</Text>
      <TextInput
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
        placeholder="Apellido"
      />

      <Text>ESTATURA (cm):</Text>
      <TextInput
        style={styles.input}
        value={estatura}
        onChangeText={setEstatura}
        placeholder="Ingrese su estatura"
        keyboardType="numeric"
      />

      <Text>PESO (kg):</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
        placeholder="Ingrese su peso"
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={calcularIMC} />

      {imc && (
        <Text>
          RESULTADO:
          {" " + imc + " ----> "}
          {mensaje && <Text>{mensaje}</Text>}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
