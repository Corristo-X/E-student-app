import * as eva from "@eva-design/eva"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { ApplicationProvider,Button, BottomNavigation, BottomNavigationTab } from "@ui-kitten/components"
import React,{useEffect, useState} from "react"
import { StyleSheet,Text,ScrollView,View } from "react-native"
import AllNotes from "./AllNotes"
import CreateNote from "./CreateNote"
import Note from "./Note"









const AppNotes = function AppNotes({navigation}) {
  const [visible,setVisible]=useState('none')
 // const [zmienna,setZmienna]=useState('none');
 const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }) => (
	<BottomNavigation 
   
    selectedIndex={state.index} onSelect={(index) => {navigation.navigate(state.routeNames[index]);
      if(index==1){
        setVisible('flex');
      }
      else
      {
      setVisible('none');
      }
    }
    }
    >
      
		<BottomNavigationTab style={styles.navi} title="Dodaj Notatkę" />
		<BottomNavigationTab style={styles.navi} title="Wszystkie Notatki" />
    
   
	</BottomNavigation>
  
)

const TabNavigator = () => (
	<Navigator tabBar={(props) => <BottomTabBar {...props}
  
    />}>
		<Screen name="Create" component={CreateNote} />
		<Screen name="AllNotes" component={AllNotes} />
		<Screen name="Note" component={Note} />
    
        
	</Navigator>
)

	return (
    
		<ApplicationProvider 
      
        {...eva} theme={eva.dark}>
       
			<NavigationContainer independent={true}>
        
       
				<TabNavigator
        />
			</NavigationContainer>
      
      
            <Button style={{display:visible  }}  
            onPress={()=>navigation.navigate('E-student')} underlayColor="white">
      <Text style={styles.textw}>
        Powrót do ekranu głównego
      </Text>
          </Button>
          
          
		</ApplicationProvider>
    
        
	)
}



const styles = StyleSheet.create({
  back:{
    //backgroundColor:'blue'

  },
    navi:{
       

    },
    textw:{
      display:'none',
        height:30,
        textAlign:'center',
        paddingTop:4,
        
        color:'white',

        
        

    },
	container: {
		flex: 1,
	
		alignItems: "center",
		justifyContent: "center"
	}
})
export default AppNotes
