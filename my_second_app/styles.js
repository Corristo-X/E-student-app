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
const styles = StyleSheet.create({
  wielkosc:{
  
    
  },
  naglowek2:{
    color:"#660e15",
    fontWeight:"bold"
  },
  naglowek:{
     fontSize:20,
     marginLeft:5,
     fontWeight:"bold",
     fontStyle:"italic",
     color:"#d10d1d"

  },
  lista:{
    marginLeft:10,
    marginTop:5,

  },
  border:{
    //borderBottomWidth:2,
    borderWidth:1,
    paddingLeft:3,
    borderRadius:2,
    borderColor:"#121861"
    
   


  },
  buttoncolor:{
    
    color: '#142d8b',
    fontWeight: 'bold',
  
      
  },
  viewboxbutton:{
    width:'30%',
    height:40,
    borderWidth:3,
    borderColor:"black",
    borderRadius:30,
    backgroundColor:"#00ACD1",
    alignItems:'center',
    justifyContent:'center',
  },
  colorblue:{
    backgroundColor:"#afe3eb"
  },
  bold23:{
    color:'green',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20

  },
  wyrownanie:{
    textAlign:'center'
  },
  boldx2:{
    color:'red',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:15

  },
  tabelka:{
    

  },

  mniejszaprzerwa:{
    width:'100%',
    height:10

  },
  przerwa:{
    width:'100%',
    height:50

  },

  borderbutton:{
  

  },
  bold:{
    color:'#003B42',
    fontWeight:'bold',
    textAlign:'center'

  },
  inputW1second:{
    width:'100%',
    height:40,
    borderWidth:1
  },

    textstyle:{
        flexDirection:'row',
        justifyContent:'space-around',
       

    },
    buttonsize:{
      
  
    },
    button:{
      flexDirection:'row',
      justifyContent:'space-around',
     
      
    },
    nazwy:{fontSize:15,
        fontWeight:'bold',
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    input:{
      height:40,
      margin:12,
      borderWidth:1,
      padding:10,
      
                           
    },
    input2:{
      height:40,
      margin:12,
      borderWidth:1,
      padding:10,
      marginRight:60
    },
    W1:{
      width:'100%',
      height:'100%'
  },
    
   textw:{
    fontSize:15,
    color: '#142d8b',
    fontWeight: 'bold',
    width:'100%',
    height:'100%',
    textAlign:'center',
    marginTop:35,
    
  
   },
  
    pkimagemain:{
     width:'100%',
     height:'100%',
     resizeMode:"center",
      backgroundColor:"#afe3eb"
    },
    zdjęcie:{
      width:'100%',
      height:'100%',
      backgroundColor:'white'
    },
    szkic:{
      width:'100%',
      height:'100%',
      resizeMode:'center'

    },
    pkimage:{
      width:'80%',
      height:'80%',
      resizeMode:"center",
    },
    viewbox:{
      width:'100%',
      height:'10%',
      borderWidth:3,
      borderColor:"black",
      borderRadius:30,
      backgroundColor:"#00ACD1",
      alignItems:'center',
      justifyContent:'center',
      
      
      
    },
    
    container:{
      width:'100%',
      height:'100%',
      backgroundColor: "#afe3eb",
     // flex:1,
    //  backgroundColor:"dodgerblue",
     justifyContent:'space-evenly',
    },
    container0:{
      width:'100%',
      height:'20%',
     
    },
    container1:{
      width:'100%',
      height:'40%',
      flexDirection:"row",
      justifyContent:"space-between",
      
      
      
    },
    container2:{
      width:'100%',
      height:'40%',
      flexDirection:"row",
      justifyContent:"space-between",
      
    }
  
  });
  export default styles