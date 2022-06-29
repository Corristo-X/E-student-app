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



const W3table = function W3table({ navigation }) {

 
   
  
 
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
          
          await AsyncStorage.setItem("W3dxl1",dxl1);
          await AsyncStorage.setItem("W3dxl2",dxl2);
          await AsyncStorage.setItem("W3dxl3",dxl3);
          await AsyncStorage.setItem("W3dxl4",dxl4);
          await AsyncStorage.setItem("W3dxl5",dxl5);
          await AsyncStorage.setItem("W3dxl6",dxl6);
          await AsyncStorage.setItem("W3dxl7",dxl7);
          await AsyncStorage.setItem("W3dxl8",dxl8);
          
          await AsyncStorage.setItem("W3n1",n1);
          await AsyncStorage.setItem("W3n2",n2);
          await AsyncStorage.setItem("W3n3",n3);
          await AsyncStorage.setItem("W3n4",n4);
          await AsyncStorage.setItem("W3n5",n5);
          await AsyncStorage.setItem("W3n6",n6);
          await AsyncStorage.setItem("W3n7",n7);
          await AsyncStorage.setItem("W3n8",n8);

          await AsyncStorage.setItem("W3vc1",vc1);
          await AsyncStorage.setItem("W3vc2",vc2);
          await AsyncStorage.setItem("W3vc3",vc3);
          await AsyncStorage.setItem("W3vc4",vc4);
          await AsyncStorage.setItem("W3vc5",vc5);
          await AsyncStorage.setItem("W3vc6",vc6);
          await AsyncStorage.setItem("W3vc7",vc7);
          await AsyncStorage.setItem("W3vc8",vc8);

          await AsyncStorage.setItem("W3re1",re1);
          await AsyncStorage.setItem("W3re2",re2);
          await AsyncStorage.setItem("W3re3",re3);
          await AsyncStorage.setItem("W3re4",re4);
          await AsyncStorage.setItem("W3re5",re5);
          await AsyncStorage.setItem("W3re6",re6);
          await AsyncStorage.setItem("W3re7",re7);
          await AsyncStorage.setItem("W3re8",re8);
          

          await AsyncStorage.setItem("W3ra1",ra1);
          await AsyncStorage.setItem("W3ra2",ra2);
          await AsyncStorage.setItem("W3ra3",ra3);
          await AsyncStorage.setItem("W3ra4",ra4);
          await AsyncStorage.setItem("W3ra5",ra5);
          await AsyncStorage.setItem("W3ra6",ra6);
          await AsyncStorage.setItem("W3ra7",ra7);
          await AsyncStorage.setItem("W3ra8",ra8);

    }catch(err)
    {
      alert(err)

    }
      loaddane();
  }
  const loaddane = async () =>{
    try{
      let zmienne = {};
      zmienne.dxl1 = await AsyncStorage.getItem("W3dxl1")
      zmienne.dxl2 = await AsyncStorage.getItem("W3dxl2")
      zmienne.dxl3 = await AsyncStorage.getItem("W3dxl3")
      zmienne.dxl4 = await AsyncStorage.getItem("W3dxl4")
      zmienne.dxl5 = await AsyncStorage.getItem("W3dxl5")
      zmienne.dxl6 = await AsyncStorage.getItem("W3dxl6")
      zmienne.dxl7 = await AsyncStorage.getItem("W3dxl7")
      zmienne.dxl8 = await AsyncStorage.getItem("W3dxl8")

      zmienne.n1 = await AsyncStorage.getItem("W3n1")
      zmienne.n2 = await AsyncStorage.getItem("W3n2")
      zmienne.n3 = await AsyncStorage.getItem("W3n3")
      zmienne.n4 = await AsyncStorage.getItem("W3n4")
      zmienne.n5 = await AsyncStorage.getItem("W3n5")
      zmienne.n6 = await AsyncStorage.getItem("W3n6")
      zmienne.n7 = await AsyncStorage.getItem("W3n7")
      zmienne.n8 = await AsyncStorage.getItem("W3n8")

      zmienne.vc1 = await AsyncStorage.getItem("W3vc1")
      zmienne.vc2 = await AsyncStorage.getItem("W3vc2")
      zmienne.vc3 = await AsyncStorage.getItem("W3vc3")
      zmienne.vc4 = await AsyncStorage.getItem("W3vc4")
      zmienne.vc5 = await AsyncStorage.getItem("W3vc5")
      zmienne.vc6 = await AsyncStorage.getItem("W3vc6")
      zmienne.vc7 = await AsyncStorage.getItem("W3vc7")
      zmienne.vc8 = await AsyncStorage.getItem("W3vc8")

      zmienne.re1 = await AsyncStorage.getItem("W3re1")
      zmienne.re2 = await AsyncStorage.getItem("W3re2")
      zmienne.re3 = await AsyncStorage.getItem("W3re3")
      zmienne.re4 = await AsyncStorage.getItem("W3re4")
      zmienne.re5 = await AsyncStorage.getItem("W3re5")
      zmienne.re6 = await AsyncStorage.getItem("W3re6")
      zmienne.re7 = await AsyncStorage.getItem("W3re7")
      zmienne.re8 = await AsyncStorage.getItem("W3re8")

      zmienne.ra1 = await AsyncStorage.getItem("W3ra1")
      zmienne.ra2 = await AsyncStorage.getItem("W3ra2")
      zmienne.ra3 = await AsyncStorage.getItem("W3ra3")
      zmienne.ra4 = await AsyncStorage.getItem("W3ra4")
      zmienne.ra5 = await AsyncStorage.getItem("W3ra5")
      zmienne.ra6 = await AsyncStorage.getItem("W3ra6")
      zmienne.ra7 = await AsyncStorage.getItem("W3ra7")
      zmienne.ra8 = await AsyncStorage.getItem("W3ra8")

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
      if(zmienne.dxl6 !==null){
       setdxl6(zmienne.dxl6)
      }
      if(zmienne.dxl7 !==null){
        setdxl7(zmienne.dxl7)
      }
        if(zmienne.dxl8 !==null){
        setdxl8(zmienne.dxl8)
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
        if(zmienne.n6 !==null){
         setn6(zmienne.n6)
        }
        if(zmienne.n7 !==null){
          setn7(zmienne.n7)
        }
          if(zmienne.n8 !==null){
          setn8(zmienne.n8)
          }
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
              if(zmienne.vc5 !==null){
            setvc5(zmienne.vc5)
            }
            if(zmienne.vc6 !==null){
             setvc6(zmienne.vc6)
            }
            if(zmienne.vc7 !==null){
              setvc7(zmienne.vc7)
            }
              if(zmienne.vc8 !==null){
              setvc8(zmienne.vc8)
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
   
    }
    catch(err){
      alert(err)


    }
    setisLoading(true);
  }
  const removedane = async()=>{
    
    try{
        await AsyncStorage.removeItem("W3dxl1")
        await AsyncStorage.removeItem("W3dxl2")
        await AsyncStorage.removeItem("W3dxl3")
        await AsyncStorage.removeItem("W3dxl4")
        await AsyncStorage.removeItem("W3dxl5")
        await AsyncStorage.removeItem("W3dxl6")
        await AsyncStorage.removeItem("W3dxl7")
        await AsyncStorage.removeItem("W3dxl8")

        await AsyncStorage.removeItem("W3n1")
        await AsyncStorage.removeItem("W3n2")
        await AsyncStorage.removeItem("W3n3")
        await AsyncStorage.removeItem("W3n4")
        await AsyncStorage.removeItem("W3n5")
        await AsyncStorage.removeItem("W3n6")
        await AsyncStorage.removeItem("W3n7")
        await AsyncStorage.removeItem("W3n8")

        await AsyncStorage.removeItem("W3vc1")
        await AsyncStorage.removeItem("W3vc2")
        await AsyncStorage.removeItem("W3vc3")
        await AsyncStorage.removeItem("W3vc4")
        await AsyncStorage.removeItem("W3vc5")
        await AsyncStorage.removeItem("W3vc6")
        await AsyncStorage.removeItem("W3vc7")
        await AsyncStorage.removeItem("W3vc8")
        
        await AsyncStorage.removeItem("W3re1")
        await AsyncStorage.removeItem("W3re2")
        await AsyncStorage.removeItem("W3re3")
        await AsyncStorage.removeItem("W3re4")
        await AsyncStorage.removeItem("W3re5")
        await AsyncStorage.removeItem("W3re6")
        await AsyncStorage.removeItem("W3re7")
        await AsyncStorage.removeItem("W3re8")

        await AsyncStorage.removeItem("W3ra1")
        await AsyncStorage.removeItem("W3ra2")
        await AsyncStorage.removeItem("W3ra3")
        await AsyncStorage.removeItem("W3ra4")
        await AsyncStorage.removeItem("W3ra5")
        await AsyncStorage.removeItem("W3ra6")
        await AsyncStorage.removeItem("W3ra7")
        await AsyncStorage.removeItem("W3ra8")
       
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
        setdxl6("")
        setdxl7("")
        setdxl8("")
       ///////////////////////
       setn1("")
       setn2("")
       setn3("")
       setn4("")
       setn5("")
       setn6("")
       setn7("")
       setn8("")
        /////////////////////////
        setvc1("")
        setvc2("")
        setvc3("")
        setvc4("")
        setvc5("")
        setvc6("")
        setvc7("")
        setvc8("")
        ////////////////////
        setre1("")
        setre2("")
        setre3("")
        setre4("")
        setre5("")
        setre6("")
        setre7("")
        setre8("")
        //////////////////////
        setra1("")
        setra2("")
        setra3("")
        setra4("")
        setra5("")
        setra6("")
        setra7("")
        setra8("")
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
          <View ><Text style={styles.boldx2}>Tabela 1</Text></View>
          <View style={styles.mniejszaprzerwa}></View>
          <View style={styles.textstyle}>
          <View>
            <Text>vc</Text>
            <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl1(text)}
        placeholder="vc[m/min]"
        />
        <Text>{dxl1}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl2(text)}
        placeholder="vc[m/min]"
        />
        <Text>{dxl2}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl3(text)}
        placeholder="vc[m/min]"
        />
        <Text>{dxl3}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl4(text)}
        placeholder="vc[m/min]"
        />
        <Text>{dxl4}</Text>

        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl5(text)}
        placeholder="vc[m/min]"
        />
        <Text>{dxl5}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl6(text)}
        placeholder="vc[m/min]"
        />
        <Text>{dxl6}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl7(text)}
        placeholder="vc[m/min]"
        />
        <Text>{dxl7}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setdxl8(text)}
        placeholder="vc[m/min]"
        />
        <Text>{dxl8}</Text>
        
      
        
        
     
          </View>
          
          <View>
            <Text>vf[mm/min]</Text>
            <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn1(text)}
        placeholder="vf[mm/min]"
        />
        <Text>{n1}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn2(text)}
        placeholder="vf[mm/min]"
        />
        <Text>{n2}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn3(text)}
        placeholder="vf[mm/min]"
        />
        <Text>{n3}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn4(text)}
        placeholder="vf[mm/min]"
        />
        <Text>{n4}</Text>

        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn5(text)}
        placeholder="vf[mm/min]"
        />
        <Text>{n5}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn6(text)}
        placeholder="vf[mm/min]"
        />
        <Text>{n6}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn7(text)}
        placeholder="vf[mm/min]"
        />
        <Text>{n7}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setn8(text)}
        placeholder="vf[mm/min]"
        />
        <Text>{n8}</Text>
          </View>
          
          <View>
            <Text>ap[mm]</Text>
            <TextInput style={styles.inputW1second}
        onChangeText={(text) => setvc1(text)}
        placeholder="ap[mm]"
        />
        <Text>{vc1}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setvc2(text)}
        placeholder="ap[mm]"
        />
        <Text>{vc2}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setvc3(text)}
        placeholder="ap[mm]"
        />
        <Text>{vc3}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setvc4(text)}
        placeholder="ap[mm]"
        />
        <Text>{vc4}</Text>

        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setvc5(text)}
        placeholder="ap[mm]"
        />
        <Text>{vc5}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setvc6(text)}
        placeholder="ap[mm]"
        />
        <Text>{vc6}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setvc7(text)}
        placeholder="ap[mm]"
        />
        <Text>{vc7}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setvc8(text)}
        placeholder="ap[mm]"
        />
        <Text>{vc8}</Text>
          </View>
          
          <View>
            <Text>Ra[um]*</Text>
            <TextInput style={styles.inputW1second}
        onChangeText={(text) => setre1(text)}
        placeholder="Ra[um]"
        />
        <Text>{re1}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setre2(text)}
        placeholder="Ra[um]"
        />
        <Text>{re2}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setre3(text)}
        placeholder="Ra[um]"
        />
        <Text>{re3}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setre4(text)}
        placeholder="Ra[um]"
        />
        <Text>{re4}</Text>

        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setre5(text)}
        placeholder="Ra[um]"
        />
        <Text>{re5}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setre6(text)}
        placeholder="Ra[um]"
        />
        <Text>{re6}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setre7(text)}
        placeholder="Ra[um]"
        />
        <Text>{re7}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setre8(text)}
        placeholder="Ra[um]"
        />
        <Text>{re8}</Text>
          </View>
          
          <View>
            <Text>Ra[um]**</Text>
            <TextInput style={styles.inputW1second}
        onChangeText={(text) => setra1(text)}
        placeholder="Ra[um]"
        />
        <Text>{ra1}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setra2(text)}
        placeholder="Ra[um]"
        />
        <Text>{ra2}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setra3(text)}
        placeholder="Ra[um]"
        />
        <Text>{ra3}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setra4(text)}
        placeholder="Ra[um]"
        />
        <Text>{ra4}</Text>

        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setra5(text)}
        placeholder="Ra[um]"
        />
        <Text>{ra5}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setra6(text)}
        placeholder="Ra[um]"
        />
        <Text>{ra6}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setra7(text)}
        placeholder="Ra[um]"
        />
        <Text>{ra7}</Text>
        <TextInput style={styles.inputW1second}
        onChangeText={(text) => setra8(text)}
        placeholder="Ra[um]"
        />
        <Text>{ra8}</Text>
          </View>
          
          
          
          </View>
          
          <View style={styles.mniejszaprzerwa}></View>
          <View><Text>* - Frezowanie na sucho</Text></View>
          <View><Text>** - Frezowanie z cieczą obróbkową</Text></View>
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
          title="Powrót do edycji danych"
          color='#806AB9'
          onPress={() => navigation.navigate('W3')}
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
  export default W3table
  
  
  