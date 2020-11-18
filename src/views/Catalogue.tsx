import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { signOut } from '../store/slices/userSlice';
import { useNavigation } from '@react-navigation/native';

const mapDispatch = { signOut };

const Catalogue = (props: { signOut: () => {} }) => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text> Catalogue </Text>
      <Button title="Profile" onPress={() => navigate('Profile')} />
      <Button title="Deconnection" onPress={() => props.signOut()} />
    </View>
  );
};

export default connect(null, mapDispatch)(Catalogue);
