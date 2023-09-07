import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Button } from 'react-native-paper';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    { id: '1', name: 'Michael Halm' },
    { id: '2', name: 'Clarissa Esinam' },
    { id: '3', name: 'Roselyn Mawuena' },
    // Add more favorite items here
  ]);

  const removeFavorite = (itemId) => {
    // Implement logic to remove the item from favorites
    const updatedFavorites = favorites.filter((item) => item.id !== itemId);
    setFavorites(updatedFavorites);
  };

  const renderFavoriteItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text>{item.name}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => removeFavorite(item.id)}>Remove</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      {favorites.length === 0 ? (
        <Text>No favorites added yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderFavoriteItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 56,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginBottom: 26,
    backgroundColor:'#FFD600'
    
  },
 
});

export default Favorites;
