import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,Image } from 'react-native';

const GetStartedPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/GS.jpg')} // Add the path to your background image
      style={styles.backgroundImage}
    >
      
   
      <View style={styles.container}>
      <Text style={styles.header}>I-MADE TRADES</Text>
      <Image
        source={require('../assets/icons/logo-icon.png')} // Add your success image asset
        style={styles.successImage}
      
      />
      
     
        
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for different image fitting modes
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background to make text readable
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD600',
    marginBottom: 10,
    
  },
  subHeader: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#FFD600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    padding: 70,
  },
  getStartedButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successImage: {
    width: 100,
    height: 100,
    marginBottom: 500,
    paddingLeft:50,
    justifyContent: 'center',
  },
});

export default GetStartedPage;
