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

  const W2 = function W2({ navigation }) {

    

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
            await AsyncStorage.setItem("W2MaterialObrabiany",Tokarka);
            await AsyncStorage.setItem("W2rm",MocTokarka);
  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const loadTokarka = async () =>{
      try{
        let Tokarka = await AsyncStorage.getItem("W2MaterialObrabiany")
        let MocTokarka = await AsyncStorage.getItem("W2rm")
        let Material = await AsyncStorage.getItem("W2NazwaObrabiarki")
        let Narzedzia = await AsyncStorage.getItem("W2Osrodekobrobkowy")
        let Kr = await AsyncStorage.getItem("MyKr")
        let Krsecond = await AsyncStorage.getItem("W2Obrabiarka")
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
          await AsyncStorage.removeItem("W2MaterialObrabiany")
          await AsyncStorage.removeItem("W2rm")
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
            
            await AsyncStorage.setItem("W2NazwaObrabiarki",Material)
  
      }catch(err)
      {
        alert(err)
  
      }
  
    }

    const removeMaterial = async()=>{
      try{
         
          await AsyncStorage.removeItem("W2NazwaObrabiarki")
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
              
              await AsyncStorage.setItem("W2Osrodekobrobkowy",Narzedzia)
            
        }catch(err)
        {
          alert(err)
    
        }
    
      }
     
      const removeNarzedzia = async()=>{
        try{
           
            await AsyncStorage.removeItem("W2Osrodekobrobkowy")
          
        }
        catch(err){
            alert(err)
    
        }
        finally{
            
            setNarzedzia("")
         
    
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
      const saveKrsecond = async()=>{
        try{
              await AsyncStorage.setItem("W2Obrabiarka",Krsecond);
             
    
        }catch(err)
        {
          alert(err)
    
        }
    
      }
   
      const removeKrsecond = async()=>{
        try{
            await AsyncStorage.removeItem("W2Obrabiarka")
          
        }
        catch(err){
            alert(err)
    
        }
        finally{
           
            setKrsecond("")
    
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
  

    if(isLoading==true){
    return (
      
    
      <ScrollView>
      <View style={styles.W1}> 
        <View ><Text style={styles.bold23}>Tabela 1</Text></View>
        <Text style={styles.bold}>Wprowadź nazwę Materiału Obrabianego oraz Rm</Text>
        <View style={styles.textstyle} >
          
        <TextInput style={styles.input}
        placeholder="Materiał obrabiany"
            onChangeText={(text) => setTokarka(text)}
        />
         <TextInput style={styles.input}
            placeholder="Rm"
            onChangeText={(text) => setMocTokarka(text)}
        />
        </View>
        <View style={styles.textstyle} >
         <Text style={styles.nazwy}>Materiał obrabiany : {Tokarka}</Text>
         <Text style={styles.nazwy}>Rm[MPa] : {MocTokarka}</Text>
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
        <Text style={styles.bold}>Wprowadz nazwę obrabiarki</Text>
        <TextInput style={styles.input}
        onChangeText={(text) => setMaterial(text)}
        placeholder="Materiał obrabiany"
        />
        <View style={styles.textstyle}>
        <Text 
          style={styles.nazwy}>Nazwa obrabiarki : {Material}</Text>
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
        <Text style={styles.bold}>Wprowadź ośrodek obróbkowy</Text>
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="Wprowadz ośrodek obróbkowy"
        onChangeText={(text) => setNarzedzia(text)}
        />
         
        </View>
        <View style={styles.textstyle}>
        <Text style={styles.nazwy}>Ośrodek obróbkowy : {Narzedzia}</Text>
 
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
        <View ><Text style={styles.bold23}>Tabela 2</Text></View>
        <View style={styles.mniejszaprzerwa}></View>
        <Text style={styles.bold}>Wprowadź nazwę obrabiarki</Text>
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="Wprowadz nazwę obrabiarki"
        onChangeText={(text) => setKrsecond(text)}
        />
         
        </View>
        <View style={styles.textstyle}>
        <Text style={styles.nazwy}>Obrabiarka : {Krsecond}</Text>
 
        </View>
        <View style={styles.mniejszaprzerwa}></View>
        <View style={styles.button}>
        <TouchableHighlight style={styles.viewboxbutton} onPress={()=>saveKrsecond()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>removeKrsecond()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
     
        </View>
        <View style={styles.mniejszaprzerwa}></View>
       <Button style={styles.borderbutton}
          title="Szkic"
          color='#00ACD1'
          onPress={() => navigation.navigate('W2zdjęcie')}
        />
         <Button style={styles.borderbutton}
          title="Tolerancje"
          color='#2799D5'
          onPress={() => navigation.navigate('W2tolerancje')}
        />
          <Button style={styles.borderbutton}
          title="Edycja Tabeli"
          color='#5984CE'
          onPress={() => navigation.navigate('W2table')}
        />
        <Button style={styles.borderbutton}
          title="Edycja Tabeli2"
          color='#5984CE'
          onPress={() => navigation.navigate('W2table2')}
        />
         <Button style={styles.borderbutton}
          title="Edycja Tabeli3"
          color='#5984CE'
          onPress={() => navigation.navigate('W2table3')}
        />
        <Button style={styles.borderbutton}
          title="Podsumowanie"
          color='#806AB9'
          onPress={() => navigation.navigate('W2podsumowanie')}
        />
         <Button style={styles.borderbutton}
          title="W2podsumowanie2"
          color='#806AB9'
          onPress={() => navigation.navigate('W2podsumowanie2')}
        />
         <Button style={styles.borderbutton}
          title="Wykresy"
          color='#9A4E96'
          onPress={() => navigation.navigate('W2chart')}
        />
            
          <Button style={styles.borderbutton}
          title="Powrót do strony głównej"
          color='#A5316A'
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
  export default W2