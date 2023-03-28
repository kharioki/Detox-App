import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import UserProfile from './UserProfile';

const Users = ({ isDarkMode }) => {
  const [users, setUsers] = useState([]);

  // getUsers - from API - randomuser.me
  const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=20');
    const data = await response.json();
    setUsers(data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Users</Text>
      <FlatList
        style={styles.container}
        data={users}
        keyExtractor={item => item.login.uuid}
        renderItem={({ item }) => (
          <UserProfile user={item} isDarkMode={isDarkMode} />
        )}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
