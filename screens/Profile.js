import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={100} source={require('../assets/icons/user.png')} />
        <Text style={styles.userName}>Collins Kwadwo</Text>
        <Text style={styles.userEmail}>cooljoe@gmail.com</Text>
      </View>
  <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Account Verification</Title>
          <Paragraph>
            Upload your proof of identification and proof of residence
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('EditProfile')}>
            Verify your account
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Premium Package</Title>
          <Paragraph>
            Get one of our premium offers and enjoy our loyalty program
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('OrderHistory')}>
            Get Premium 
          </Button>
        </Card.Actions>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Referrals</Title>
          <Paragraph>
            Refer your friends and family and get a discount
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('Copy referral link')}>
            Copy referral link
          </Button>
        </Card.Actions>
      </Card>
      
    

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 46,
    backgroundColor: '#fffff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  card: {
    marginBottom: 20,
    length: 100,
    height: 140,
   
  },
  logoutButton: {
    backgroundColor: '#FFD600',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Account;
