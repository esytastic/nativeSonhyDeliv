import { useNavigation } from '@react-navigation/native'
import React, { Component, useLayoutEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "TEST"
      headerShown: false
    });
  }, []);

  return (

    <SafeAreaView className="flex-row pb-3 items-center space-x-2">
      <Image source={{ uri: 'https://www.lotus-qa.com/wp-content/uploads/2020/02/testing.jpg' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
      <Text className="text-red-300 bg-gray-300">Lorem ipsum dolor sit amet.</Text>
    </SafeAreaView>
  )
}

export default HomeScreen 