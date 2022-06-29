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

  const W3 = function W3({ navigation }) {

    

    const [obrabianymaterial,setobrabianymaterial]=useState();
    const [freznarzędzie,setfreznarzędzie]=useState();
    const [profilcyfrowy,setprofilcyfrowy]=useState();
    const [Dc,setDc]=useState();
    const [cieczobróbkowa,setcieczobróbkowa]=useState();
    const[z,setz]=useState();
    const[Material2,setMaterial2]=useState();
    const[Narzędzie2,setNarzędzie2]=useState();
    const[Profilometr,setProfilometr]=useState();
    const[cieczobróbkowa2,setcieczobróbkowa2]=useState();
    const[Dc2,setDc2]=useState();
    const[z2,setz2]=useState();
    const[isLoading,setisLoading]=useState(false);
  
    const load = async () =>{
      try{
        
        let Material  = await AsyncStorage.getItem("W3Material")
        let Narzedzie = await AsyncStorage.getItem("W3narzedzie")
        let profilcyfrowy  = await AsyncStorage.getItem("W3profilcyfrowy")
        let Dc = await AsyncStorage.getItem("W3Dc")
        let cieczobróbkowa = await AsyncStorage.getItem("W3cieczobróbkowa")
        let z = await AsyncStorage.getItem("W3z")
        let Material2 = await AsyncStorage.getItem("W3Material2")
        let Narzędzie2 = await AsyncStorage.getItem("W3Narzędzie2")
        let Profilometr = await AsyncStorage.getItem("W3profilometr")
        let cieczobróbkowa2 = await AsyncStorage.getItem("W3cieczobróbkowa2")
        let Dc2 = await AsyncStorage.getItem("W3Dc2")
        let z2 = await AsyncStorage.getItem("W3z2")
       
        if(Material !==null){
          setobrabianymaterial(Material)
  
        }
        if(Narzedzie!==null){
            setfreznarzędzie(Narzedzie)

        }
        if(profilcyfrowy !==null){
          setprofilcyfrowy(profilcyfrowy)
  
        }
        if(Dc!==null){
            setDc(Dc)

        }
        if(cieczobróbkowa !==null){
          setcieczobróbkowa(cieczobróbkowa)
  
        }
        if(z!==null){
            setz(z)

        }
        if(Material2 !==null){
          setMaterial2(Material2)
  
        }
        if(Narzędzie2!==null){
            setNarzędzie2(Narzędzie2)

        }
        if(Profilometr !==null){
          setProfilometr(Profilometr)
  
        }
        if(cieczobróbkowa2!==null){
            setcieczobróbkowa2(cieczobróbkowa2)

        }
        if(Dc2 !==null){
          setDc2(Dc2)
  
        }
        if(z2!==null){
            setz2(z2)

        }
     
      }
      catch(err){
        alert(err)
  
  
      }
      setisLoading(true)
    }
    const save1 = async()=>{
      try{
            
            await AsyncStorage.setItem("W3Material",obrabianymaterial)
            await AsyncStorage.setItem("W3narzedzie",freznarzędzie)

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save2 = async()=>{
      try{
            
            await AsyncStorage.setItem("W3profilcyfrowy",profilcyfrowy)
            await AsyncStorage.setItem("W3Dc",Dc)

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save3 = async()=>{
      try{
            
            await AsyncStorage.setItem("W3cieczobróbkowa",cieczobróbkowa)
            await AsyncStorage.setItem("W3z",z)

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save4 = async()=>{
      try{
            
            await AsyncStorage.setItem("W3Material2",Material2)
            await AsyncStorage.setItem("W3Narzędzie2",Narzędzie2)

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save5 = async()=>{
      try{
            
            await AsyncStorage.setItem("W3profilometr",Profilometr)
            await AsyncStorage.setItem("W3cieczobróbkowa2",cieczobróbkowa2)

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save6 = async()=>{
      try{
            
            await AsyncStorage.setItem("W3Dc2",Dc2)
            await AsyncStorage.setItem("W3z2",z2)

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const remove1 = async()=>{
      try{
         
          await AsyncStorage.removeItem("W3Material")
          await AsyncStorage.removeItem("W3narzedzie")
      }
      catch(err){
          alert(err)
  
      }
      finally{
          
          setobrabianymaterial();
          setfreznarzędzie();
  
      }
  
    }
    const remove2 = async()=>{
      try{
         
          await AsyncStorage.removeItem("W3profilcyfrowy")
          await AsyncStorage.removeItem("W3Dc")
      }
      catch(err){
          alert(err)
  
      }
      finally{
          
          setprofilcyfrowy();
          setDc();
  
      }
  
    }
    const remove3 = async()=>{
      try{
         
          await AsyncStorage.removeItem("W3cieczobróbkowa")
          await AsyncStorage.removeItem("W3z")
      }
      catch(err){
          alert(err)
  
      }
      finally{
          
          setcieczobróbkowa();
          setz();
  
      }
  
    }
    const remove4 = async()=>{
      try{
         
          await AsyncStorage.removeItem("W3Material2")
          await AsyncStorage.removeItem("W3Narzędzie2")
      }
      catch(err){
          alert(err)
  
      }
      finally{
          
          setMaterial2();
          setNarzędzie2();
  
      }
  
    }
    const remove5 = async()=>{
      try{
        
          await AsyncStorage.removeItem("W3profilometr")
          await AsyncStorage.removeItem("W3cieczobróbkowa2")
      }
      catch(err){
          alert(err)
  
      }
      finally{
          
          setProfilometr();
          setcieczobróbkowa2();
  
      }
    }
      const remove6 = async()=>{
        try{
          
            await AsyncStorage.removeItem("W3Dc2")
            await AsyncStorage.removeItem("W3z2")
        }
        catch(err){
            alert(err)
    
        }
        finally{
            
            setDc2();
            setz2();
    
        }
  
    }

   
    useEffect(()=>{
   load();
    
    },[])
  

    if(isLoading==true){
    return (
      
    
      <ScrollView>
      <View style={styles.W1}> 
        <Text style={styles.boldx2}>Frezowanie Walcowe</Text>
        <Text style={styles.wyrownanie}>Wprowadz Materiał obrabiany oraz Narzędzie</Text>
        <View style={styles.textstyle} >
        <TextInput style={styles.input}
        placeholder="Materiał obrabiany"
            onChangeText={(text) => setobrabianymaterial(text)}
        />
         <TextInput style={styles.input}
            placeholder="narzędzie"
            onChangeText={(text) => setfreznarzędzie(text)}
        />
        </View>
        <View style={styles.textstyle} >
         <Text style={styles.nazwy}>Materiał : {obrabianymaterial}</Text>
         <Text style={styles.nazwy}>Narzędzie : {freznarzędzie}</Text>
         </View>
       <View style={styles.mniejszaprzerwa}></View>
        <View style={styles.button}>
        <TouchableHighlight style={styles.viewboxbutton} onPress={()=>save1()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>remove1()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
    
        </View>
        <View style={styles.mniejszaprzerwa}></View>
        <Text style={styles.wyrownanie}>Wprowadź naze profilometru cyfrowego oraz Dc</Text>
        <View style={styles.textstyle} >
        <TextInput style={styles.input}
        onChangeText={(text) => setprofilcyfrowy(text)}
        placeholder="Profil cyfrowy"
        />
          <TextInput style={styles.input}
        onChangeText={(text) => setDc(text)}
        placeholder="Dc"
        />
        </View>
        <View style={styles.textstyle}>
        <Text 
          style={styles.nazwy}>Profil cyfrowy: {profilcyfrowy}</Text>
          <Text 
          style={styles.nazwy}>Dc: {Dc}</Text>
       </View>
        <View style={styles.mniejszaprzerwa}></View>
        <View style={styles.button}>
        <TouchableHighlight style={styles.viewboxbutton} onPress={()=>save2()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>remove2()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
       
        </View>   
        <View style={styles.mniejszaprzerwa}></View>
        <Text style={styles.wyrownanie}>Wprowadz ciecz obróbkową oraz parametr z</Text>
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="ciecz obróbkowa"
        onChangeText={(text) => setcieczobróbkowa(text)}
        />
          <TextInput style={styles.input}
          placeholder="z"
        onChangeText={(text) => setz(text)}
        />
          
        </View>

        <View style={styles.textstyle}>
        <Text style={styles.nazwy}>Ciecz obróbkowa :  {cieczobróbkowa}</Text>
        <Text style={styles.nazwy}>z :  {z}</Text>
        </View>
        <View style={styles.mniejszaprzerwa}></View>
        <View style={styles.button}>
        <TouchableHighlight style={styles.viewboxbutton} onPress={()=>save3()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>remove3()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
    
        </View>
        <View style={styles.mniejszaprzerwa}></View>
        <Text style={styles.boldx2}>Frezowanie Czołowe</Text>
     
        <Text style={styles.wyrownanie}>Wprowadź materiał obrabiany oraz narzędzie</Text>
       
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="Materiał obrabiany"
        onChangeText={(text) => setMaterial2(text)}
        />
          <TextInput style={styles.input}
          placeholder="narzędzie "
        onChangeText={(text) => setNarzędzie2(text)}
        />
        
        </View>
        <View style={styles.textstyle}>
       <Text style={styles.nazwy}>Materiał :{Material2}</Text>
       <Text style={styles.nazwy}>Narzędzie :  {Narzędzie2}</Text>
       </View>
        <View style={styles.mniejszaprzerwa}></View>
       <View style={styles.button}>
       <TouchableHighlight style={styles.viewboxbutton} onPress={()=>save4()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>remove4()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
   
       </View>
       <View style={styles.mniejszaprzerwa}></View>
      
       <Text style={styles.wyrownanie}>Wprowadź Profilometr cyfrowy oraz ciecz obróbkowa</Text>
       
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="Profilometr cyfrowy"
        onChangeText={(text) => setProfilometr(text)}
        />
          <TextInput style={styles.input}
          placeholder="ciecz obróbkowa"
        onChangeText={(text) => setcieczobróbkowa2(text)}
        />
        
        </View>
        <View style={styles.textstyle}>
       <Text style={styles.nazwy}>Profilometr :{Profilometr}</Text>
       <Text style={styles.nazwy}>Ciecz :  {cieczobróbkowa2}</Text>
       </View>
       <View style={styles.mniejszaprzerwa}></View>
       <View style={styles.button}>
       <TouchableHighlight style={styles.viewboxbutton} onPress={()=>save5()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>remove5()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
     
       </View>
       <View style={styles.mniejszaprzerwa}></View>
       <Text style={styles.wyrownanie}>Wprowadź parametr Dc oraz z</Text>
       
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="z"
        onChangeText={(text) => setz2(text)}
        />
          <TextInput style={styles.input}
          placeholder="Dc"
        onChangeText={(text) => setDc2(text)}
        />
        
        </View>
        <View style={styles.textstyle}>
       <Text style={styles.nazwy}>z : {z2}</Text>
       <Text style={styles.nazwy}>Dc :  {Dc2}</Text>
       </View>
       <View style={styles.mniejszaprzerwa}></View>
       <View style={styles.button}>
       <TouchableHighlight style={styles.viewboxbutton} onPress={()=>save6()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        zapisz
      </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.viewboxbutton} onPress={()=>remove6()} underlayColor="white">
      <Text style={styles.buttoncolor}>
        usuń
      </Text>
      </TouchableHighlight>
    
   
       </View>
       <View style={styles.przerwa}></View>
      
       <Button style={styles.borderbutton}
          title="Edycja Tabeli-Frezowanie walcowe"
          color='#00ACD1'
          onPress={() => navigation.navigate('W3table')}
        />
         <Button style={styles.borderbutton}
          title="Edycja Tabeli-Frezowanie czołowe"
          color='#00ACD1'
          onPress={() => navigation.navigate('W3Table2')}
        />
           <Button style={styles.borderbutton}
          title="Podsumowanie-frezowanie walcowe"
          color='#2799D5'
          onPress={() => navigation.navigate('W3podsumowanie')}
        />
         <Button style={styles.borderbutton}
          title="Podsumowanie-frezowanie czołowe"
          color='#2799D5'
          onPress={() => navigation.navigate('W3podsumowanie2')}
        />
       
        <Button style={styles.borderbutton}
          title="Podsumowanie-wykresy"
          color='#5984CE'
          onPress={() => navigation.navigate('W3chart')}
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
  export default W3