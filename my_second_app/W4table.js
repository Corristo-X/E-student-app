import React, { useEffect, useState } from 'react';
import styles from './styles'
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
import { tsModuleBlock } from '@babel/types';



const W4table = function W4table({ navigation }) {

 
   
  
 
  const [dxl1,setdxl1]=useState();
  const [dxl2,setdxl2]=useState();
 const [dxl3,setdxl3]=useState();
  const [dxl4,setdxl4]=useState();
  const [dxl5,setdxl5]=useState();
  const [dxl6,setdxl6]=useState();
  const [dxl7,setdxl7]=useState();
  const [dxl8,setdxl8]=useState();
  
  const[n1,setn1]=useState();
  const[n2,setn2]=useState();
  const[n3,setn3]=useState();
  const[n4,setn4]=useState();
  const[n5,setn5]=useState();
  const[n6,setn6]=useState();
  const[n7,setn7]=useState();
  const[n8,setn8]=useState();

  const[vc1,setvc1]=useState();
  const[vc2,setvc2]=useState();
  const[vc3,setvc3]=useState();
  const[vc4,setvc4]=useState();
  const[vc5,setvc5]=useState();
  const[vc6,setvc6]=useState();
  const[vc7,setvc7]=useState();
  const[vc8,setvc8]=useState();

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
  const[isLoading,setisLoading]=useState();

 
  const savedane = async()=>{
    try{
          
          await AsyncStorage.setItem("W4dxl1",dxl1);
          await AsyncStorage.setItem("W4dxl2",dxl2);
          await AsyncStorage.setItem("W4dxl3",dxl3);
          await AsyncStorage.setItem("W4dxl4",dxl4);
          await AsyncStorage.setItem("W4dxl5",dxl5);
          
          await AsyncStorage.setItem("W4n1",n1);
          await AsyncStorage.setItem("W4n2",n2);
          await AsyncStorage.setItem("W4n3",n3);
          await AsyncStorage.setItem("W4n4",n4);
          await AsyncStorage.setItem("W4n5",n5);
       

     

    }catch(err)
    {
      alert(err)

    }
      loaddane();
  }
  const loaddane = async () =>{
    try{
      let zmienne = {};
      zmienne.dxl1 = await AsyncStorage.getItem("W4dxl1")
      zmienne.dxl2 = await AsyncStorage.getItem("W4dxl2")
      zmienne.dxl3 = await AsyncStorage.getItem("W4dxl3")
      zmienne.dxl4 = await AsyncStorage.getItem("W4dxl4")
      zmienne.dxl5 = await AsyncStorage.getItem("W4dxl5")


      zmienne.n1 = await AsyncStorage.getItem("W4n1")
      zmienne.n2 = await AsyncStorage.getItem("W4n2")
      zmienne.n3 = await AsyncStorage.getItem("W4n3")
      zmienne.n4 = await AsyncStorage.getItem("W4n4")
      zmienne.n5 = await AsyncStorage.getItem("W4n5")


      if(zmienne.dxl1 !==null){
        setdxl1(zmienne.dxl1)
      }
      if(zmienne.dxl2 !==null){
          setdxl2(zmienne.dxl2)
      }
      if(zmienne.dxl3 !==null){
        setdxl3(zmienne.dxl3)
       }
        if(zmienne.dxl4 !==null){
      setdxl4(zmienne.dxl4)
      }
        if(zmienne.dxl5 !==null){
      setdxl5(zmienne.dxl5)
      }

        ////////////////////
        if(zmienne.n1 !==null){
          setn1(zmienne.n1)
        }
        if(zmienne.n2 !==null){
            setn2(zmienne.n2)
        }
        if(zmienne.n3 !==null){
          setn3(zmienne.n3)
         }
          if(zmienne.n4 !==null){
        setn4(zmienne.n4)
        }
          if(zmienne.n5 !==null){
        setn5(zmienne.n5)
        }
   
            //////////////////////////

       

              /////////////////////////////

                ////////////////////////

           
    }
    catch(err){
      alert(err)


    }
    setisLoading(true);
  }
  const removedane = async()=>{
    
    try{
        await AsyncStorage.removeItem("W4dxl1")
        await AsyncStorage.removeItem("W4dxl2")
        await AsyncStorage.removeItem("W4dxl3")
        await AsyncStorage.removeItem("W4dxl4")
        await AsyncStorage.removeItem("W4dxl5")

        await AsyncStorage.removeItem("W4n1")
        await AsyncStorage.removeItem("W4n2")
        await AsyncStorage.removeItem("W4n3")
        await AsyncStorage.removeItem("W4n4")
        await AsyncStorage.removeItem("W4n5")

       
    }
    catch(err){
        alert(err)

    }
    finally{
        setdxl1("")
        setdxl2("")
        setdxl3("")
        setdxl4("")
        setdxl5("")
   
       ///////////////////////
       setn1("")
       setn2("")
       setn3("")
       setn4("")
       setn5("")
  
    }
    
  }


  useEffect(()=>{
    setisLoading(false);
    loaddane();
    
  },[])
  if(isLoading==true){
    return (
      <ScrollView>
      <View>
          <View ><Text style={styles.boldx2}>Frezowanie obwiedniowe</Text></View>
          <View style={styles.mniejszaprzerwa}></View>
          <View style={styles.textstyle}>
          <View>
            <Text>Wp[mm]</Text>
            <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl1(text)}
        placeholder="W1"
        />
        <Text>{dxl1}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl2(text)}
        placeholder="W2"
        />
        <Text>{dxl2}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl3(text)}
        placeholder="W3"
        />
        <Text>{dxl3}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl4(text)}
        placeholder="W4"
        />
        <Text>{dxl4}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl5(text)}
        placeholder="W5"
        />
        <Text>{dxl5}</Text>

        
      
        
        
     
          </View>
          
          <View>
            <Text>sp[mm]</Text>
            <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn1(text)}
        placeholder="s1"
        />
        <Text>{n1}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn2(text)}
        placeholder="s2"
        />
        <Text>{n2}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn3(text)}
        placeholder="s3"
        />
        <Text>{n3}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn4(text)}
        placeholder="sśr."
        />
        <Text>{n4}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn5(text)}
        placeholder="sp"
        />
        <Text>{n5}</Text>
       
          </View>
          
        
          
       
          
       
          
          
          
          </View>
          
          <View style={styles.mniejszaprzerwa}></View>

         <View style={styles.button}>
         <TouchableHighlight style={styles.viewboxbutton} onPress={()=>savedane()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>removedane()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
          </View>
          <View style={styles.przerwa}></View>




          <Button style={styles.borderbutton}
          title="Podsumowanie"
          color='#00ACD1'
          onPress={() => navigation.navigate('W4podsumowanie')}
        />
         
           <Button style={styles.borderbutton}
          title="Powrót do edycji danych"
          color='#2799D5'
          onPress={() => navigation.navigate('W4')}
        />
      
       
    
          
          <Button style={styles.borderbutton}
          title="Powrót do strony głównej"
          color='#5984CE'
          onPress={() => navigation.navigate('E-student')}
        />
      </View>
      </ScrollView>
    );
  }
  else
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
  export default W4table
  
  
  