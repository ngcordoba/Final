import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import pokeBackground from '../images/background.jpg'

function RandomDetails({ route, navigation }) {

    const [ status, setStatus] = React.useState("idle");
    const { itemId } = route.params;
    const [ pokeData, setPokeData] = React.useState("");

    React.useEffect(() => {
      setStatus("Cargando");
      fetch(`https://pokeapi.co/api/v2/pokemon/${itemId}`)
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

      console.log(pokeData);

    if (pokeData){
      return (
        <ImageBackground source={pokeBackground} style={styles.imgBackground}>
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
                      <Button
                        style={styles.button}
                        color="#FF0000"
                        title="Random Pokemon"
                        onPress={() =>
                          navigation.push("PokeAPI - Function Random", {
                          itemId: Math.floor(Math.random() * 19 + 1),
                          })
                        }
                        />
                        
                        <Button title="Back to Home" onPress={() => navigation.navigate('PokeAPI - Home')} />
                        
                    </View>
              </View>
        </ImageBackground>
      )}else{
            return(
                <View >
                    <Text> Loading... </Text>
                </View>
              )
            };}
    


            const styles = StyleSheet.create({
              imgBackground: {
                flex: 1,
                width: "100%",
                height: "100%",
              },

              description: {
                paddingBottom: 8
              },

              cardtext: {
                color: "black",
                marginLeft: 8,
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
                shadowRadius: 10,
                overflow: "hidden", 
              },

              image: {
                width: 200,
                height: 200,
                borderTopRightRadius: 18,
                borderTopLeftRadius: 18
              },

              button: {
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              },

              buttonContainer: {
                width: 150,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
                
              },

            });

            

export default RandomDetails; 
            
        
             
          