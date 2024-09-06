import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AlertaVibracion from './components/AlertaVibracion.tsx'; 
import ConfiguracionEmergencia from './components/Emergencia'; 
import HoraYClima from './components/HoraYClima.tsx'; 
import ListaContactos from './components/ListaContactos';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HoraYClima">
        <Drawer.Screen name="Alerta Vibracion" component={AlertaVibracion} />
        <Drawer.Screen name="Configuracion Emergencia" component={ConfiguracionEmergencia} />
        <Drawer.Screen name="Hora y Clima" component={HoraYClima} />
        <Drawer.Screen name="Lista de Contactos" component={ListaContactos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
