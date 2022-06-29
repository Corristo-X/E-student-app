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
  const W2chart = function W2chart({ navigation }) {
   
    
      

    
  
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
    const[re9,setre9]=useState();
    const[re10,setre10]=useState();
    const[re11,setre11]=useState();
    const[re12,setre12]=useState();
  
    const[ra1,setra1]=useState();
    const[ra2,setra2]=useState();
    const[ra3,setra3]=useState();
    const[ra4,setra4]=useState();
    const[ra5,setra5]=useState();
    const[ra6,setra6]=useState();
    const[ra7,setra7]=useState();
    const[ra8,setra8]=useState();
    const[ra9,setra9]=useState();
    const[ra10,setra10]=useState();
    const[ra11,setra11]=useState();
    const[ra12,setra12]=useState();
    const[ra13,setra13]=useState();
    const[ra14,setra14]=useState();
    const[ra15,setra15]=useState();
    const[ra16,setra16]=useState();
    const[ra17,setra17]=useState();
    const[ra18,setra18]=useState();
    const[ra19,setra19]=useState();
    const[ra20,setra20]=useState();
    const[ra21,setra21]=useState();
    const[ra22,setra22]=useState();
    const[ra23,setra23]=useState();
    const[ra24,setra24]=useState();

    
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
    
            //Vc
          zmienne.vc1 = await AsyncStorage.getItem("W2n1.2")
          zmienne.vc2 = await AsyncStorage.getItem("W2n2.2")
          zmienne.vc3 = await AsyncStorage.getItem("W2n3.2")
          zmienne.vc4 = await AsyncStorage.getItem("W2re1.2")
          
 
            //vf
          zmienne.re1 = await AsyncStorage.getItem("W2re2.2")
          zmienne.re2 = await AsyncStorage.getItem("W2re3.2")
          zmienne.re3 = await AsyncStorage.getItem("W2ra1.2")
          zmienne.re4 = await AsyncStorage.getItem("W2ra2.2")

          //Ra frezowanie na sucho

          zmienne.re5 = await AsyncStorage.getItem("W2ra3.2")
          zmienne.re6 = await AsyncStorage.getItem("W2re1.3")
          zmienne.re7 = await AsyncStorage.getItem("W2re2.3")
          zmienne.re8 = await AsyncStorage.getItem("W2re3.3")
          zmienne.re9 = await AsyncStorage.getItem("W2re4.3")
          zmienne.re10 = await AsyncStorage.getItem("W2re5.3")
          zmienne.re11= await AsyncStorage.getItem("W2re6.3")
          zmienne.re12 = await AsyncStorage.getItem("W2ra1.3")

            // Ra frezowanie z chłodzeniem
    
          zmienne.ra1 = await AsyncStorage.getItem("W2ra2.3")
          zmienne.ra2 = await AsyncStorage.getItem("W2ra3.3")
          zmienne.ra3 = await AsyncStorage.getItem("W2ra4.3")
          zmienne.ra4 = await AsyncStorage.getItem("W2ra5.3")
          zmienne.ra5 = await AsyncStorage.getItem("W2ra6.3")
          zmienne.ra6 = await AsyncStorage.getItem("W2vc4.3")
          zmienne.ra7 = await AsyncStorage.getItem("W2vc5.3")
          zmienne.ra8 = await AsyncStorage.getItem("W2vc6.3")

          // Tabela 2 vc
          zmienne.ra9 = await AsyncStorage.getItem("W32dxl1")
          zmienne.ra10 = await AsyncStorage.getItem("W32dxl2")
          zmienne.ra11 = await AsyncStorage.getItem("W32dxl3")
          zmienne.ra12 = await AsyncStorage.getItem("W32dxl4")
          
        // vf
        zmienne.ra13 = await AsyncStorage.getItem("W32n5")
        zmienne.ra14 = await AsyncStorage.getItem("W32n6")
        zmienne.ra15 = await AsyncStorage.getItem("W32n7")
        zmienne.ra16 = await AsyncStorage.getItem("W32n8")

        // Ra

        zmienne.ra17 = await AsyncStorage.getItem("W32re1")
        zmienne.ra18 = await AsyncStorage.getItem("W32re2")
        zmienne.ra19 = await AsyncStorage.getItem("W32re3")
        zmienne.ra20 = await AsyncStorage.getItem("W32re4")
        zmienne.ra21 = await AsyncStorage.getItem("W32re5")
        zmienne.ra22 = await AsyncStorage.getItem("W32re6")
        zmienne.ra23 = await AsyncStorage.getItem("W32re7")
        zmienne.ra24 = await AsyncStorage.getItem("W32re8")
    
     
            ////////////////////
        
                //////////////////////////
    
                if(zmienne.vc1 !==null){
                  setvc1(zmienne.vc1)
                 
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
                    if(zmienne.re9 !==null){
                        setre9(zmienne.re9)
                       
                        }
                        if(zmienne.re10 !==null){
                            setre10(zmienne.re10)
                           
                            } if(zmienne.re11 !==null){
                                setre11(zmienne.re11)
                               
                                } if(zmienne.re12 !==null){
                                    setre12(zmienne.re12)
                                   
                                    }

                    
                    ////////////////////////
    
                    if(zmienne.ra1 !==null){
                      
                      setra1(zmienne.ra1)
                     
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
                      if(zmienne.ra8 !==null){
                        setra8(zmienne.ra8)
                        
                        }
                        if(zmienne.ra8 !==null){  setra8(zmienne.ra8) }
                        if(zmienne.ra9 !==null){  setra9(zmienne.ra9) }
                        if(zmienne.ra10 !==null){  setra10(zmienne.ra10) }
                        if(zmienne.ra11 !==null){  setra11(zmienne.ra11) }
                        if(zmienne.ra12 !==null){  setra12(zmienne.ra12) }
                        if(zmienne.ra13 !==null){  setra13(zmienne.ra13) }
                        if(zmienne.ra14 !==null){  setra14(zmienne.ra14) }
                        if(zmienne.ra15 !==null){  setra15(zmienne.ra15) }
                        if(zmienne.ra16 !==null){  setra16(zmienne.ra16) }
                        if(zmienne.ra17 !==null){  setra17(zmienne.ra17) }
                        if(zmienne.ra18 !==null){  setra18(zmienne.ra18) }
                        if(zmienne.ra19 !==null){  setra19(zmienne.ra19) }
                        if(zmienne.ra20 !==null){  setra20(zmienne.ra20) }
                        if(zmienne.ra21 !==null){  setra21(zmienne.ra21) }
                        if(zmienne.ra22 !==null){  setra22(zmienne.ra22) }
                        if(zmienne.ra23 !==null){  setra23(zmienne.ra23) }
                        if(zmienne.ra24 !==null){  setra24(zmienne.ra24) }

                   

                     
       
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
   
        color: (opacity = 5) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        fillShadowGradientOpacity: true,
        
        
        useShadowColorFromDataset: false // optional
      };
      //https://stackoverflow.com/questions/60485319/how-to-resolve-error-while-updating-property-d-of-a-view-managed-byrnsvgpath

      const graphStyle = {
        color: "orange"

      };
   
      const chartConfig2 = {
       
        color: (opacity = 0) => `rgba(11, 255, 22, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        fillShadowGradientOpacity: false,
        strokeWidth:15,
        
        useShadowColorFromDataset: false // optional
      };
  
  
      

  
   if(isLoading==true){

    const data = {
      labels: [JSON.parse(vc1), JSON.parse(vc2), JSON.parse(vc3)],
      datasets: [
        {
          data: [JSON.parse(vc4)-19,JSON.parse(re1)-19,JSON.parse(re2)-19],
          color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`, // optional
          strokeWidth: 2 ,// optional
          
        }
        
      
      ],
      
    };
    //////////////////////////////////////////

    const data1 = {
      labels: [JSON.parse(vc1), JSON.parse(vc2), JSON.parse(vc3)],
      datasets: [
        {
          data: [JSON.parse(vc4-re3), JSON.parse(re1-re4), JSON.parse(re2-re5)],
         
          color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
     
      ],
      
      legend: ["Ra = f(vf) - Frezowanie na sucho"] // optional
    };
    const data2 = {
        labels: [JSON.parse(vc1), JSON.parse(vc2), JSON.parse(vc3)],
        datasets: [
          {
            data: [JSON.parse(re6-19),JSON.parse(re7-19),JSON.parse(re8-19)],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          {
            data: [JSON.parse(re6-re12),JSON.parse(re7-ra1),JSON.parse(re8-ra2)],
            color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional

          }
        ],
        legend: ["Δd(biały) ΔK(różowy)"],
        
      };
      const data3 = {
        labels: [JSON.parse(ra6), JSON.parse(ra7), JSON.parse(ra8)],
        datasets: [
          {
            data: [JSON.parse(re9-19),JSON.parse(re10-19),JSON.parse(re11-19)],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          {
            data: [JSON.parse(re9-ra3),JSON.parse(re10-ra4),JSON.parse(re11-ra5)],
            color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional

          }
        ],
        legend: ["Δd(biały) ΔK(różowy)"],
        
      };



    return (
      
    
      <ScrollView>
          
     <View>
      
     
     <BarChart
  style={graphStyle}
  data={data}
  width={screenWidth}
  height={400}
  yAxisLabel="[Δd] "
  xAxisLabel=" [vc]"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>
<BarChart
  style={graphStyle}
  data={data1}
  width={screenWidth}
  height={400}
  yAxisLabel="[ΔK] "
  xAxisLabel=" [vc]"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>  
<LineChart


     
data={data2}
width={screenWidth}
height={400}
xAxisLabel=" [vc]"
chartConfig={chartConfig2}


/>
<LineChart


     
data={data3}
width={screenWidth}
height={400}
xAxisLabel=" [vc]"
chartConfig={chartConfig2}


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

  

  export default W2chart