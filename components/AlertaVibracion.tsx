import { Alert, Vibration } from 'react-native';

export const useAlertaConVibracion = () => {
  const mostrarAlertaConVibracion = (mensaje: string) => {
    Vibration.vibrate();
    Alert.alert('Error', mensaje);
  };

  return mostrarAlertaConVibracion;
};
