import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './SecondPage.styles';

export default function SecondPage() {
  
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

 return (
  <ImageBackground
  style={styles.body}
  source={require('../../../assets/images/dcdf6a004518c7.jpg')}
  > 
     
     <View style={styles.item}>
      <Text style={styles.text}>How many photos would you like?</Text>
      </View>
      <View style={styles.view_buttons}>
      < TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
      <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      < TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      < TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>3</Text>
      </TouchableOpacity>
      </View>
     
      < TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Cam')}   
      >
        <Text style={styles.buttonText}>Open camera</Text>
      </TouchableOpacity>
   </ImageBackground>
 );
}