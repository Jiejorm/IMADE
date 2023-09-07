import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const SuccessScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/success.png')} // Add your success image asset
        style={styles.successImage}
      />
      <Text style={styles.header}>Success!</Text>
      <Text style={styles.message}>Your order has been placed successfully.</Text>
   


<TouchableOpacity style={styles.payButton} 
onPress={() => navigation.navigate("Home")}>
 <Text style={styles.payButtonText}>Back To Home</Text>
</TouchableOpacity>
</View>
  );
 
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  successImage: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#FFD600',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SuccessScreen;
