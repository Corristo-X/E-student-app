import styles from './styles';
import React, { useEffect, useState } from 'react';
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
            <TouchableHighlight style={styles.viewbox} onPress={()=>navigation.navigate('AppNotes')} underlayColor="white">
        <Text style={styles.textw}>
          W0 - NOTATKI DO ZAJEĆ
        </Text>
            </TouchableHighlight>
         
        
       
      
      </View>
      
    );
  };
  export default HomeScreen;