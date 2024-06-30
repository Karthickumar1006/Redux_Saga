import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { airportDetailsAction } from '../actions/actions';

/**
 * React component for the Home Screen.
 *
 * @param {object} navigation - Navigation object for screen navigation.
 * @return {JSX.Element} Rendered Home Screen component.
 */
const HomeScreen = ({ navigation }) => {

  
  const dispatch = useDispatch();
  const data = useSelector((state) => state.airData.info);
  const loading = useSelector((state) => state.airData.loading);
  const error = useSelector((state) => state.airData.error);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Get Airport Details"
          onPress={() => {
            dispatch(airportDetailsAction())
          }}
        />
        {/* <Text>{JSON.stringify(data)}</Text> */}
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
