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


const W2podsumowanie = function W2podsumowanie({ navigation }) {
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
          wartosci.dxl1 = await AsyncStorage.getItem("W2dxl1")
          wartosci.dxl2 = await AsyncStorage.getItem("W2dxl2")
          wartosci.dxl3 = await AsyncStorage.getItem("W2dxl3")
          wartosci.dxl4 = await AsyncStorage.getItem("W2dxl4")
          wartosci.dxl5 = await AsyncStorage.getItem("W2dxl5")
          wartosci.dxl6 = await AsyncStorage.getItem("W2dxl6")
          wartosci.dxl7 = await AsyncStorage.getItem("W2dxl7")
          wartosci.dxl8 = await AsyncStorage.getItem("W2dxl8")
    
          wartosci.n1 = await AsyncStorage.getItem("W2n1")
          wartosci.n2 = await AsyncStorage.getItem("W2n2")
          wartosci.n3 = await AsyncStorage.getItem("W2n3")
          wartosci.n4 = await AsyncStorage.getItem("W2n4")
          wartosci.n5 = await AsyncStorage.getItem("W2n5")
          wartosci.n6 = await AsyncStorage.getItem("W2n6")
          wartosci.n7 = await AsyncStorage.getItem("W2n7")
          wartosci.n8 = await AsyncStorage.getItem("W2n8")
    
          wartosci.vc1 = await AsyncStorage.getItem("W2vc1")
          wartosci.vc2 = await AsyncStorage.getItem("W2vc2")
          wartosci.vc3 = await AsyncStorage.getItem("W2vc3")
          wartosci.vc4 = await AsyncStorage.getItem("W2vc4")
          wartosci.vc5 = await AsyncStorage.getItem("W2vc5")
          wartosci.vc6 = await AsyncStorage.getItem("W2vc6")
          wartosci.vc7 = await AsyncStorage.getItem("W2vc7")
          wartosci.vc8 = await AsyncStorage.getItem("W2vc8")
    
          wartosci.re1 = await AsyncStorage.getItem("W2re1")
          wartosci.re2 = await AsyncStorage.getItem("W2re2")
          wartosci.re3 = await AsyncStorage.getItem("W2re3")
          wartosci.re4 = await AsyncStorage.getItem("W2re4")
          wartosci.re5 = await AsyncStorage.getItem("W2re5")
          wartosci.re6 = await AsyncStorage.getItem("W2re6")
          wartosci.re7 = await AsyncStorage.getItem("W2re7")
          wartosci.re8 = await AsyncStorage.getItem("W2re8")
    
          wartosci.ra1 = await AsyncStorage.getItem("W2ra1")
          wartosci.ra2 = await AsyncStorage.getItem("W2ra2")
          wartosci.ra3 = await AsyncStorage.getItem("W2ra3")
          wartosci.ra4 = await AsyncStorage.getItem("W2ra4")
          wartosci.ra5 = await AsyncStorage.getItem("W2ra5")
          wartosci.ra6 = await AsyncStorage.getItem("W2ra6")
          wartosci.ra7 = await AsyncStorage.getItem("W2ra7")
          wartosci.ra8 = await AsyncStorage.getItem("W2ra8")
          wartosci.Tokarka = await AsyncStorage.getItem("W2MaterialObrabiany")
          wartosci.MocTokarka = await AsyncStorage.getItem("W2NazwaObrabiarki")
          wartosci.Material = await AsyncStorage.getItem("W2rm")
          wartosci.Narzedzia = await AsyncStorage.getItem("W2Dc")
          wartosci.Kr = await AsyncStorage.getItem("W2cieczobróbkowa")
          wartosci.Krsecond = await AsyncStorage.getItem("W2Osrodekobrobkowy")
          wartosci.Dc = await AsyncStorage.getItem("W2Dc")
          wartosci.z = await AsyncStorage.getItem("W2z")

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
          //  setn4(JSON.parse(wartosci.n4))
                setn4(wartosci.n4)
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
         <Text style={styles.nazwy}>Rm[MPa] :  {Material}</Text>
         </View>
      
         <View style={styles.mniejszaprzerwa}></View>
         <View style={styles.textstyle}>
         <Text style={styles.nazwy}>Obrabiarka : {MocTokarka}</Text>
       </View>

       <View style={styles.mniejszaprzerwa}></View>

        <View style={styles.textstyle}>
        
        <Text style={styles.nazwy}>Ośrodek Obróbkowy : {Krsecond}</Text>
        </View>
        <View style={styles.mniejszaprzerwa}></View>
        <View ><Text style={styles.bold}>Tabela 1</Text></View>
       <View style={styles.mniejszaprzerwa}></View>
            <View 
            style={styles.textstyle}>
                <View style={styles.tabelka}>
                  <Text>z</Text>
            <Text>{dxl1}</Text>
            <Text>{dxl2}</Text>
            <Text>{dxl3}</Text>
            <Text>{dxl4}</Text>
         
            </View>
            <View style={styles.tabelka}>
            <Text>d</Text>
            <Text>{n1}</Text>
            <Text>{n2}</Text>
            <Text>{n3}</Text>
            <Text>{n4}</Text>
         
            </View>
            <View style={styles.tabelka}>
                <Text>Do</Text>
                <Text>{vc1}</Text>
            <Text>{vc2}</Text>
            <Text>{vc3}</Text>
            <Text>{vc4}</Text>
         
            </View>
            <View style={styles.tabelka}>
              <Text>l</Text>
              <Text>{vc5}</Text>
            <Text>{vc6}</Text>
            <Text>{vc7}</Text>
            <Text>{vc8}</Text>
            </View>
            <View style={styles.tabelka}>
              <Text>ap</Text>
              <Text>{(n1/2).toFixed(1)}</Text>
            <Text>{((n2-vc1)/2).toFixed(1)}</Text>
            <Text>{((n3-vc1)/2).toFixed(1)}</Text>
            <Text>{((n4-vc3)/2).toFixed(1)}</Text>
            </View>
            <View style={styles.tabelka}>
              <Text>f</Text>
              <Text>{(re1/ra1).toFixed(1)}</Text>
            <Text>{(re2/ra2).toFixed(1)}</Text>
            <Text>{(re3/ra3).toFixed(1)}</Text>
            <Text>{(re4/ra4).toFixed(1)}</Text>
            </View>
            <View style={styles.tabelka}>
              <Text>fz</Text>
            
            </View>
            
            <View style={styles.tabelka}>
              <Text>vf</Text>
            <Text>{re1}</Text>
            <Text>{re2}</Text>
            <Text>{re3}</Text>
            <Text>{re4}</Text>
          
            </View>
            <View style={styles.tabelka}>
              <Text>n</Text>
            <Text>{ra1}</Text>
            <Text>{ra2}</Text>
            <Text>{ra3}</Text>
            <Text>{ra4}</Text>
          
            </View> 
            <View style={styles.tabelka}>
              <Text>vc</Text>
              <Text>{((pi*n1*ra1)/(1000)).toFixed(1)}</Text>
            <Text>{((pi*n2*ra2)/(1000)).toFixed(1)}</Text>
            <Text>{((pi*n3*ra3)/(1000)).toFixed(1)}</Text>
            <Text>{((pi*n4*ra4)/(1000)).toFixed(1)}</Text>
            </View>
            </View>
            <View style={styles.mniejszaprzerwa}></View>
          
          <View><Text>z i d - Wymiary narzędzia [mm]</Text></View>
          <View><Text>Do i l - Wymiary otworu[mm]</Text></View>
          <View style={styles.mniejszaprzerwa}></View>

          <View><Text> 1 wiersz - Wiercenie</Text></View>
          <View><Text> 2 wiersz - Pogłębnianie</Text></View>
          <View><Text> 3 wiersz - Roziercanie zgrubne</Text></View>
          <View><Text> 4 wiersz - Rozwiercanie wykańczające</Text></View>
          <View style={styles.mniejszaprzerwa}></View>
          <View><Text> Parametry skrawania :</Text></View>
          <View style={styles.mniejszaprzerwa}></View>
          <View><Text>ap[mm]</Text></View>
          <View><Text> f[mm/obr]</Text></View>
          <View><Text> vf[mm/min]</Text></View>
          <View><Text> n[obr/min]</Text></View>
          <View><Text> vc[m/min]</Text></View>
          <View style={styles.mniejszaprzerwa}></View>
          <View ><Text style={styles.bold}>Tabela 2</Text></View>
          <View style={styles.mniejszaprzerwa}></View>
          <View style={stykes.mniejszaprzerwa}> Test GIT</View>
          <View 
            style={styles.textstyle}>
               
            <View style={styles.tabelka}>
              
            <Text>tm[min]</Text>
            <Text>{(((0.3*vc1)+vc5+1)/(re1)).toFixed(2)}</Text>
            <Text>{(((0.3*vc2)+vc6+0)/(re2)).toFixed(2)}</Text>
            <Text>{(((0.3*vc3)+vc7+1)/(re3)).toFixed(2)}</Text>
            <Text>{(((0.3*vc4)+vc8+4)/(re4)).toFixed(2)}</Text>
         
            </View>
            <View style={styles.tabelka}>
                <Text>Qv[mm^3/min]</Text>
                <Text>{(1000*(n1/2)*(re1/ra1)*((pi*n1*ra1)/(1000))).toFixed(2)}</Text>
            <Text>{(1000*((n2-vc1)/2)*(re2/ra2)*((pi*n2*ra2)/(1000))).toFixed(2)}</Text>
            <Text>{(1000*((n3-vc1)/2)*(re3/ra3)*((pi*n3*ra3)/(1000))).toFixed(2)}</Text>
            <Text>{(1000*((n4-vc3)/2)*(re4/ra4)*((pi*n4*ra4)/(1000))).toFixed(2)}</Text>
         
            </View>
            <View style={styles.tabelka}>
              <Text>Qf[mm^2/min]</Text>
              <Text>{(1000*(re1/ra1)*((pi*n1*ra1)/(1000))).toFixed(2)}</Text>
            <Text>{(1000*(re2/ra2)*((pi*n2*ra2)/(1000))).toFixed(2)}</Text>
            <Text>{(1000*(re3/ra3)*((pi*n3*ra3)/(1000))).toFixed(2)}</Text>
            <Text>{(1000*(re4/ra4)*((pi*n4*ra4)/(1000))).toFixed(2)}</Text>
            </View>
            </View>
            <View style={styles.mniejszaprzerwa}></View>
            <View><Text> Czas maszynowy tm[min]</Text></View>
          <View><Text> Wydajność objętościowa Qv[mm^3/min]</Text></View>
          <View><Text> Wydajność powierzchniowa Qf[mm^2/min]</Text></View>
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
          title="Powrót do edycji danych"
          color='#A5316A'
          onPress={() => navigation.navigate('W2')}
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
export default W2podsumowanie
