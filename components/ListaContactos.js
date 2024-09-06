import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, PermissionsAndroid, Alert } from 'react-native';
import Contacts from 'react-native-contacts';

const ListaContactos = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const obtenerContactos = async () => {
      const permiso = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      );
      if (permiso === PermissionsAndroid.RESULTS.GRANTED) {
        Contacts.getAll().then(setContactos);
      } else {
        Alert.alert('Permiso denegado para leer contactos');
      }
    };
    obtenerContactos();
  }, []);

  return (
    <FlatList
      data={contactos}
      keyExtractor={(item) => item.recordID}
      renderItem={({ item }) => (
        <View>
          <Text>{`${item.givenName} ${item.familyName}`}</Text>
          <Text>{item.phoneNumbers[0]?.number}</Text>
        </View>
      )}
    />
  );
};

export default ListaContactos;
