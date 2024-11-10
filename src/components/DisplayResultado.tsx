import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  valor: string;
  historial: string[];
};

const DisplayResultado: React.FC<Props> = ({ valor, historial }) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.historial}>
        {historial.map((item, index) => (
          <Text key={index} style={styles.textoHistorial}>{item}</Text>
        ))}
      </View>
      <Text style={styles.resultado}>{valor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f3f3f3',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  historial: {
    marginBottom: 10,
  },
  textoHistorial: {
    color: '#999',
    fontSize: 16,
    textAlign: 'right',
  },
  resultado: {
    fontSize: 32,
    color: '#14103d',
    textAlign: 'right',
  },
});

export default DisplayResultado;
