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

  const W4 = function W4({ navigation }) {

    

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
        
        let Material  = await AsyncStorage.getItem("W4Material")
        let Narzedzie = await AsyncStorage.getItem("W3narzedzie")
        let profilcyfrowy  = await AsyncStorage.getItem("W4profilcyfrowy")
        let Dc = await AsyncStorage.getItem("W4Dc")
        let cieczobróbkowa = await AsyncStorage.getItem("W4cieczobróbkowa")
        let z = await AsyncStorage.getItem("W4z")
        let Material2 = await AsyncStorage.getItem("W4Material2")
        let Narzędzie2 = await AsyncStorage.getItem("W4Narzędzie2")
        let Profilometr = await AsyncStorage.getItem("W4profilometr")
        let cieczobróbkowa2 = await AsyncStorage.getItem("W5cieczobróbkowa2")
        let Dc2 = await AsyncStorage.getItem("W4Dc2")
        let z2 = await AsyncStorage.getItem("W5z2")
       
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
            
            await AsyncStorage.setItem("W4Material",obrabianymaterial)
           

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save2 = async()=>{
      try{
            
            await AsyncStorage.setItem("W4profilcyfrowy",profilcyfrowy)
            await AsyncStorage.setItem("W4Dc",Dc)

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save3 = async()=>{
      try{
            
            await AsyncStorage.setItem("W4cieczobróbkowa",cieczobróbkowa)
            await AsyncStorage.setItem("W4z",z)
            await AsyncStorage.setItem("W4Material2",Material2)
  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save4 = async()=>{
      try{
            
           
            await AsyncStorage.setItem("W4Narzędzie2",Narzędzie2)
            await AsyncStorage.setItem("W4profilometr",Profilometr)
  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save5 = async()=>{
      try{
        await AsyncStorage.setItem("W5z2",z2)
            
            await AsyncStorage.setItem("W5cieczobróbkowa2",cieczobróbkowa2)

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const save6 = async()=>{
      try{
            
            await AsyncStorage.setItem("W4Dc2",Dc2)
            

  
      }catch(err)
      {
        alert(err)
  
      }
  
    }
    const remove1 = async()=>{
      try{
         
          await AsyncStorage.removeItem("W4Material")
          
      }
      catch(err){
          alert(err)
  
      }
      finally{
          
          setobrabianymaterial();
         
  
      }
  
    }
    const remove2 = async()=>{
      try{
         
          await AsyncStorage.removeItem("W4profilcyfrowy")
          await AsyncStorage.removeItem("W4Dc")
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
         
          await AsyncStorage.removeItem("W4cieczobróbkowa")
          await AsyncStorage.removeItem("W4z")
          await AsyncStorage.removeItem("W4Material2")
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
         
        await AsyncStorage.removeItem("W4profilometr")
          await AsyncStorage.removeItem("W4Narzędzie2")
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
        
        await AsyncStorage.removeItem("W5z2")
          await AsyncStorage.removeItem("W5cieczobróbkowa2")
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
          
            await AsyncStorage.removeItem("W4Dc2")
            
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
        <Text style={styles.boldx2}>Zadanie laboratoryjne nr 4.</Text>
        <Text style={styles.wyrownanie}>Ozaczenia przyrządów pomiarowych</Text>
        <View style={styles.textstyle} >
        <TextInput style={styles.input}
        placeholder="Przyrząd pomiarowy"
            onChangeText={(text) => setobrabianymaterial(text)}
        />
       
        </View>
        <View style={styles.textstyle} >
         <Text style={styles.nazwy}>Przyrząd pomiarowy : {obrabianymaterial}</Text>
         
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
        <Text style={styles.wyrownanie}>Wprowadź m,zp</Text>
        <View style={styles.textstyle} >
        <TextInput style={styles.input}
        onChangeText={(text) => setprofilcyfrowy(text)}
        placeholder="m"
        />
          <TextInput style={styles.input}
        onChangeText={(text) => setDc(text)}
        placeholder="zp"
        />
        </View>
        <View style={styles.textstyle}>
        <Text 
          style={styles.nazwy}>m =  {profilcyfrowy}</Text>
          <Text 
          style={styles.nazwy}>zp: {Dc}</Text>
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
        <Text style={styles.wyrownanie}>Wprowadź k, W'p, Wp</Text>
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="k"
        onChangeText={(text) => setcieczobróbkowa(text)}
        />
          <TextInput style={styles.input}
          placeholder="W'p"
        onChangeText={(text) => setz(text)}
        />
        <TextInput style={styles.input}
          placeholder="Wp"
        onChangeText={(text) => setMaterial2(text)}
        />
          
        </View>

        <View style={styles.textstyle}>
        <Text style={styles.nazwy}>k :  {cieczobróbkowa}</Text>
        <Text style={styles.nazwy}>W'p :  {z}</Text>
        <Text style={styles.nazwy}>Wp :  {Material2}</Text>
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
       
      
        <Text style={styles.wyrownanie}>Wprowadź h'p, s'p</Text>
       
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="h'p"
        onChangeText={(text) => setProfilometr(text)}
        />
          <TextInput style={styles.input}
          placeholder="s'p"
        onChangeText={(text) => setNarzędzie2(text)}
        />
        
        </View>
        <View style={styles.textstyle}>
       <Text style={styles.nazwy}>h'p : {Profilometr}</Text>
       <Text style={styles.nazwy}>s'p :  {Narzędzie2}</Text>
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
      
       <Text style={styles.wyrownanie}>Wprowadź hp, sp</Text>
       
        <View style={styles.textstyle}>
        <TextInput style={styles.input}
        placeholder="hp"
        onChangeText={(text) => setz2(text)}
        />
          <TextInput style={styles.input}
          placeholder="sp"
        onChangeText={(text) => setcieczobróbkowa2(text)}
        />
        
        </View>
        <View style={styles.textstyle}>
       <Text style={styles.nazwy}>hp :{z2}</Text>
       <Text style={styles.nazwy}>sp :  {cieczobróbkowa2}</Text>
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
       <View><Text style={styles.wyrownanie}>m - Wielkośc pomiarowa(teoretyczna)</Text></View>
       <View><Text style={styles.wyrownanie}>W'p,Wp,h'p,s'p,hp,sp [mm]</Text></View>
       <View style={styles.przerwa}></View>
      
       <Button style={styles.borderbutton}
          title="Edycja Tabeli"
          color='#00ACD1'
          onPress={() => navigation.navigate('W4table')}
        />
         
           <Button style={styles.borderbutton}
          title="Podsumowanie"
          color='#2799D5'
          onPress={() => navigation.navigate('W4podsumowanie')}
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
  export default W4