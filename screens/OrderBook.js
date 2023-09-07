import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

const OrderBook = () => {
  const [orders, setOrders] = useState([]);

  // Simulate fetching order data from your backend.
  useEffect(() => {
    // Replace this with actual API calls to retrieve user's order history.
    // For this example, we'll use dummy data.
    const dummyData = [
      {
        id: '1',
        restaurantName: 'Michael Halm',
        orderDate: '2023-09-01',
        totalAmount: 150.0,
      },
      {
        id: '2',
        restaurantName: 'Clarissa Esinam',
        orderDate: '2023-08-25',
        totalAmount: 200.0,
      },
      // Add more orders here
    ];

    setOrders(dummyData);
  }, []);

  const renderOrderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.restaurantName}>{item.restaurantName}</Text>
        <Text>Order Date: {item.orderDate}</Text>
        <Text>Total Amount: ${item.totalAmount.toFixed(2)}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order History</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />
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
    marginBottom: 16,
    backgroundColor:'#FFD600'
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderBook;
