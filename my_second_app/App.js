
import React, { useEffect, useState } from 'react';
import W1 from './W1';
import W3 from './W3';
import W1second from './W1second';
import W1third from './W1third';
import styles from './styles';
import chart from './chart';
import W3table from './W3table';
import W3Table2 from './W3Table2';
import W3podsumowanie from './W3podsumowanie';
import W3podsumowanie2 from './W3podsumowanie2';
import W3chart from './W3chart';
import W2 from './W2';
import W2zdjęcie from './W2zdjęcie';
import W2tolerancje from './W2tolerancje';
import W2table from './W2table';
import W2podsumowanie from './W2podsumowanie';
import W2table2 from './W2table2';
import W2podsumowanie2 from './W2podsumowanie2';
import W2table3 from './W2table3';
import W2chart from './W2chart';
import W4 from './W4';
import W4table from './W4table';
import W4podsumowanie from './W4podsumowanie';

import {
  PermissionsAndroid,
  BackHandler,
  NativeModules,
  Alert,
  Platform,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  TextInput,
  View,
  TouchableHighlight,
  
  
  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { shouldUseActivityState } from 'react-native-screens';



/////////////////////////////////////////////////
  function HomeScreen({ navigation }) {

  return (
    
  
    <View style={styles.container}>
      <View style={styles.container0}>
        <Image
         source={require('./img/logoPK.png')}
         style={styles.pkimagemain}/>
      </View>
   
      <TouchableHighlight style={styles.viewbox} onPress={()=>navigation.navigate('W1')} underlayColor="white">
      
    
        <Text style={styles.textw}>
      W1 - TOCZENIE I WYTACZANIE

      </Text>
          
      
      </TouchableHighlight>
      
      <TouchableHighlight style={styles.viewbox} onPress={()=>navigation.navigate('W2')} underlayColor="white">
      <Text style={styles.textw}>
        W2 - WIERCENIE, ROZWIERCANIE I POGŁĘBIANIE
      </Text>
         </TouchableHighlight>
     
      
      
      
      <TouchableHighlight style={styles.viewbox} onPress={()=>navigation.navigate('W3')} underlayColor="white">
     <Text style={styles.textw}>
      W3 - FREZOWANIE

     </Text>

          </TouchableHighlight>
      
      
      <TouchableHighlight style={styles.viewbox} onPress={()=>navigation.navigate('W4')} underlayColor="white">
      <Text style={styles.textw}>
        W4 - OBRÓBKA UZĘBIEŃ I UZWOJEŃ
      </Text>
          </TouchableHighlight>
      
      
      
     
    
    </View>
    
  );
};






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="E-student" component={HomeScreen} />
        <Stack.Screen name="chart" component={chart} />
        <Stack.Screen name="W2" component={W2} />
        <Stack.Screen name="W1" component={W1} />
        <Stack.Screen name="W3" component={W3} />
        <Stack.Screen name="W1third" component={W1third} />
        <Stack.Screen name="W4" component={W4} />
        <Stack.Screen name="W1second" component={W1second} />
        <Stack.Screen name="W3table" component={W3table} />
        <Stack.Screen name="W3Table2" component={W3Table2} />
        <Stack.Screen name="W3podsumowanie" component={W3podsumowanie} />
        <Stack.Screen name="W3podsumowanie2" component={W3podsumowanie2} />
        <Stack.Screen name="W3chart" component={W3chart} />
        <Stack.Screen name="W2zdjęcie" component={W2zdjęcie} />
        <Stack.Screen name="W2tolerancje" component={W2tolerancje} />
        <Stack.Screen name="W2table" component={W2table} />
        <Stack.Screen name="W2podsumowanie" component={W2podsumowanie} />
        <Stack.Screen name="W2table2" component={W2table2} />
        <Stack.Screen name="W2podsumowanie2" component={W2podsumowanie2} />
        <Stack.Screen name="W2table3" component={W2table3} />
        <Stack.Screen name="W2chart" component={W2chart} />
        <Stack.Screen name="W4table" component={W4table} />
        <Stack.Screen name="W4podsumowanie" component={W4podsumowanie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// 5359