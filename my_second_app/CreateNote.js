import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native"
import { Button } from "@ui-kitten/components"
import React, { useState } from "react"
import { Dimensions, KeyboardAvoidingView, StyleSheet, TextInput, View,ScrollView } from "react-native"

export default function CreateNote() {
	const [ note, setNote ] = useState("")
	const navigation = useNavigation()

	const saveNote = async () => {
		const value = await AsyncStorage.getItem("NOTES")
		const n = value ? JSON.parse(value) : []
		n.push(note)
		await AsyncStorage.setItem("NOTES", JSON.stringify(n)).then(() => navigation.navigate("AllNotes"))
		setNote("")
	}
///	const onFocus = ()=>{
//		alert("dziala")

//	}

	return (
		<ScrollView style={styles.container}>
		
		
			<TextInput
				contextMenuHidden={true}
				value={note}
				onChangeText={setNote}
				style={{ color: "#fff", fontSize: 22,width:'100%',textAlign:'center' }}

				placeholder="tutaj wpisz swoją notatkę z zajęć"
				placeholderTextColor="#97b5ba"
			//	onBlur={onFocus()}
				
				multiline={true}
				autoFocus
				selectionColor="#fff"
				backgroundColor="#343a3b"
            
			/>
			<Button style={StyleSheet.button}  onPress={saveNote}>
					Dodaj nową notatkę
				</Button>
				
			
		
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		height:'100%',
		
		backgroundColor:"#678387",
		color: "white",
		
		

		
	},

	button: {
		height:'100%',
		justifyContent: "flex-end",
		
	}
})