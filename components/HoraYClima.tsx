import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const HoraYClima = () => {
  const [ubicacion, setUbicacion] = useState<{ latitud: number | null, longitud: number | null }>({
    latitud: null,
    longitud: null,
  });
  const [temperatura, setTemperatura] = useState('');
  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const obtenerUbicacion = () => {
      Geolocation.getCurrentPosition(
        (posicion) => {
          const { latitude, longitude } = posicion.coords;
          setUbicacion({ latitud: latitude, longitud: longitude });
        },
        (error) => {
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    const obtenerClima = async () => {
      if (ubicacion.latitud && ubicacion.longitud) {
        const respuesta = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${ubicacion.latitud}&lon=${ubicacion.longitud}&appid=YOUR_API_KEY&units=metric`
        );
        setTemperatura(respuesta.data.main.temp);
      }
    };

    const actualizarHoraActual = () => {
      setInterval(() => {
        setHoraActual(new Date().toLocaleTimeString());
      }, 1000);
    };

    obtenerUbicacion();
    actualizarHoraActual();
    obtenerClima();
  }, [ubicacion]);

  return (
    <View>
      <Text>Hora Actual: {horaActual}</Text>
      <Text>Temperatura Actual: {temperatura ? `${temperatura}°C` : 'Cargando...'}</Text>
    </View>
  );
};

export default HoraYClima;
