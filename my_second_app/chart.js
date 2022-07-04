import React, { useEffect, useState } from 'react';
import styles from './styles'
import W1second from './W1second';
import { przeslanazmienna } from './W1second';
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

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { State } from 'react-native-gesture-handler';
  const chart = function chart({ navigation }) {
   
    
      

    const[state,setState]=useState({[0]:0,[1]:0,[2]:0,[3]:0,[4]:0,[5]:0,[6]:0,[7]:0,
    [8]:0,[9]:0,[10]:0,[11]:0,[12]:0,[13]:0,[14]:0,[15]:0,
    [16]:0,
    [17]:0,
    [18]:0,
    [19]:0,
    [20]:0
    })
  
    
    
   const[isLoading,setisLoading]=useState(false);


  
 
    const loaddane = async () =>{
      
      
        try{
          
         setisLoading(false);
          
          let zmienne = {};
    
    
          zmienne[0] = await AsyncStorage.getItem("Myvc1")
          zmienne[1] = await AsyncStorage.getItem("Myvc2")
          zmienne[2] = await AsyncStorage.getItem("Myvc3")
          zmienne[3] = await AsyncStorage.getItem("Myvc4")
          zmienne[4] = await AsyncStorage.getItem("Myvc5")
 
    
          zmienne[5] = await AsyncStorage.getItem("Myre1")
          zmienne[6] = await AsyncStorage.getItem("Myre2")
          zmienne[7] = await AsyncStorage.getItem("Myre3")
          zmienne[8] = await AsyncStorage.getItem("Myre4")
          zmienne[9] = await AsyncStorage.getItem("Myre5")
          zmienne[10] = await AsyncStorage.getItem("Myre6")
          zmienne[11] = await AsyncStorage.getItem("Myre7")
          zmienne[12] = await AsyncStorage.getItem("Myre8")

       
    
          zmienne[13] = await AsyncStorage.getItem("Myra1")
          zmienne[14] = await AsyncStorage.getItem("Myra2")
          zmienne[15] = await AsyncStorage.getItem("Myra3")
          zmienne[16] = await AsyncStorage.getItem("Myra4")
          zmienne[17] = await AsyncStorage.getItem("Myra5")


          zmienne[18] = await AsyncStorage.getItem("Myra6")
          zmienne[19] = await AsyncStorage.getItem("Myra7")
          zmienne[20] = await AsyncStorage.getItem("Myra8")

          

         
         
     
            ////////////////////
        
                //////////////////////////
               let stan = 'falsz';
                
                for(let i=0;i<=20;i++)
                {
                //  alert("dziala")
                if(zmienne[i] !==null){
                stan='prawda';
                //
                }
                 // setState(state.vc1=zmienne.vc1)
                }
                if(stan=='prawda')
                {
               
                      setState(previousState =>{
                        return {...previousState,
                          [0]:zmienne[0],
                          
                          [1]:zmienne[1],
                          
                          [2]:zmienne[2],
                          [3]:zmienne[3],
                          [4]:zmienne[4],
                          [5]:zmienne[5],
                          [6]:zmienne[6],
                          [7]:zmienne[7],
                          [8]:zmienne[8],
                          [9]:zmienne[9],
                          
                          [10]:zmienne[10],
                          
                          [11]:zmienne[11],
                          [12]:zmienne[12],
                          
                          [13]:zmienne[13],
                          [14]:zmienne[14],
                          
                          [15]:zmienne[15],

                           
                          [16]:zmienne[16],
                          [17]:zmienne[17],//nie moze byc 4 ?
                          [18]:zmienne[18],//nie moze byc 4 ?
                          [19]:zmienne[19],
                          [20]:zmienne[20]
                        }
                      })
                      /*
                      setState(previousState=>{
                        return{...previousState,
                          [17]:zmienne[17],
                          [18]:zmienne[18],
                          
                          [19]:zmienne[19],
                           
                          [20]:zmienne[20]
                        

                        }

                      })
                      */
                          /*
                          [17]:4,
                          
                          [18]:4,
                         
                          [19]:4,
                          
                          [20]:4
                           
                          /*
                          vc2:zmienne.vc2,
                          vc3:zmienne.vc3,
                          vc4:zmienne.vc4,
                          vc5:zmienne.vc5,

                          re1:zmienne.re1,
                          re2:zmienne.re2,
                          re3:zmienne.re3,
                          re4:zmienne.re4,
                          re5:zmienne.re5,
                          re6:zmienne.re6,
                          re7:zmienne.re7,
                          re8:zmienne.re8,
                          
                          ra1:zmienne.ra1,
                          ra2:zmienne.ra2,
                          ra3:zmienne.ra3,
                          ra4:zmienne.ra4,
                          ra5:zmienne.ra5,
                          ra6:zmienne.ra6,
                          ra7:zmienne.ra7,
                          ra8:zmienne.ra8,
                              */
                     
                      setisLoading(true)
                    }
                    else
                    {

                    alert("cos nie dziala")
                    }

             
                    
                   

                   
              
               
               
        }
        catch(err){
          alert(err)
         
    
    
        }
      
      }
      useEffect(()=>{
       
        
        
        
    // loaddane();
     setisLoading(true);
     
      },[])


    const chartConfig = {
      
        backgroundGradientFrom: "#073004",
       backgroundGradientFromOpacity: 0.4,
       backgroundGradientTo: "#b6ebb2",
     backgroundGradientToOpacity: 5,
        color: (opacity = 123) => '#0b8701',
        labelColor: (opacity = 1) => '#000000',
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.1,
        fillShadowGradient:"#041354",
        fillShadowGradientOpacity:0.8,
      //  fillShadowGradientTo:"#000000",
        useShadowColorFromDataset:true,
        
        useShadowColorFromDataset: false, // optional
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "3",
          strokeWidth: "2",
          stroke: "#053602"
        }
      };
      //https://stackoverflow.com/questions/60485319/how-to-resolve-error-while-updating-property-d-of-a-view-managed-byrnsvgpath


   
    
  
  
      
     
      
  
   if(isLoading==true){

    const data = {
      labels: [(state[0]), (state[1]), (state[2]),(state[3]),(state[4])],
   
      datasets: [
        {
          data: [(state[13]),(state[14]),(state[15]),(state[16]),(state[17])],
        
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Ra w funkcji posuwu f"] // optional
    };
    const data1 = {
     labels: [(state[12]), (state[11]), (state[10])],
    
      datasets: [
        {
          data: [(state[20]),(state[19]),(state[18])],
          
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Ra w funkcji promienia naroża re"] // optional
    };




    return (
    
    
      <ScrollView>
          
     <View>
      <Button
        title="Wczytaj dane do wykresu"
        onPress={loaddane}
      ></Button>
    
     <LineChart


     
  data={data}
  width={screenWidth}
  height={400}

  chartConfig={chartConfig}

/>
<LineChart


     
data={data1}
width={screenWidth}
height={400}

chartConfig={chartConfig}

/>

</View>
      </ScrollView>
    );
}
else{

  return(
    <View style={styles.container}>
    <View style={styles.container0}>
      <Image
       source={require('./img/logoPK.png')}
       style={styles.pkimagemain}/>
    </View>
    </View>

  )
}
}

  

  export default chart