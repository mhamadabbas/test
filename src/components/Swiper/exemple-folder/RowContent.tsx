import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RowContentStyle = StyleSheet.create({
  rowContent: {
    height: 80,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

const RowContent = () => {
  return (
    <View>
      <Text style={RowContentStyle.rowContent}>
        Here is a Text to check if it's working
      </Text>
    </View>
  );
};

export default RowContent;
