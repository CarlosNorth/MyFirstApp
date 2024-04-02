import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";


const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>BMI Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Heigth-M"
          placeholderTextColor={"rgba(90,90,190,1)"}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Weigth-KG"
          placeholderTextColor={"rgba(90,90,190,1)"}
          keyboardType="number-pad"
        />
        </View>
        <View style={styles.YellowOutputStyle}>
          <Text style = {styles.YellowOutputText1}>Under 18</Text>
          <Text style = {styles.YellowOutputText2}>Under Weigth</Text>
          
          
        </View>  
      <View style={styles.GreenOutputStyle}>
          <Text style = {styles.GreenOutputText1}>18.5 - 25</Text>
          <Text style = {styles.GreenOutputText2}>Normal Weigth</Text>
        </View>   

      <View style={styles.RedOutputStyle}>
          <Text style = {styles.RedOutputText1}>Above 25</Text>
          <Text style = {styles.RedOutputText2}>Over Weigth</Text>
        </View> 


      <TouchableOpacity
        style={styles.goButton}
        onPress={() => {
          console.log("Вычесляю");
        }}
      >
        <Text style={styles.goButtonText}>Погнали</Text>
      </TouchableOpacity>

      <Text style={styles.BMIText}>0.00</Text>
    
    </View>

    
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(50,50,50,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 25,
    position: "absolute",
    top: 50,
  },

  inputContainer: { flexDirection: "row", gap: 50, marginTop: 50, position: "absolute",
  top: 100 },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: 130,
    padding: 10,
    color: "white",
  },

  goButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 7,

    borderRadius: 10,

    marginTop: 30,
    position: "absolute",
    top: 250,
  },

  goButtonText: {
    fontWeight: "500",
    fontSize: 16,
    
  },

  BMIText: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 35,
    marginTop: 40,
    position: "absolute",
    top: 320,
  },

  YellowOutputStyle: {
    borderWidth: 1,
    backgroundColor: "rgba(254, 234, 60, 1)",
    position: "absolute",
    height: 250,
    width: 100,
    top: 470,
    left: 20,
    borderRadius: 10,

  },

  YellowOutputText1: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
  },
  
  YellowOutputText2: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 0,
    padding: 6,
    paddingLeft: 10,
  },

  GreenOutputText1: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
  },
  GreenOutputText2: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 0,
    padding: 6,
    paddingLeft: 5,
  },

  RedOutputText1: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
  },

  RedOutputText2: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 0,
    padding: 6,
    paddingLeft: 10,
  },



  GreenOutputStyle: {
    borderWidth: 1,
    backgroundColor: "rgba(78, 174, 80, 1)",
    position: "absolute",
    height: 250,
    width: 100,
    top: 470,
    left: 145,
    borderRadius: 10,
  },

  RedOutputStyle: {
    borderWidth: 1,
    backgroundColor: "rgba(254, 83, 83, 1)",
    position: "absolute",
    height: 250,
    width: 100,
    top: 470,
    left: 270,
    borderRadius: 10,
  },
});

export default Home;
//130 108 45
