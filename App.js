import * as React from 'react';

import { StyleSheet, StatusBar } from 'react-native'
import { RootNavigation } from './src/navigation/RootNavigation'
import { NativeBaseProvider, Text, Box } from "native-base";

const App = () => {
  return (<>
   <NativeBaseProvider>
   <StatusBar
      backgroundColor="royalblue"
      barStyle="light-content"
/>
    <RootNavigation />
    </NativeBaseProvider>
  </>
  )
}
export default App

const styles = StyleSheet.create({})







