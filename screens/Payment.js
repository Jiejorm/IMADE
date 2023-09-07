import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Payments = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Implement payment logic here
    // You would typically connect to a payment gateway or process the payment
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your credit Card information to pay</Text>

      <View style={styles.inputContainer}>
        <Text>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          value={expiryDate}
          onChangeText={(text) => setExpiryDate(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="123"
          value={cvv}
          onChangeText={(text) => setCVV(text)}
        />
      </View>

      <TouchableOpacity style={styles.payButton} 
       onPress={() => navigation.navigate("SuccessScreen")}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  payButton: {
    backgroundColor: '#FFD600',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Payments;
