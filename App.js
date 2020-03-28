import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';


export default class DiceApp extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
                        diceImage1: require('./assets/images/dice1.png'),
                        diceImage2: require('./assets/images/dice1.png')

                     };
     };

     getRandomNumber = () =>
     {
        let randomNumber =  Math.floor(Math.random() * 6 + 1);
        console.log(randomNumber);
        return randomNumber;
     };


     rollDiceTapped = () =>
     {
        var diceNumber = this.getRandomNumber();

        switch(diceNumber)
        {
          case 1:
            return (
              this.setState({diceImage1: require('./assets/images/dice1.png')}),
              this.setState({diceImage2: require('./assets/images/dice2.png')})
              );

          case 2:
            return (
              this.setState({diceImage1: require('./assets/images/dice2.png')}),
              this.setState({diceImage2: require('./assets/images/dice5.png')})
              );
          case 3:
            return (
              this.setState({diceImage1: require('./assets/images/dice3.png')}),
              this.setState({diceImage2: require('./assets/images/dice6.png')})
              );
          case 4:
            return (
              this.setState({diceImage1: require('./assets/images/dice4.png')}),
              this.setState({diceImage2: require('./assets/images/dice4.png')})
              );
          case 5:
            return (
              this.setState({diceImage1: require('./assets/images/dice5.png')}),
              this.setState({diceImage2: require('./assets/images/dice2.png')})
              );
          case 6:
            return (
              this.setState({diceImage1: require('./assets/images/dice6.png')}),
              this.setState({diceImage2: require('./assets/images/dice1.png')})
              );
          default:
            return;
        }
     };

    render()
    {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row' ,marginBottom: 50}}>
                    <Image 
                      source={this.state.diceImage1}
                      style={{width: 100, height: 100 ,marginLeft: 10}}
                    />
                    <Image 
                      source={this.state.diceImage2}
                      style={{width: 100, height: 100,marginLeft: 60}}
                    />
                </View>
            
              <TouchableOpacity 
                style = {styles.buttonStyle}
                onPress={this.rollDiceTapped}
              >
                <Text style={styles.buttonTextStyle}>Roll Dice</Text>
              </TouchableOpacity>

            </View>
        );
    };
};


const styles = StyleSheet.create(
{
    container: 
    {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonTextStyle:
    {
      fontSize: 20,
      backgroundColor:'lightgray',
      padding: 15,
    },
    buttonStyle:
    {
      margin: 20,
      borderRadius: 10,
      
    }
              
});