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

  const W1 = function W1({ navigation }) {

    

    const [Tokarka,setTokarka]=useState();
    const [Material,setMaterial]=useState();
    const [Narzedzia,setNarzedzia]=useState();
    const [Kr,setKr]=useState();
    const [Krsecond,setKrsecond]=useState();
    const[MocTokarka,setMocTokarka]=useState();
    const[ap,setap]=useState();
    const[ośrodek,setośrodek]=useState();
    const[isLoading,setisLoading]=useState(false);
    const saveTokarka = async()=>{
      try{
            await AsyncStorage.setItem("MyTokarka",Tokarka);
            await AsyncStorage.setItem("MyMocTokarka",MocTokarka);
  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const loadTokarka = async () =>{
      try{
        let Tokarka = await AsyncStorage.getItem("MyTokarka")
        let MocTokarka = await AsyncStorage.getItem("MyMocTokarka")
        let Material = await AsyncStorage.getItem("MyMaterial")
        let Narzedzia = await AsyncStorage.getItem("MyNarzedzia")
        let Kr = await AsyncStorage.getItem("MyKr")
        let Krsecond = await AsyncStorage.getItem("MyKrsecond")
        let ap = await AsyncStorage.getItem("Myap")
          let ośrodek = await AsyncStorage.getItem("Myośrodek")
        if(Tokarka !==null){
          setTokarka(Tokarka)
  
        }
        if(MocTokarka !==null){
            setMocTokarka(MocTokarka)

        }
        if(Material !==null){
          setMaterial(Material)
  
        }
        if(Narzedzia !==null){
          setNarzedzia(Narzedzia)
  
        }
        if(Kr !==null){
          setKr(Kr)
  
        }
        if(Krsecond !==null){
          setKrsecond(Krsecond)
  
        }
        if(ap !==null){
          setap(ap)
  
        }
        if(ośrodek !==null){
            setośrodek(ośrodek)

        }
     
      }
      catch(err){
        alert(err)
  
  
      }
      setisLoading(true)
    }
    const removeTokarka = async()=>{
      try{
          await AsyncStorage.removeItem("MyTokarka")
          await AsyncStorage.removeItem("MyMocTokarka")
      }
      catch(err){
          alert(err)
  
      }
      finally{
          setTokarka("")
          setMocTokarka("")
  
      }
  
    }
    const saveMaterial = async()=>{
      try{
            
            await AsyncStorage.setItem("MyMaterial",Material)
  
      }catch(err)
      {
        alert(err)
  
      }
  
    }

    const removeMaterial = async()=>{
      try{
         
          await AsyncStorage.removeItem("MyMaterial")
      }
      catch(err){
          alert(err)
  
      }
      finally{
          
          setMaterial("")
  
      }
  
    }
    const saveNarzedzia = async()=>{
        try{
              
              await AsyncStorage.setItem("MyNarzedzia",Narzedzia)
              await AsyncStorage.setItem("MyKr",Kr)
              await AsyncStorage.setItem("MyKrsecond",Krsecond)
        }catch(err)
        {
          alert(err)
    
        }
    
      }
     
      const removeNarzedzia = async()=>{
        try{
           
            await AsyncStorage.removeItem("MyNarzedzia")
            await AsyncStorage.removeItem("MyKr")
            await AsyncStorage.removeItem("MyKrsecond")
        }
        catch(err){
            alert(err)
    
        }
        finally{
            
            setNarzedzia("")
            setKr("")
            setKrsecond("")
    
        }
    
      }
      const saveap = async()=>{
        try{
              await AsyncStorage.setItem("Myap",ap);
              await AsyncStorage.setItem("Myośrodek",ośrodek);
    
        }catch(err)
        {
          alert(err)
    
        }
    
      }
   
      const removeap = async()=>{
        try{
            await AsyncStorage.removeItem("Myap")
            await AsyncStorage.removeItem("Myośrodek")
        }
        catch(err){
            alert(err)
    
        }
        finally{
            setap("")
            setośrodek("")
    
        }
    
      }
    useEffect(()=>{
      setisLoading(false);
      loadTokarka();
    
    },[])
  
    // #AFE3EB
    // #9AEEE7
    //
    if(isLoading==true){
    return (
      
    
      <ScrollView>
      <View style={styles.W1}> 
        
        <Text style={styles.bold}>Wprowadz nazwę Tokarki oraz Moc Tokarki</Text>
        <View style={styles.textstyle} >
        <TextInput style={styles.input}
        placeholder="Nazwa Tokarki"
            onChangeText={(text) => setTokarka(text)}
        />
         <TextInput style={styles.input}
            placeholder="Ps"
            onChangeText={(text) => setMocTokarka(text)}
        />
        </View>
        <View style={styles.textstyle} >
         <Text style={styles.nazwy}>Tokarka : {Tokarka}</Text>
         <Text style={styles.nazwy}>Ps[kW] : {MocTokarka}</Text>
         </View>
        <View style={styles.mniejszaprzerwa}></View>
        <View style={styles.button}>
        <TouchableHighlight style={styles.viewboxbutton} onPress={()=>saveTokarka()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>removeTokarka()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
        </View>
        <View style={styles.mniejszaprzerwa}></View>
        <Text style={styles.bold}>Wprowadz nazwę Materiału obrabianego</Text>
        <TextInput style={styles.input}
        onChangeText={(text) => setMaterial(text)}
        placeholder="Materiał obrabiany"
        />
        <View style={styles.textstyle}>
        <Text 
          style={styles.nazwy}>Materiał obrabiany : {Material}</Text>
       </View>
       <View style={styles.mniejszaprzerwa}></View>
        <View style={styles.button}>
      
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>saveMaterial()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>removeMaterial()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
      
        </View>   
        <View style={styles.mniejszaprzerwa}></View>
        <Text style={styles.bold}>Wprowadz nazwę Narzędzia,Kr oraz Kr'</Text>
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="Wprowadz nazwe narzedzia"
        onChangeText={(text) => setNarzedzia(text)}
        />
          <TextInput style={styles.input}
          placeholder="Kr"
        onChangeText={(text) => setKr(text)}
        />
          <TextInput style={styles.input}
          placeholder="Kr'"
        onChangeText={(text) => setKrsecond(text)}
        />
        </View>
        <View style={styles.textstyle}>
        <Text style={styles.nazwy}>Narzędzie : {Narzedzia}</Text>
        <Text style={styles.nazwy}>Kr : {Kr}</Text>
        <Text style={styles.nazwy}>Kr' : {Krsecond}</Text>
        </View>
        <View style={styles.mniejszaprzerwa}></View>
        <View style={styles.button}>
        <TouchableHighlight style={styles.viewboxbutton} onPress={()=>saveNarzedzia()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>removeNarzedzia()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
    
        </View>
        <View style={styles.mniejszaprzerwa}></View>
        <Text style={styles.bold}>Wprowadź ośrodek obróbkowy oraz ap</Text>
       
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="ap"
        onChangeText={(text) => setap(text)}
        />
          <TextInput style={styles.input}
          placeholder="Ośrodek obróbkowy "
        onChangeText={(text) => setośrodek(text)}
        />
        
        </View>
       <View style={styles.button}>
       <TouchableHighlight style={styles.viewboxbutton} onPress={()=>saveap()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>removeap()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
   
       </View>
       <View style={styles.mniejszaprzerwa}></View>
       <View style={styles.textstyle}>
       <Text style={styles.nazwy}>ap : {ap}</Text>
       <Text style={styles.nazwy}>Ośrodek obróbkowy : {ośrodek}</Text>
       </View>
        
       <View style={styles.mniejszaprzerwa}></View>
          <Button style={styles.borderbutton}
          title="Edycja Tabeli"
          color='#00ACD1'
          onPress={() => navigation.navigate('W1second')}
        />
           <Button style={styles.borderbutton}
          title="Podsumowanie"
          color='#2799D5'
          onPress={() => navigation.navigate('W1third')}
        />
       
        <Button style={styles.borderbutton}
          title="Podsumowanie-wykresy"
          color='#5984CE'
          onPress={() => navigation.navigate('chart')}
        />
          <Button style={styles.borderbutton}
          title="Powrót do strony głównej"
          color='#806AB9'
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
  export default W1