/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const UserProfile = ({ user, isDarkMode }) => {
  const { name, gender, picture, phone } = user;
  return (
    <View style={[
      styles.card,
      {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      },
    ]}>
      {/** A user profile that displays user image, name and country */}
      <View style={styles.row}>
        <Image source={{ uri: picture.thumbnail }} style={styles.image} />
        <View style={styles.column}>
          <Text style={[
            styles.title,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>{name.first} {name.last}</Text>
          <Text style={[
            styles.subtitle,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>{gender}</Text>
          <Text style={[
            styles.subtitle,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>{phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  column: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});
