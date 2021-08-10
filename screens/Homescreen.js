import * as React from 'react';
import { Button, View, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import pokeBackground from '../images/background.jpg'
import pokeLogo from '../images/logoPokemon.png'

function HomeScreen({ navigation }) {

    
    const [searchText, setSearchText] = React.useState('') 
    
    
      return (
        <ImageBackground source={pokeBackground} style={styles.imgBackground}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Image source={pokeLogo} style={styles.pokemonLogo} />
            
            <TextInput 
            style={styles.txtInput} 
            placeholder= "Search Pokemon" 
            onChangeText={text => setSearchText(text)} 
            />

            <View styles={styles.buttonContainer}>
              <Button
                color="#FF0000"
                title="Search"
                onPress= {() => {navigation.navigate("Pokemon Details", { searchText: searchText,});}} 
              />
            
              <Button
                title="Random Pokemon"
                onPress={() => {navigation.navigate("PokeAPI - Function Random", {
                    itemId: Math.floor(Math.random() * 19), 
                  });
                }}
                
              />

            
    
            </View>
            
          </View>
        </ImageBackground>
      );
    }

    export default HomeScreen;

    const styles = StyleSheet.create({
        
        imgBackground: {
          flex: 1,
          width: "100%",
          height: "100%",
        },
        
        pokemonLogo: {
          width: 350,
          height: 200,
          resizeMode: "contain"
        },
  
        txtInput: {
          backgroundColor: "white",
          margin: 10,
          borderRadius: 5,
          width: '10%',
          borderWidth: 1,
          padding: 3,
          width: 200
        },

        buttonContainer: {
          width: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between", 
        },
      });


      