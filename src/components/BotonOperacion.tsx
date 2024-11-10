import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

type Props = {
  titulo: string;
  color: string;
  onPress: () => void;
};

const BotonOperacion: React.FC<Props> = ({ titulo, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.boton, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.textoBoton}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    padding: 15,
    margin: 5,
    width: Dimensions.get('window').width / 5 - 10, // Ajuste para pantalla
    borderRadius: 8,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BotonOperacion;
