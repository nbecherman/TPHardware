import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfiguracionEmergencia = () => {
  const [numeroTelefono, setNumeroTelefono] = useState('');

  useEffect(() => {
    const obtenerNumeroGuardado = async () => {
      const numeroGuardado = await AsyncStorage.getItem('numeroEmergencia');
      if (numeroGuardado) {
        setNumeroTelefono(numeroGuardado);
      }
    };
    obtenerNumeroGuardado();
  }, []);

  const guardarNumeroTelefono = async () => {
    await AsyncStorage.setItem('numeroEmergencia', numeroTelefono);
    alert('Número de emergencia guardado');
  };

  return (
    <View>
      <Text>Configura tu número de emergencia:</Text>
      <TextInput
        value={numeroTelefono}
        onChangeText={setNumeroTelefono}
        placeholder="Número de emergencia"
        keyboardType="phone-pad"
      />
      <Button title="Guardar" onPress={guardarNumeroTelefono} />
    </View>
  );
};

export default ConfiguracionEmergencia;
