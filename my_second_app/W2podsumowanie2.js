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


const W2podsumowanie2 = function W2podsumowanie2({ navigation }) {
    const [dxl1,setdxl1]=useState();
    const [dxl2,setdxl2]=useState();
   const [dxl3,setdxl3]=useState();
    const [dxl4,setdxl4]=useState();
    const [dxl5,setdxl5]=useState();
    const [dxl6,setdxl6]=useState();
    const [dxl7,setdxl7]=useState();
    const [dxl8,setdxl8]=useState();
    const [dxl11,setdxl11]=useState();
    const [dxl12,setdxl12]=useState();
   const [dxl13,setdxl13]=useState();
    const [dxl14,setdxl14]=useState();
    const [dxl15,setdxl15]=useState();
    const [dxl16,setdxl16]=useState();
  
    
    const[n1,setn1]=useState();
    const[n2,setn2]=useState();
    const[n3,setn3]=useState();
    const[n4,setn4]=useState();
    const[n5,setn5]=useState();
    const[n6,setn6]=useState();
    const[n7,setn7]=useState();
    const[n8,setn8]=useState();
    const[n11,setn11]=useState();
    const[n12,setn12]=useState();
    const[n13,setn13]=useState();
    const[n14,setn14]=useState();
    const[n15,setn15]=useState();
    const[n16,setn16]=useState();
  
    const[vc1,setvc1]=useState();
    const[vc2,setvc2]=useState();
    const[vc3,setvc3]=useState();
    const[vc4,setvc4]=useState();
    const[vc5,setvc5]=useState();
    const[vc6,setvc6]=useState();
    const[vc7,setvc7]=useState();
    const[vc8,setvc8]=useState();
    const[vc11,setvc11]=useState();
    const[vc12,setvc12]=useState();
    const[vc13,setvc13]=useState();
    const[vc14,setvc14]=useState();
    const[vc15,setvc15]=useState();
    const[vc16,setvc16]=useState();
  
    const[re1,setre1]=useState();
    const[re2,setre2]=useState();
    const[re3,setre3]=useState();
    const[re4,setre4]=useState();
    const[re5,setre5]=useState();
    const[re6,setre6]=useState();
    const[re7,setre7]=useState();
    const[re8,setre8]=useState();
    const[re11,setre11]=useState();
    const[re12,setre12]=useState();
    const[re13,setre13]=useState();
    const[re14,setre14]=useState();
    const[re15,setre15]=useState();
    const[re16,setre16]=useState();
  
    const[ra1,setra1]=useState();
    const[ra2,setra2]=useState();
    const[ra3,setra3]=useState();
    const[ra4,setra4]=useState();
    const[ra5,setra5]=useState();
    const[ra6,setra6]=useState();
    const[ra7,setra7]=useState();
    const[ra8,setra8]=useState();

    const[ra11,setra11]=useState();
    const[ra12,setra12]=useState();
    const[ra13,setra13]=useState();
    const[ra14,setra14]=useState();
    const[ra15,setra15]=useState();
    const[ra16,setra16]=useState();
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
          wartosci.dxl1 = await AsyncStorage.getItem("W2dxl1.2")
          wartosci.dxl2 = await AsyncStorage.getItem("W2dxl2.2")
          wartosci.dxl3 = await AsyncStorage.getItem("W2dxl3.2")
          wartosci.dxl4 = await AsyncStorage.getItem("W2dxl4.2")
          wartosci.dxl5 = await AsyncStorage.getItem("W2dxl5.2")
          wartosci.dxl6 = await AsyncStorage.getItem("W2dxl6.2")
          wartosci.dxl7 = await AsyncStorage.getItem("W2dxl7")
          wartosci.dxl8 = await AsyncStorage.getItem("W2dxl8")
          wartosci.dxl11 = await AsyncStorage.getItem("W2dxl1.3")
          wartosci.dxl12 = await AsyncStorage.getItem("W2dxl2.3")
          wartosci.dxl13 = await AsyncStorage.getItem("W2dxl3.3")
          wartosci.dxl14 = await AsyncStorage.getItem("W2dxl4.3")
          wartosci.dxl15 = await AsyncStorage.getItem("W2dxl5.3")
          wartosci.dxl16 = await AsyncStorage.getItem("W2dxl6.3")
      
    
          wartosci.n1 = await AsyncStorage.getItem("W2n1.2")
          wartosci.n2 = await AsyncStorage.getItem("W2n2.2")
          wartosci.n3 = await AsyncStorage.getItem("W2n3.2")
          wartosci.n4 = await AsyncStorage.getItem("W2n4.2")
          wartosci.n5 = await AsyncStorage.getItem("W2n5.2")
          wartosci.n6 = await AsyncStorage.getItem("W2n6.2")
          wartosci.n7 = await AsyncStorage.getItem("W2n7")
          wartosci.n8 = await AsyncStorage.getItem("W2n8")

          wartosci.n11 = await AsyncStorage.getItem("W2n1.3")
          wartosci.n12 = await AsyncStorage.getItem("W2n2.3")
          wartosci.n13 = await AsyncStorage.getItem("W2n3.3")
          wartosci.n14 = await AsyncStorage.getItem("W2n4.3")
          wartosci.n15 = await AsyncStorage.getItem("W2n5.3")
          wartosci.n16 = await AsyncStorage.getItem("W2n6.3")
    
          wartosci.vc1 = await AsyncStorage.getItem("W2vc1.2")
          wartosci.vc2 = await AsyncStorage.getItem("W2vc2.2")
          wartosci.vc3 = await AsyncStorage.getItem("W2vc3.2")
          wartosci.vc4 = await AsyncStorage.getItem("W2vc4.2")
          wartosci.vc5 = await AsyncStorage.getItem("W2vc5.2")
          wartosci.vc6 = await AsyncStorage.getItem("W2vc6.2")
          wartosci.vc7 = await AsyncStorage.getItem("W2vc7")
          wartosci.vc8 = await AsyncStorage.getItem("W2vc8")

          wartosci.vc11 = await AsyncStorage.getItem("W2vc1.3")
          wartosci.vc12 = await AsyncStorage.getItem("W2vc2.3")
          wartosci.vc13 = await AsyncStorage.getItem("W2vc3.3")
          wartosci.vc14 = await AsyncStorage.getItem("W2vc4.3")
          wartosci.vc15 = await AsyncStorage.getItem("W2vc5.3")
          wartosci.vc16 = await AsyncStorage.getItem("W2vc6.3")
    
          wartosci.re1 = await AsyncStorage.getItem("W2re1.2")
          wartosci.re2 = await AsyncStorage.getItem("W2re2.2")
          wartosci.re3 = await AsyncStorage.getItem("W2re3.2")
          wartosci.re4 = await AsyncStorage.getItem("W2re4.2")
          wartosci.re5 = await AsyncStorage.getItem("W2re5.2")
          wartosci.re6 = await AsyncStorage.getItem("W2re6.2")
          wartosci.re7 = await AsyncStorage.getItem("W2re7")
          wartosci.re8 = await AsyncStorage.getItem("W2re8")

          wartosci.re11 = await AsyncStorage.getItem("W2re1.3")
          wartosci.re12 = await AsyncStorage.getItem("W2re2.3")
          wartosci.re13 = await AsyncStorage.getItem("W2re3.3")
          wartosci.re14 = await AsyncStorage.getItem("W2re4.3")
          wartosci.re15 = await AsyncStorage.getItem("W2re5.3")
          wartosci.re16 = await AsyncStorage.getItem("W2re6.3")
    
          wartosci.ra1 = await AsyncStorage.getItem("W2ra1.2")
          wartosci.ra2 = await AsyncStorage.getItem("W2ra2.2")
          wartosci.ra3 = await AsyncStorage.getItem("W2ra3.2")
          wartosci.ra4 = await AsyncStorage.getItem("W2ra4.2")
          wartosci.ra5 = await AsyncStorage.getItem("W2ra5.2")
          wartosci.ra6 = await AsyncStorage.getItem("W2ra6.2")

          wartosci.ra11 = await AsyncStorage.getItem("W2ra1.3")
          wartosci.ra12 = await AsyncStorage.getItem("W2ra2.3")
          wartosci.ra13 = await AsyncStorage.getItem("W2ra3.3")
          wartosci.ra14 = await AsyncStorage.getItem("W2ra4.3")
          wartosci.ra15 = await AsyncStorage.getItem("W2ra5.3")
          wartosci.ra16 = await AsyncStorage.getItem("W2ra6.3")

          wartosci.ra7 = await AsyncStorage.getItem("W2ra7")
          wartosci.ra8 = await AsyncStorage.getItem("W2ra8")
          wartosci.Tokarka = await AsyncStorage.getItem("W2MaterialObrabiany")
          wartosci.MocTokarka = await AsyncStorage.getItem("W2Obrabiarka")
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

            if(wartosci.dxl11 !==null){
                setdxl11(JSON.parse(wartosci.dxl11))
              }
              if(wartosci.dxl12 !==null){
                  setdxl12(JSON.parse(wartosci.dxl12))
              }
              if(wartosci.dxl13 !==null){
                setdxl13(JSON.parse(wartosci.dxl13))
               }
                if(wartosci.dxl14 !==null){
              setdxl14(JSON.parse(wartosci.dxl14))
              }
                if(wartosci.dxl15 !==null){
              setdxl15(JSON.parse(wartosci.dxl15))
              }
              if(wartosci.dxl16 !==null){
               setdxl16(JSON.parse(wartosci.dxl16))
              }
            
                /////////////
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
              //////////////////
              if(wartosci.n11 !==null){
                setn11(JSON.parse(wartosci.n11))
              }
              if(wartosci.n12 !==null){
                  setn12(JSON.parse(wartosci.n12))
              }
              if(wartosci.n13 !==null){
                setn13(JSON.parse(wartosci.n13))
               }
                if(wartosci.n14 !==null){
            //  setn4(JSON.parse(wartosci.n4))
                  setn14(wartosci.n14)
              }
                if(wartosci.n15 !==null){
              setn15(JSON.parse(wartosci.n15))
              }
              if(wartosci.n16 !==null){
               setn16(JSON.parse(wartosci.n16))
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
                ////////////////
                if(wartosci.vc11 !==null){
                    setvc11(JSON.parse(wartosci.vc11))
                  }
                  if(wartosci.vc12 !==null){
                      setvc12(JSON.parse(wartosci.vc12))
                  }
                  if(wartosci.vc13 !==null){
                    setvc13(JSON.parse(wartosci.vc13))
                   }
                    if(wartosci.vc14 !==null){
                  setvc14(JSON.parse(wartosci.vc14))
                  }
                    if(wartosci.vc15 !==null){
                  setvc15(JSON.parse(wartosci.vc15))
                  }
                  if(wartosci.vc16 !==null){
                   setvc16(JSON.parse(wartosci.vc16))
                  }
                  ///////////////
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
                        //////////////
                    if(wartosci.re11 !==null){
                        setre11(JSON.parse(wartosci.re11))
                      }
                      if(wartosci.re12 !==null){
                          setre12(JSON.parse(wartosci.re12))
                      }
                      if(wartosci.re13 !==null){
                        setre13(JSON.parse(wartosci.re13))
                       }
                        if(wartosci.re14 !==null){
                      setre14(JSON.parse(wartosci.re14))
                      }
                        if(wartosci.re15 !==null){
                      setre15(JSON.parse(wartosci.re15))
                      }
                      if(wartosci.re16 !==null){
                       setre16(JSON.parse(wartosci.re16))
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

                      ///////////////////
                      if(wartosci.ra11 !==null){
                        setra11(JSON.parse(wartosci.ra11))
                      }
                      if(wartosci.ra12 !==null){
                          setra12(JSON.parse(wartosci.ra12))
                      }
                      if(wartosci.ra13 !==null){
                        setra13(JSON.parse(wartosci.ra13))
                       }
                        if(wartosci.ra14 !==null){
                      setra14(JSON.parse(wartosci.ra14))
                      }
                        if(wartosci.ra15 !==null){
                      setra15(JSON.parse(wartosci.ra15))
                      }
                      if(wartosci.ra16 !==null){
                       setra16(JSON.parse(wartosci.ra16))
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
         <Text style={styles.nazwy}>Materiał obrabiany :  St7</Text>
         <Text style={styles.nazwy}>Narzędzie : NWKc Ø19  </Text>
         </View>
      
         <View style={styles.mniejszaprzerwa}></View>
         <View style={styles.textstyle}>
         <Text style={styles.nazwy}>Obrabiarka : {MocTokarka}</Text>
       </View>

       <View style={styles.mniejszaprzerwa}></View>

        <View style={styles.textstyle}>
        
        <Text style={styles.nazwy}>Ośrodek Obróbkowy : Emulsja olejowa</Text>
        </View>
        <View style={styles.mniejszaprzerwa}></View>

<View style={styles.textstyle}>

<Text style={styles.bold}>Wiertło z krawędziami symetrycznymi : </Text></View>
<View style={styles.textstyle}><Text style={styles.bold}>dnom = 19[mm] </Text></View>
        <View style={styles.mniejszaprzerwa}></View>
        
       <View style={styles.mniejszaprzerwa}></View>
            <View 
            style={styles.textstyle}>
                <View style={styles.tabelka}>
                  <Text>n</Text>
            <Text>{dxl1}</Text>
            <Text>{dxl2}</Text>
            <Text>{dxl3}</Text>
            <Text>{dxl4}</Text>
            <Text>{dxl5}</Text>
            <Text>{dxl6}</Text>
         
            </View>
            <View style={styles.tabelka}>
            <Text>vc</Text>
            <Text>{n1}</Text>
            <Text>{n2}</Text>
            <Text>{n3}</Text>
            <Text>{n4}</Text>
            <Text>{n5}</Text>
            <Text>{n6}</Text>
         
            </View>
            <View style={styles.tabelka}>
                <Text>f</Text>
                <Text>{vc1}</Text>
            <Text>{vc2}</Text>
            <Text>{vc3}</Text>
            <Text>{vc4}</Text>
            <Text>{vc5}</Text>
            <Text>{vc6}</Text>
         
            </View>
           
           
          
            
            <View style={styles.tabelka}>
              <Text>dmax</Text>
            <Text>{re1}</Text>
            <Text>{re2}</Text>
            <Text>{re3}</Text>
            <Text>{re4}</Text>
            <Text>{re5}</Text>
            <Text>{re6}</Text>
          
            </View>
            <View style={styles.tabelka}>
              <Text>dmin</Text>
            <Text>{ra1}</Text>
            <Text>{ra2}</Text>
            <Text>{ra3}</Text>
            <Text>{ra4}</Text>
            <Text>{ra5}</Text>
            <Text>{ra6}</Text>
          
            </View> 
            <View style={styles.tabelka}>
              <Text>Δd</Text>
              <Text>{(re1-19).toFixed(2)}</Text>
            <Text>{(re2-19).toFixed(2)}</Text>
            <Text>{(re3-19).toFixed(2)}</Text>
            <Text>{(re4-19).toFixed(2)}</Text>
            <Text>{(re5-19).toFixed(2)}</Text>
            <Text>{(re6-19).toFixed(2)}</Text>
            </View>
            <View style={styles.tabelka}>
              <Text>ΔK</Text>
              <Text>{(re1-ra1).toFixed(2)}</Text>
            <Text>{(re2-ra2).toFixed(2)}</Text>
            <Text>{(re3-ra3).toFixed(2)}</Text>
            <Text>{(re4-ra4).toFixed(2)}</Text>
            <Text>{(re5-ra5).toFixed(2)}</Text>
            <Text>{(re6-ra6).toFixed(2)}</Text>
            </View>
            </View>
            <View style={styles.mniejszaprzerwa}></View>
            <View style={styles.textstyle}>

            <Text style={styles.bold}>Wiertło z krawędziami niesymetrycznymi : </Text></View>
            <View style={styles.textstyle}><Text style={styles.bold}>dnom = 19[mm] </Text></View>
            <View style={styles.mniejszaprzerwa}></View>
            <View 
            style={styles.textstyle}>
                <View style={styles.tabelka}>
                  <Text>n</Text>
            <Text>{dxl11}</Text>
            <Text>{dxl12}</Text>
            <Text>{dxl13}</Text>
            <Text>{dxl14}</Text>
            <Text>{dxl15}</Text>
            <Text>{dxl16}</Text>
         
            </View>
            <View style={styles.tabelka}>
            <Text>vc</Text>
            <Text>{n11}</Text>
            <Text>{n12}</Text>
            <Text>{n13}</Text>
            <Text>{n14}</Text>
            <Text>{n15}</Text>
            <Text>{n16}</Text>
         
            </View>
            <View style={styles.tabelka}>
                <Text>f</Text>
            <Text>{vc11}</Text>
            <Text>{vc12}</Text>
            <Text>{vc13}</Text>
            <Text>{vc14}</Text>
            <Text>{vc15}</Text>
            <Text>{vc16}</Text>
         
            </View>
           
           
          
            
            <View style={styles.tabelka}>
              <Text>dmax</Text>
            <Text>{re11}</Text>
            <Text>{re12}</Text>
            <Text>{re13}</Text>
            <Text>{re14}</Text>
            <Text>{re15}</Text>
            <Text>{re16}</Text>
          
            </View>
            <View style={styles.tabelka}>
              <Text>dmin</Text>
            <Text>{ra11}</Text>
            <Text>{ra12}</Text>
            <Text>{ra13}</Text>
            <Text>{ra14}</Text>
            <Text>{ra15}</Text>
            <Text>{ra16}</Text>
          
            </View> 
            <View style={styles.tabelka}>
              <Text>Δd</Text>
              <Text>{(re11-19).toFixed(2)}</Text>
            <Text>{(re12-19).toFixed(2)}</Text>
            <Text>{(re13-19).toFixed(2)}</Text>
            <Text>{(re14-19).toFixed(2)}</Text>
            <Text>{(re15-19).toFixed(2)}</Text>
            <Text>{(re16-19).toFixed(2)}</Text>
            </View>
            <View style={styles.tabelka}>
              <Text>ΔK</Text>
              <Text>{(re11-ra11).toFixed(2)}</Text>
            <Text>{(re12-ra12).toFixed(2)}</Text>
            <Text>{(re13-ra13).toFixed(2)}</Text>
            <Text>{(re14-ra14).toFixed(2)}</Text>
            <Text>{(re15-ra15).toFixed(2)}</Text>
            <Text>{(re16-ra16).toFixed(2)}</Text>
            </View>
            </View>
        
          <View style={styles.mniejszaprzerwa}></View>
          
          
          
          <View><Text> n[obr/min]</Text></View>
          <View><Text> vc[m/min]</Text></View>
          <View><Text> f[mm/obr]</Text></View>
          <View><Text> dmax[mm]</Text></View>
          <View><Text>dmin[mm]</Text></View>
          <View><Text>Δd[mm] = dmax-dnom "błąd wymiaru"</Text></View>
          <View><Text>ΔK[mm] = dmax-dmin "błąd kształtu"</Text></View>
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
export default W2podsumowanie2
