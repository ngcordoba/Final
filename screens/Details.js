import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import pokeBackground from '../images/background.jpg'
import error from '../images/error.jpg'

function DetailsScreen({ route, navigation }) {
    
    const [ pokeData, setPokeData] = React.useState("")
    const [ status, setStatus] = React.useState("idle");
    const { searchText } = route.params;
    
    React.useEffect(() => {
      setStatus("Cargando");
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`)
      .then((response) => response.json()
      .then((data) => 
      {
            if(data === null){
              setStatus("error");
            }else{
              setPokeData(data) 
              setStatus("success")
              
          }
      }))
  .catch((error) => setStatus("error"));;
    }, [pokeData]);
    
    if (  pokeData && searchText === null ) {
    return (
          <ImageBackground source={pokeBackground} style={styles.imgBackground} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.card}>
                    <Image style={styles.image} source={{ uri: pokeData.sprites.front_default }} />   
                    <View style={styles.description}>
                    <Text style={styles.cardtext}> Name: {pokeData.name}</Text>
                      <Text style={styles.cardtext}> Base Experiencie: {pokeData.base_experience}</Text>
                      <Text style={styles.cardtext}> Height: {pokeData.height}</Text>
                      <Text style={styles.cardtext}> Weight: {pokeData.weight}</Text>   
                    </View>
                  </View>
                    
                    <View styles={styles.buttonContainer}>
                      <Button color="#FF0000" title="Back to home" onPress={() => navigation.navigate('PokeAPI - Home')} />
                    </View>

                  </View>
              </ImageBackground>
              )

       } else {
          return (
            <ImageBackground source={pokeBackground} style={styles.imgBackground}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.cardError} >
                    <Image style= {styles.image} source={error} /> 
                    <View style={styles.description}>
                      <Text style={styles.cardtextError} >Name: Error </Text>
                      <Text style={styles.cardtextError} >Base Experiencie: Error </Text>
                      <Text style={styles.cardtextError} >Height: Error</Text>
                      <Text style={styles.cardtextError} >Weight: Error</Text>   
                    </View>
                  </View>
                    
                    <Button color="#FF0000" title="Go back" onPress={() => navigation.goBack()} />
                  </View>
              </ImageBackground> 
      );
    }
}


const styles = StyleSheet.create({

  imgBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  
  pokemonLogo: {
    width: 400,
    height: 200,
    resizeMode: "contain"
  },
  
  image: {
    width: 220,
    height: 220,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18
  },

  card: {
    margin: 5,
    width: 220, 
    borderRadius: 19, 
    backgroundColor: "white",
    textTransform: "capitalize",
    fontSize: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    overflow: "hidden",
  },

  description: {
    paddingBottom: 8
  },

  cardtext: {
    color: "black",
    marginLeft: 5,
  },

  cardtextError: {
    color: "white",
    marginLeft: 5,
  },

  buttonContainer: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
  },

  cardError: {
    margin: 5,
    width: 230, 
    borderRadius: 19, 
    backgroundColor: "black",
    textTransform: "capitalize",
    fontSize: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    overflow: "hidden",
  },
  

});

export default DetailsScreen;