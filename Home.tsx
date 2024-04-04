import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
 } from "react-native";
import React from "react";
// import { Image } from 'expo-image';
// const logoImg =  require("./assets/red.png");

const Home = () => {
  return (
      <View style={styles.container}>
      {/* <View style = {styles.line}/> */}
      <Text style={styles.titleText}>BMI Calculator</Text>
      <View style={styles.inputContainer}>
       
            <TextInput
          style={styles.input}
          placeholder="Heigth-M"
          placeholderTextColor={"rgba(135,135,135,1)"} //9090901
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Weigth-KG"
          placeholderTextColor={"rgba(135,135,135,1)"}
          keyboardType="number-pad"
        />
        {/* <View style = {styles.line}/> */}
        </View>
        <View style = {styles.line}/>
        

        
        <View style={styles.ColorContainer}>
          <View style={styles.Yellow}>
          <Image
              style={styles.imageYellow} 
              source={require('./assets/yellow.png')}
                          
                             
              
              />
          <Text style={styles.YellowText1}>Under 18</Text>
          <Text style={styles.YellowText2}>Under Weigth</Text>
          </View>
          <View style={styles.Green}>
          <Image
              style={styles.imageGreen} 
              source={require('./assets/green.png')}
               
                            
              />   
          <Text style={styles.GreenText1}>18.5 - 25</Text>
          <Text style={styles.GreenText2}>Normal Weigth</Text>
          </View>
          <View style={styles.Red}>
          <Image
              style={styles.imageRed} 
              source={require('./assets/red.png')}
                       
                              
              
              />  
          <Text style={styles.RedText1}>Above 25</Text>
          <Text style={styles.RedText2}>Over Weigth</Text>
          </View>
        </View>


      <TouchableOpacity
        style={styles.goButton}
        onPress={() => {
          console.log("GO");
        }}
      >
        <Text style={styles.goButtonText}>GO</Text>
      </TouchableOpacity>

      <Text style={styles.BMIText}>0.00</Text>
    
    </View>

    
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(61,61,61,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 25,
    position: "absolute", // расположение
    top: 50, // отступ сверху
  },

  inputContainer: { flexDirection: "row", gap: 50, marginTop: 50, position: "absolute",
  top: 100},
  //"row" - ось направлена слева направо. Элементы расположены в ряд,
  // по умолчанию прижаты к левому краю, их нумерация имеет обычный порядок - слева направо.
  
  input: {
    borderWidth: 1,
    borderRadius: 3,
    height: 60,
    width: 130,
    // padding: 15, // отступ со всех сторон
    paddingHorizontal: 30, // оступ по горизонтали
    paddingVertical: 7, // оступ по вертикали
    color: "white",
  },

  goButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 35, // оступ по горизонтали
    paddingVertical: 7, // оступ по вертикали

    borderRadius: 2, // скругление углов

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
    paddingLeft: 0 ,
  },

 
  YellowText1: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
  },
  
  YellowText2: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 0,
    paddingLeft: 12,
  },

  GreenText1: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
  },
  GreenText2: {
    fontWeight: "500",
    fontSize: 13,
    paddingLeft: 8,
  },

  RedText1: {
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
  },

  RedText2: {
    fontWeight: "500",
    fontSize: 13,
    paddingLeft: 15,
  },
  
  ColorContainer:{
    flexDirection:"row",
    top: 30,
    gap:25,
    
  },

  Yellow:{
    width:100,
    height:250,
    borderRadius: 10,
    backgroundColor:"rgba(254, 234, 60, 1)",
      },

  Green:{
    width:100,
    height:250,
    borderRadius: 10,
    backgroundColor:"rgba(78, 174, 80, 1)",
    
  },
  
  Red:{
    width:100,
    height:250,
    borderRadius: 10,
    backgroundColor:"rgba(254, 83, 83, 1)",
    
  },

  imageYellow:{
    position: "absolute",
    top: 30,
            
  },

  imageGreen:{
    position: "absolute",
    top: 20,
            
  },

  imageRed:{
    position: "absolute",
    top: 20,
                    
  },

  line:{
    width:"100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    height: 2,
    marginTop: 350,
    
    
    
  },

  });

export default Home;
