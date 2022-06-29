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


const W32podsumowanie2 = function W32podsumowanie2({ navigation }) {
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
    const[z,setz]=useState();
    const[Dc,setDc]=useState();
   
    const[isLoading,setisLoading]=useState(false);
    var pi = 3.14;

    const loaddane = async () =>{
      
     
        try{
          let wartosci = {};
          wartosci.dxl1 = await AsyncStorage.getItem("W32dxl1")
          wartosci.dxl2 = await AsyncStorage.getItem("W32dxl2")
          wartosci.dxl3 = await AsyncStorage.getItem("W32dxl3")
          wartosci.dxl4 = await AsyncStorage.getItem("W32dxl4")
          wartosci.dxl5 = await AsyncStorage.getItem("W32dxl5")
          wartosci.dxl6 = await AsyncStorage.getItem("W32dxl6")
          wartosci.dxl7 = await AsyncStorage.getItem("W32dxl7")
          wartosci.dxl8 = await AsyncStorage.getItem("W32dxl8")
    
          wartosci.n1 = await AsyncStorage.getItem("W32n1")
          wartosci.n2 = await AsyncStorage.getItem("W32n2")
          wartosci.n3 = await AsyncStorage.getItem("W32n3")
          wartosci.n4 = await AsyncStorage.getItem("W32n4")
          wartosci.n5 = await AsyncStorage.getItem("W32n5")
          wartosci.n6 = await AsyncStorage.getItem("W32n6")
          wartosci.n7 = await AsyncStorage.getItem("W32n7")
          wartosci.n8 = await AsyncStorage.getItem("W32n8")
    
          wartosci.vc1 = await AsyncStorage.getItem("W32vc1")
          wartosci.vc2 = await AsyncStorage.getItem("W32vc2")
          wartosci.vc3 = await AsyncStorage.getItem("W32vc3")
          wartosci.vc4 = await AsyncStorage.getItem("W32vc4")
          wartosci.vc5 = await AsyncStorage.getItem("W32vc5")
          wartosci.vc6 = await AsyncStorage.getItem("W32vc6")
          wartosci.vc7 = await AsyncStorage.getItem("W32vc7")
          wartosci.vc8 = await AsyncStorage.getItem("W32vc8")
    
          wartosci.re1 = await AsyncStorage.getItem("W32re1")
          wartosci.re2 = await AsyncStorage.getItem("W32re2")
          wartosci.re3 = await AsyncStorage.getItem("W32re3")
          wartosci.re4 = await AsyncStorage.getItem("W32re4")
          wartosci.re5 = await AsyncStorage.getItem("W32re5")
          wartosci.re6 = await AsyncStorage.getItem("W32re6")
          wartosci.re7 = await AsyncStorage.getItem("W32re7")
          wartosci.re8 = await AsyncStorage.getItem("W32re8")
    
          wartosci.ra1 = await AsyncStorage.getItem("W32ra1")
          wartosci.ra2 = await AsyncStorage.getItem("W32ra2")
          wartosci.ra3 = await AsyncStorage.getItem("W32ra3")
          wartosci.ra4 = await AsyncStorage.getItem("W32ra4")
          wartosci.ra5 = await AsyncStorage.getItem("W32ra5")
          wartosci.ra6 = await AsyncStorage.getItem("W32ra6")
          wartosci.ra7 = await AsyncStorage.getItem("W32ra7")
          wartosci.ra8 = await AsyncStorage.getItem("W32ra8")
          wartosci.Tokarka = await AsyncStorage.getItem("W3Material2")
          wartosci.MocTokarka = await AsyncStorage.getItem("W3Narzędzie2")
          wartosci.Material = await AsyncStorage.getItem("W3profilometr")
          wartosci.Narzedzia = await AsyncStorage.getItem("W3cieczobróbkowa2")
          wartosci.Krsecond = await AsyncStorage.getItem("W3Dc2")
          wartosci.z = await AsyncStorage.getItem("W3z2")
          wartosci.Dc = await AsyncStorage.getItem("W3Dc")

          if(wartosci.Tokarka !==null){
            setTokarka(wartosci.Tokarka)
    
          }
          if(wartosci.Dc!==null){
            setDc(wartosci.Dc)
    
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
          
          if(wartosci.Krsecond !==null){
            setKrsecond(wartosci.Krsecond)
    
          }
          if(wartosci.z !==null){
            setz(wartosci.z)
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
         <Text style={styles.nazwy}>Materiał obrabiany :  {Tokarka}</Text>
         
         
         </View>
         <View style={styles.mniejszaprzerwa}></View>

         <View style={styles.textstyle}>
         <Text style={styles.nazwy}>Profilometr cyfrowy :  {Material}</Text>

         </View>
         <View style={styles.mniejszaprzerwa}></View>
         <View style={styles.textstyle}>
         <Text style={styles.nazwy}>Narzędzie : {MocTokarka}</Text>
         
        <Text style={styles.nazwy}>Dc : {Krsecond}</Text>
       </View>
       <View style={styles.mniejszaprzerwa}></View>
             <View style={styles.textstyle}>
        
        <Text style={styles.nazwy}>z : {z}</Text>
        <Text style={styles.nazwy}>Ciecz obróbkowa : {Narzedzia}</Text>
        </View>
        <View style={styles.mniejszaprzerwa}></View>
          
       <View style={styles.mniejszaprzerwa}></View>
            <View 
            style={styles.textstyle}>
                <View style={styles.tabelka}>
                  <Text>vc</Text>
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
            <Text>vf</Text>
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
                <Text>fz</Text>
                <Text>{((n1/((1000*dxl1)/(pi*Dc)))/z).toFixed(2)}</Text>
                <Text>{((n2/((1000*dxl2)/(pi*Dc)))/z).toFixed(2)}</Text>
                <Text>{((n3/((1000*dxl3)/(pi*Dc)))/z).toFixed(2)}</Text>
                <Text>{((n4/((1000*dxl4)/(pi*Dc)))/z).toFixed(2)}</Text>
                <Text>{((n5/((1000*dxl5)/(pi*Dc)))/z).toFixed(2)}</Text>
                <Text>{((n6/((1000*dxl6)/(pi*Dc)))/z).toFixed(2)}</Text>
                <Text>{((n7/((1000*dxl7)/(pi*Dc)))/z).toFixed(2)}</Text>
                <Text>{((n8/((1000*dxl8)/(pi*Dc)))/z).toFixed(2)}</Text>
            </View>
            <View style={styles.tabelka}>
              <Text>ap</Text>
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
              <Text>Ra*</Text>
            <Text>{re1}</Text>
            <Text>{re2}</Text>
            <Text>{re3}</Text>
            <Text>{re4}</Text>
            <Text>{re5}</Text>
            <Text>{re6}</Text>
            <Text>{re7}</Text>
            <Text>{re8}</Text> 
            </View>
          
            </View>
            <View style={styles.mniejszaprzerwa}></View>
            <View><Text>vc[m/min]</Text></View>
            <View><Text>vf[mm/min]</Text></View>
            <View><Text>fz[mm/ostrze]</Text></View>
            <View><Text>ap[mm]</Text></View>
            <View><Text>Ra[um]</Text></View>
            <View><Text>Ra[um]</Text></View>
            <View><Text>* - Frezowanie na sucho</Text></View>
          
        
        
           
         
       
        
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
export default W32podsumowanie2
