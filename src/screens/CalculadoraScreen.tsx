import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image, Text, Dimensions } from 'react-native';
import BotonOperacion from '../components/BotonOperacion';
import DisplayResultado from '../components/DisplayResultado';
import { sumar, restar, multiplicar, dividir, raizCuadrada, potencia } from '../utils/calculadora';

const CalculadoraScreen = () => {
  const [input, setInput] = useState<string>('0');
  const [operacion, setOperacion] = useState<string | null>(null);
  const [valorAnterior, setValorAnterior] = useState<number | null>(null);
  const [historial, setHistorial] = useState<string[]>([]);

  const manejarEntrada = (numero: string) => {
    setInput(input === '0' ? numero : input + numero);
  };

  const realizarOperacion = (op: string) => {
    const valorActual = parseFloat(input);
    if (operacion && valorAnterior !== null) {
      try {
        let resultado = 0;
        switch (operacion) {
          case '+': resultado = sumar(valorAnterior, valorActual); break;
          case '-': resultado = restar(valorAnterior, valorActual); break;
          case '*': resultado = multiplicar(valorAnterior, valorActual); break;
          case '/': resultado = dividir(valorAnterior, valorActual); break;
          case '√': resultado = raizCuadrada(valorAnterior); break;
          case '^': resultado = potencia(valorAnterior, valorActual); break;
        }
        setHistorial([...historial, `${valorAnterior} ${operacion} ${valorActual} = ${resultado}`]);
        setInput(String(resultado));
        setValorAnterior(null);
        setOperacion(null);
      } catch (error) {
        Alert.alert("Error: " + error);
      }
    } else {
      setValorAnterior(valorActual);
      setInput('0');
      setOperacion(op);
    }
  };

  const limpiar = () => {
    setInput('0');
    setValorAnterior(null);
    setOperacion(null);
    // setHistorial([]);  // Borrar el historial también
  };

  return (
    <View style={styles.contenedor}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={require("./assets/logoITSQMET.png")} style={{ width: 300, height: 100 }} />
      </View>
      <DisplayResultado valor={input} historial={historial} />
      <View style={styles.filaBotones}>
        <BotonOperacion titulo="C" color="#14103d" onPress={limpiar} />
        <BotonOperacion titulo="√" color="#004aad" onPress={() => realizarOperacion('√')} />
        <BotonOperacion titulo="^" color="#004aad" onPress={() => realizarOperacion('^')} />
      </View>
      <View style={styles.filaBotones}>
        {[7, 8, 9].map(num => (
          <BotonOperacion key={num} titulo={String(num)} color="#ccc" onPress={() => manejarEntrada(String(num))} />
        ))}
        <BotonOperacion titulo="/" color="#00aaff" onPress={() => realizarOperacion('/')} />
      </View>
      <View style={styles.filaBotones}>
        {[4, 5, 6].map(num => (
          <BotonOperacion key={num} titulo={String(num)} color="#ccc" onPress={() => manejarEntrada(String(num))} />
        ))}
        <BotonOperacion titulo="*" color="#00aaff" onPress={() => realizarOperacion('*')} />
      </View>
      <View style={styles.filaBotones}>
        {[1, 2, 3].map(num => (
          <BotonOperacion key={num} titulo={String(num)} color="#ccc" onPress={() => manejarEntrada(String(num))} />
        ))}
        <BotonOperacion titulo="-" color="#00aaff" onPress={() => realizarOperacion('-')} />
      </View>
      <View style={styles.filaBotones}>
        <BotonOperacion titulo="0" color="#ccc" onPress={() => manejarEntrada('0')} />
        <BotonOperacion titulo="." color="#ccc" onPress={() => manejarEntrada('.')} />
        <BotonOperacion titulo="=" color="#004aad" onPress={() => realizarOperacion(operacion ?? '+')} />
        <BotonOperacion titulo="+" color="#00aaff" onPress={() => realizarOperacion('+')} />
      </View>
      <Text style={{ position: "absolute", textAlign:"right", bottom: 10, right: 10, color: "#14103d" }}>
        By: Diego Rogel{"\n"}v 1.1.0
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  filaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default CalculadoraScreen;
