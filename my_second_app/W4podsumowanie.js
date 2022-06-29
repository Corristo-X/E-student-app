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
  Math,
  
  
  
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


const W4podsumowanie = function W4podsumowanie({ navigation }) {
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
    const [Tokarka,setTokarka]=useState();
    const [Material,setMaterial]=useState();
    const [Kr,setKr]=useState();
    const [Krsecond,setKrsecond]=useState();
    const[MocTokarka,setMocTokarka]=useState();
    const[Narzedzia,setNarzedzia]=useState();
    const[Dc,setDc]=useState();
    const[z,setz]=useState();
    const[isLoading,setisLoading]=useState(false);
    var pi = 3.14;
    
    const loaddane = async () =>{
      
     
        try{
          let wartosci = {};
          wartosci.dxl1 = await AsyncStorage.getItem("W4dxl1")
          wartosci.dxl2 = await AsyncStorage.getItem("W4dxl2")
          wartosci.dxl3 = await AsyncStorage.getItem("W4dxl3")
          wartosci.dxl4 = await AsyncStorage.getItem("W4dxl4")
          wartosci.dxl5 = await AsyncStorage.getItem("W4dxl5")
          wartosci.dxl6 = await AsyncStorage.getItem("W3dxl6")
          wartosci.dxl7 = await AsyncStorage.getItem("W3dxl7")
          wartosci.dxl8 = await AsyncStorage.getItem("W3dxl8")
    
          wartosci.n1 = await AsyncStorage.getItem("W4n1")
          wartosci.n2 = await AsyncStorage.getItem("W4n2")
          wartosci.n3 = await AsyncStorage.getItem("W4n3")
          wartosci.n4 = await AsyncStorage.getItem("W4n4")
          wartosci.n5 = await AsyncStorage.getItem("W4n5")
          wartosci.n6 = await AsyncStorage.getItem("W3n6")
          wartosci.n7 = await AsyncStorage.getItem("W3n7")
          wartosci.n8 = await AsyncStorage.getItem("W3n8")
    
          wartosci.vc1 = await AsyncStorage.getItem("W3vc1")
          wartosci.vc2 = await AsyncStorage.getItem("W3vc2")
          wartosci.vc3 = await AsyncStorage.getItem("W3vc3")
          wartosci.vc4 = await AsyncStorage.getItem("W3vc4")
          wartosci.vc5 = await AsyncStorage.getItem("W3vc5")
          wartosci.vc6 = await AsyncStorage.getItem("W3vc6")
          wartosci.vc7 = await AsyncStorage.getItem("W3vc7")
          wartosci.vc8 = await AsyncStorage.getItem("W3vc8")
    
          wartosci.re1 = await AsyncStorage.getItem("W3re1")
          wartosci.re2 = await AsyncStorage.getItem("W3re2")
          wartosci.re3 = await AsyncStorage.getItem("W3re3")
          wartosci.re4 = await AsyncStorage.getItem("W3re4")
          wartosci.re5 = await AsyncStorage.getItem("W3re5")
          wartosci.re6 = await AsyncStorage.getItem("W3re6")
          wartosci.re7 = await AsyncStorage.getItem("W3re7")
          wartosci.re8 = await AsyncStorage.getItem("W3re8")
    
          wartosci.ra1 = await AsyncStorage.getItem("W3ra1")
          wartosci.ra2 = await AsyncStorage.getItem("W3ra2")
          wartosci.ra3 = await AsyncStorage.getItem("W3ra3")
          wartosci.ra4 = await AsyncStorage.getItem("W5z2")
          wartosci.ra5 = await AsyncStorage.getItem("W5cieczobróbkowa2")
          wartosci.ra6 = await AsyncStorage.getItem("W4Narzędzie2")
          wartosci.ra7 = await AsyncStorage.getItem("W4profilometr")
          wartosci.ra8 = await AsyncStorage.getItem("W4Material2")
          wartosci.Tokarka = await AsyncStorage.getItem("W4Material")
          wartosci.MocTokarka = await AsyncStorage.getItem("W3narzedzie")
          wartosci.Material = await AsyncStorage.getItem("W4profilcyfrowy")
          wartosci.Narzedzia = await AsyncStorage.getItem("W4Dc")
          wartosci.Kr = await AsyncStorage.getItem("W4cieczobróbkowa")
          wartosci.Krsecond = await AsyncStorage.getItem("W4z")
          wartosci.Dc = await AsyncStorage.getItem("W3Dc")
          wartosci.z = await AsyncStorage.getItem("W3z")

          if(wartosci.Tokarka !==null){
            setTokarka(wartosci.Tokarka)
    
          }
          if(wartosci.z !==null){
            setz(JSON.parse(wartosci.z))
    
          }
          if(wartosci.Dc !==null){
            setDc(JSON.parse(wartosci.Dc))
    
          }
          if(wartosci.MocTokarka !==null){
              setMocTokarka(wartosci.MocTokarka)
  
          }
          if(wartosci.Material !==null){
            setMaterial(wartosci.Material)
    
          }
          if(wartosci.Narzedzia !==null){
            setNarzedzia(wartosci.Narzedzia)
    
          }
          if(wartosci.Kr !==null){
            setKr(wartosci.Kr)
    
          }
          if(wartosci.Krsecond !==null){
            setKrsecond(wartosci.Krsecond)
    
          }
        
    
          if(wartosci.dxl1 !==null){
            setdxl1(JSON.parse(wartosci.dxl1))
          }
          if(wartosci.dxl2 !==null){
              setdxl2(JSON.parse(wartosci.dxl2))
          }
          if(wartosci.dxl3 !==null){
            setdxl3(JSON.parse(wartosci.dxl3))
           }
            if(wartosci.dxl4 !==null){
          setdxl4(JSON.parse(wartosci.dxl4))
          }
            if(wartosci.dxl5 !==null){
          setdxl5(JSON.parse(wartosci.dxl5))
          }
          if(wartosci.dxl6 !==null){
           setdxl6(JSON.parse(wartosci.dxl6))
          }
          if(wartosci.dxl7 !==null){
            setdxl7(JSON.parse(wartosci.dxl7))
          }
            if(wartosci.dxl8 !==null){
            setdxl8(JSON.parse(wartosci.dxl8))
            }
            ////////////////////
            if(wartosci.n1 !==null){
              setn1(JSON.parse(wartosci.n1))
            }
            if(wartosci.n2 !==null){
                setn2(JSON.parse(wartosci.n2))
            }
            if(wartosci.n3 !==null){
              setn3(JSON.parse(wartosci.n3))
             }
              if(wartosci.n4 !==null){
            setn4(JSON.parse(wartosci.n4))
            }
              if(wartosci.n5 !==null){
            setn5(JSON.parse(wartosci.n5))
            }
            if(wartosci.n6 !==null){
             setn6(JSON.parse(wartosci.n6))
            }
            if(wartosci.n7 !==null){
              setn7(JSON.parse(wartosci.n7))
            }
              if(wartosci.n8 !==null){
              setn8(JSON.parse(wartosci.n8))
              }
                //////////////////////////
    
                if(wartosci.vc1 !==null){
                  setvc1(JSON.parse(wartosci.vc1))
                }
                if(wartosci.vc2 !==null){
                    setvc2(JSON.parse(wartosci.vc2))
                }
                if(wartosci.vc3 !==null){
                  setvc3(JSON.parse(wartosci.vc3))
                 }
                  if(wartosci.vc4 !==null){
                setvc4(JSON.parse(wartosci.vc4))
                }
                  if(wartosci.vc5 !==null){
                setvc5(JSON.parse(wartosci.vc5))
                }
                if(wartosci.vc6 !==null){
                 setvc6(JSON.parse(wartosci.vc6))
                }
                if(wartosci.vc7 !==null){
                  setvc7(JSON.parse(wartosci.vc7))
                }
                  if(wartosci.vc8 !==null){
                  setvc8(JSON.parse(wartosci.vc8))
                  }
    
                  /////////////////////////////
    
                  if(wartosci.re1 !==null){
                    setre1(JSON.parse(wartosci.re1))
                  }
                  if(wartosci.re2 !==null){
                      setre2(JSON.parse(wartosci.re2))
                  }
                  if(wartosci.re3 !==null){
                    setre3(JSON.parse(wartosci.re3))
                   }
                    if(wartosci.re4 !==null){
                  setre4(JSON.parse(wartosci.re4))
                  }
                    if(wartosci.re5 !==null){
                  setre5(JSON.parse(wartosci.re5))
                  }
                  if(wartosci.re6 !==null){
                   setre6(JSON.parse(wartosci.re6))
                  }
                  if(wartosci.re7 !==null){
                    setre7(JSON.parse(wartosci.re7))
                  }
                    if(wartosci.re8 !==null){
                    setre8(JSON.parse(wartosci.re8))
                    }
                    ////////////////////////
    
                    if(wartosci.ra1 !==null){
                      setra1(JSON.parse(wartosci.ra1))
                    }
                    if(wartosci.ra2 !==null){
                        setra2(JSON.parse(wartosci.ra2))
                    }
                    if(wartosci.ra3 !==null){
                      setra3(JSON.parse(wartosci.ra3))
                     }
                      if(wartosci.ra4 !==null){
                    setra4(JSON.parse(wartosci.ra4))
                    }
                      if(wartosci.ra5 !==null){
                    setra5(JSON.parse(wartosci.ra5))
                    }
                    if(wartosci.ra6 !==null){
                     setra6(JSON.parse(wartosci.ra6))
                    }
                    if(wartosci.ra7 !==null){
                      setra7(JSON.parse(wartosci.ra7))
                    }
                      if(wartosci.ra8 !==null){
                      setra8(JSON.parse(wartosci.ra8))
                      }
       
        }
        catch(err){
          alert(err)
    
    
        }
        setisLoading(true)
      }
      useEffect(()=>{
        
        setisLoading(false)
     loaddane();
      },[])



      if(isLoading==true){
    return (

        <ScrollView>
        <View>
          <View style={styles.textstyle} >
         <Text style={styles.nazwy}>Przyrząd pomiarowy :  {Tokarka}</Text>
         
         
         </View>
         <View style={styles.mniejszaprzerwa}></View>
         <Text style={styles.wyrownanie}>Wielkości pomiarowe(teoretyczne)</Text>   
         <View style={styles.textstyle}>
         

         <Text style={styles.nazwy}>m :  {Material}</Text>
         <Text style={styles.nazwy}>zp :  {Narzedzia}</Text>
         </View>
         <View style={styles.mniejszaprzerwa}></View>
         <View style={styles.textstyle}>
         <Text style={styles.nazwy}>k : {Kr}</Text>
         <Text style={styles.nazwy}>W'p : {Krsecond}</Text>
         <Text style={styles.nazwy}>Wp : {ra8}</Text>
       </View>
       <View style={styles.mniejszaprzerwa}></View>
             
        <View style={styles.mniejszaprzerwa}></View>
        <View style={styles.textstyle}>
        
        <Text style={styles.nazwy}>hp : {ra4}</Text>
        <Text style={styles.nazwy}>sp : {ra5}</Text>
        </View>
       <View style={styles.mniejszaprzerwa}></View>
            <View 
            style={styles.textstyle}>
                <View style={styles.tabelka}>
                  <Text>Wp[mm]</Text>
            <Text>W1 = {dxl1}</Text>
            <Text>W2 = {dxl2}</Text>
            <Text>W3 = {dxl3}</Text>
            <Text>Wśr. = {dxl4}</Text>
            <Text>Wp = {dxl5}</Text>
        
            </View>
            <View style={styles.tabelka}>
            <Text>sp[mm]</Text>
            <Text>s1 = {n1}</Text>
            <Text>s2 = {n2}</Text>
            <Text>s3 = {n3}</Text>
            <Text>sśr. = {n4}</Text>
            <Text>sp = {n5}</Text>
        
            </View>
    
            </View>
            <View style={styles.mniejszaprzerwa}></View>
            <View><Text style={styles.wyrownanie}>m - Wielkośc pomiarowa(teoretyczna)</Text></View>
       <View><Text style={styles.wyrownanie}>W'p,Wp,h'p,s'p,hp,sp [mm]</Text></View>
          <View style={styles.mniejszaprzerwa}></View>
         
          
         
       
           <Button style={styles.borderbutton}
          title="Edycja Tabeli"
          color='#00ACD1'
          onPress={() => navigation.navigate('W4table')}
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
export default W4podsumowanie
