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
   
    
      

    
  
    const[vc1,setvc1]=useState();
    const[vc2,setvc2]=useState();
    const[vc3,setvc3]=useState();
    const[vc4,setvc4]=useState();
    const[vc5,setvc5]=useState();

    
    const[re1,setre1]=useState();
    const[re2,setre2]=useState();
    const[re3,setre3]=useState();
    const[re4,setre4]=useState();
    const[re5,setre5]=useState();
    const[re6,setre6]=useState();
    const[re7,setre7]=useState();
    const[re8,setre8]=useState();
  
    const[ra1,setra1]=useState();
    const[ra2,setra2]=useState();
    const[ra3,setra3]=useState();
    const[ra4,setra4]=useState();
    const[ra5,setra5]=useState();
    const[ra6,setra6]=useState();
    const[ra7,setra7]=useState();
    const[ra8,setra8]=useState();

    
    var pi = 3.14;
   const[isLoading,setisLoading]=useState(false);


    const getData = async () => {
      
     
      try {
        
        
        jsonValue = await AsyncStorage.getItem('Myra6')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
      }
      
  }
 
    const loaddane = async () =>{
      
      
        try{
          
         
          
          let zmienne = {};
    
    
          zmienne.vc1 = await AsyncStorage.getItem("Myvc1")
          zmienne.vc2 = await AsyncStorage.getItem("Myvc2")
          zmienne.vc3 = await AsyncStorage.getItem("Myvc3")
          zmienne.vc4 = await AsyncStorage.getItem("Myvc4")
          zmienne.vc5 = await AsyncStorage.getItem("Myvc5")
 
    
          zmienne.re1 = await AsyncStorage.getItem("Myre1")
          zmienne.re2 = await AsyncStorage.getItem("Myre2")
          zmienne.re3 = await AsyncStorage.getItem("Myre3")
          zmienne.re4 = await AsyncStorage.getItem("Myre4")
          zmienne.re5 = await AsyncStorage.getItem("Myre5")
          zmienne.re6 = await AsyncStorage.getItem("Myre6")
          zmienne.re7 = await AsyncStorage.getItem("Myre7")
          zmienne.re8 = await AsyncStorage.getItem("Myre8")

       
    
          zmienne.ra1 = await AsyncStorage.getItem("Myra1")
          zmienne.ra2 = await AsyncStorage.getItem("Myra2")
          zmienne.ra3 = await AsyncStorage.getItem("Myra3")
          zmienne.ra4 = await AsyncStorage.getItem("Myra4")
          zmienne.ra5 = await AsyncStorage.getItem("Myra5")


          zmienne.ra6 = await AsyncStorage.getItem("Myra6")
          zmienne.ra7 = await AsyncStorage.getItem("Myra7")
          zmienne.ra8 = await AsyncStorage.getItem("Myra8")

          

       
    
     
            ////////////////////
        
                //////////////////////////
    
                if(zmienne.vc1 !==null){
                  setvc1(JSON.parse(zmienne.vc1))
                 
                }
                if(zmienne.vc2 !==null){
                    setvc2(zmienne.vc2)
                   
                }
                if(zmienne.vc3 !==null){
                  setvc3(zmienne.vc3)
                 
                 }
                  if(zmienne.vc4 !==null){
                setvc4(zmienne.vc4)
               
                }
                  if(zmienne.vc5 !==null){
                setvc5(zmienne.vc5)
                
                }
            
    
                  /////////////////////////////
    
                  if(zmienne.re1 !==null){
                    setre1(zmienne.re1)
                  }
                  if(zmienne.re2 !==null){
                      setre2(zmienne.re2)
                  }
                  if(zmienne.re3 !==null){
                    setre3(zmienne.re3)
                   }
                    if(zmienne.re4 !==null){
                  setre4(zmienne.re4)
                  }
                    if(zmienne.re5 !==null){
                  setre5(zmienne.re5)
                  }
                  if(zmienne.re6 !==null){
                   setre6(zmienne.re6)
                  
                  }
                  if(zmienne.re7 !==null){
                    setre7(zmienne.re7)
                    
                  }
                    if(zmienne.re8 !==null){
                    setre8(zmienne.re8)
                   
                    }

                    
                    ////////////////////////
    
                    if(zmienne.ra1 !==null){
                      
                      setra1(JSON.parse(zmienne.ra1))
                     
                    }
                    if(zmienne.ra2 !==null){
                        setra2(zmienne.ra2)
                       
                    }
                    if(zmienne.ra3 !==null){
                      setra3(zmienne.ra3)
                     
                     }
                      if(zmienne.ra4 !==null){
                    setra4(zmienne.ra4)
                   
                    }
                      if(zmienne.ra5 !==null){
                    setra5(zmienne.ra5)
                   
                    }
                    if(zmienne.ra6 !==null){
                     setra6(zmienne.ra6)
                    
                    }
                    if(zmienne.ra7 !==null){
                      setra7(zmienne.ra7)
                      
                    }
                      if(zmienne.ra8 !==null){
                      setra8(zmienne.ra8)
                      
                      }

                   

                     
       
        }
        catch(err){
          alert(err)
         
    
    
        }
        setisLoading(true)
      }
      useEffect(()=>{
       
        
        getData();
        
     loaddane();
     setisLoading(false);
     
      },[])


    const chartConfig = {
        backgroundGradientFrom: "#58508d",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#003f5c",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(244, 0, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        
        useShadowColorFromDataset: false // optional
      };
      //https://stackoverflow.com/questions/60485319/how-to-resolve-error-while-updating-property-d-of-a-view-managed-byrnsvgpath


   
    
  
  
      

  
   if(isLoading==true){

    const data = {
      labels: [JSON.parse(vc1), JSON.parse(vc2), JSON.parse(vc3),JSON.parse(vc4),JSON.parse(vc5)],
     
      datasets: [
        {
          data: [JSON.parse(ra1),JSON.parse(ra2),JSON.parse(ra3),JSON.parse(ra4),JSON.parse(ra5)],
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Ra w funkcji posuwu f"] // optional
    };
    const data1 = {
     labels: [JSON.parse(re8), JSON.parse(re7), JSON.parse(re6)],
     
      datasets: [
        {
          data: [JSON.parse(ra8),JSON.parse(ra7),JSON.parse(ra6)],
          
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Ra w funkcji promienia naroża re"] // optional
    };




    return (
      
    
      <ScrollView>
          
     <View>
      
    
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