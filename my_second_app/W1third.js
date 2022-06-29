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


const W1third = function W1third({ navigation }) {
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
    const [Narzedzia,setNarzedzia]=useState();
    const [Kr,setKr]=useState();
    const [Krsecond,setKrsecond]=useState();
    const[MocTokarka,setMocTokarka]=useState();
    const[ap,setap]=useState();
    const[ośrodek,setośrodek]=useState();
    const[isLoading,setisLoading]=useState(false);
    var pi = 3.14;

    const loaddane = async () =>{
      
     
        try{
          let wartosci = {};
          wartosci.dxl1 = await AsyncStorage.getItem("Mydxl1")
          wartosci.dxl2 = await AsyncStorage.getItem("Mydxl2")
          wartosci.dxl3 = await AsyncStorage.getItem("Mydxl3")
          wartosci.dxl4 = await AsyncStorage.getItem("Mydxl4")
          wartosci.dxl5 = await AsyncStorage.getItem("Mydxl5")
          wartosci.dxl6 = await AsyncStorage.getItem("Mydxl6")
          wartosci.dxl7 = await AsyncStorage.getItem("Mydxl7")
          wartosci.dxl8 = await AsyncStorage.getItem("Mydxl8")
    
          wartosci.n1 = await AsyncStorage.getItem("Myn1")
          wartosci.n2 = await AsyncStorage.getItem("Myn2")
          wartosci.n3 = await AsyncStorage.getItem("Myn3")
          wartosci.n4 = await AsyncStorage.getItem("Myn4")
          wartosci.n5 = await AsyncStorage.getItem("Myn5")
          wartosci.n6 = await AsyncStorage.getItem("Myn6")
          wartosci.n7 = await AsyncStorage.getItem("Myn7")
          wartosci.n8 = await AsyncStorage.getItem("Myn8")
    
          wartosci.vc1 = await AsyncStorage.getItem("Myvc1")
          wartosci.vc2 = await AsyncStorage.getItem("Myvc2")
          wartosci.vc3 = await AsyncStorage.getItem("Myvc3")
          wartosci.vc4 = await AsyncStorage.getItem("Myvc4")
          wartosci.vc5 = await AsyncStorage.getItem("Myvc5")
          wartosci.vc6 = await AsyncStorage.getItem("Myvc6")
          wartosci.vc7 = await AsyncStorage.getItem("Myvc7")
          wartosci.vc8 = await AsyncStorage.getItem("Myvc8")
    
          wartosci.re1 = await AsyncStorage.getItem("Myre1")
          wartosci.re2 = await AsyncStorage.getItem("Myre2")
          wartosci.re3 = await AsyncStorage.getItem("Myre3")
          wartosci.re4 = await AsyncStorage.getItem("Myre4")
          wartosci.re5 = await AsyncStorage.getItem("Myre5")
          wartosci.re6 = await AsyncStorage.getItem("Myre6")
          wartosci.re7 = await AsyncStorage.getItem("Myre7")
          wartosci.re8 = await AsyncStorage.getItem("Myre8")
    
          wartosci.ra1 = await AsyncStorage.getItem("Myra1")
          wartosci.ra2 = await AsyncStorage.getItem("Myra2")
          wartosci.ra3 = await AsyncStorage.getItem("Myra3")
          wartosci.ra4 = await AsyncStorage.getItem("Myra4")
          wartosci.ra5 = await AsyncStorage.getItem("Myra5")
          wartosci.ra6 = await AsyncStorage.getItem("Myra6")
          wartosci.ra7 = await AsyncStorage.getItem("Myra7")
          wartosci.ra8 = await AsyncStorage.getItem("Myra8")
          wartosci.Tokarka = await AsyncStorage.getItem("MyTokarka")
          wartosci.MocTokarka = await AsyncStorage.getItem("MyMocTokarka")
          wartosci.Material = await AsyncStorage.getItem("MyMaterial")
          wartosci.Narzedzia = await AsyncStorage.getItem("MyNarzedzia")
          wartosci.Kr = await AsyncStorage.getItem("MyKr")
          wartosci.Krsecond = await AsyncStorage.getItem("MyKrsecond")
          wartosci.ap = await AsyncStorage.getItem("Myap")
          wartosci.ośrodek = await AsyncStorage.getItem("Myośrodek")

          if(wartosci.Tokarka !==null){
            setTokarka(wartosci.Tokarka)
    
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
          if(wartosci.ap !==null){
            setap(wartosci.ap)
    
          }
          if(wartosci.ośrodek !==null){
              setośrodek(wartosci.ośrodek)
  
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
        <View>
          <View style={styles.textstyle} >
         <Text style={styles.nazwy}>Tokarka : {Tokarka}</Text>
         <Text style={styles.nazwy}>Ps[kW] : {MocTokarka}</Text>
         </View>
         <View style={styles.mniejszaprzerwa}></View>
         <View style={styles.textstyle}>
        <Text 
          style={styles.nazwy}>Materiał obrabiany : {Material}</Text>
       </View>
       <View style={styles.mniejszaprzerwa}></View>
             <View style={styles.textstyle}>
        <Text style={styles.nazwy}>Narzędzie : {Narzedzia}</Text>
        <Text style={styles.nazwy}>Kr : {Kr}</Text>
        <Text style={styles.nazwy}>Kr' : {Krsecond}</Text>
        </View>
        <View style={styles.mniejszaprzerwa}></View>
          <View style={styles.textstyle}>
       <Text style={styles.nazwy}>ap : {ap}</Text>
       <Text style={styles.nazwy}>Ośrodek obróbkowy : {ośrodek}</Text>
       </View>
       <View style={styles.mniejszaprzerwa}></View>
            <View 
            style={styles.textstyle}>
                <View style={styles.tabelka}>
                  <Text>d[mm]</Text>
            <Text>{dxl1}</Text>
            <Text>{dxl2}</Text>
            <Text>{dxl3}</Text>
            <Text>{dxl4}</Text>
            <Text>{dxl5}</Text>
            <Text>{dxl6}</Text>
            <Text>{dxl7}</Text>
            <Text>{dxl8}</Text>
            </View>
            <View style={styles.tabelka}>
            <Text>n[obr/min]</Text>
            <Text>{n1}</Text>
            <Text>{n2}</Text>
            <Text>{n3}</Text>
            <Text>{n4}</Text>
            <Text>{n5}</Text>
            <Text>{n6}</Text>
            <Text>{n7}</Text>
            <Text>{n8}</Text>
            </View>
            <View style={styles.tabelka}>
                <Text>vc[m/min]</Text>
                <Text>{(pi*dxl1*n1/1000).toFixed(2)}</Text>
                <Text>{(pi*dxl2*n2/1000).toFixed(2)}</Text>
                <Text>{(pi*dxl3*n3/1000).toFixed(2)}</Text>
                <Text>{(pi*dxl4*n4/1000).toFixed(2)}</Text>
                <Text>{(pi*dxl5*n5/1000).toFixed(2)}</Text>
                <Text>{(pi*dxl6*n6/1000).toFixed(2)}</Text>
                <Text>{(pi*dxl7*n7/1000).toFixed(2)}</Text>
                <Text>{(pi*dxl8*n8/1000).toFixed(2)}</Text>
            </View>
            <View style={styles.tabelka}>
              <Text>f[mm/obr]</Text>
            <Text>{vc1}</Text>
            <Text>{vc2}</Text>
            <Text>{vc3}</Text>
            <Text>{vc4}</Text>
            <Text>{vc5}</Text>
            <Text>{vc6}</Text>
            <Text>{vc7}</Text>
            <Text>{vc8}</Text>
            </View>
            <View style={styles.tabelka}>
              <Text>re[mm]</Text>
            <Text>{re1}</Text>
            <Text>{re2}</Text>
            <Text>{re3}</Text>
            <Text>{re4}</Text>
            <Text>{re5}</Text>
            <Text>{re6}</Text>
            <Text>{re7}</Text>
            <Text>{re8}</Text> 
            </View>
            <View style={styles.tabelka}>
              <Text>Ra[um]</Text>
            <Text>{ra1}</Text>
            <Text>{ra2}</Text>
            <Text>{ra3}</Text>
            <Text>{ra4}</Text>
            <Text>{ra5}</Text>
            <Text>{ra6}</Text>
            <Text>{ra7}</Text>
            <Text>{ra8}</Text> 
            </View> 
            </View>
        
        
            <Button style={styles.borderbutton}
          title="Edycja Tabeli"
          color='#00ACD1'
          onPress={() => navigation.navigate('W1second')}
        />
         
       
        <Button style={styles.borderbutton}
          title="Podsumowanie-wykresy"
          color='#2799D5'
          onPress={() => navigation.navigate('chart')}
        />
          <Button style={styles.borderbutton}
          title="Powrót do strony początkowej"
          color='#5984CE'
          onPress={() => navigation.navigate('W1')}
        />
          <Button style={styles.borderbutton}
          title="Powrót do strony głównej"
          color='#806AB9'
          onPress={() => navigation.navigate('E-student')}
        />
      
        
        </View>
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
export default W1third 
