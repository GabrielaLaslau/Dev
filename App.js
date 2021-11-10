import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

const App = () => {

 return (
   <View style={styles.body}>
     <View style={styles.item}>
      <Text style={styles.text}></Text>
      </View>
      <Image 
      style={styles.image}
      source={require('./assets/group.png')}
      resizeMode = 'stretch'
      />
      <Text style={styles.text}>Make some memories with this new photo app!Bring your friends</Text>
     <Text style={styles.text}>      .. and your smile!!</Text>
     <Image 
      style={styles.image2}
      source={require('./assets/littlepic.png')}
      resizeMode = 'stretch'
      />
     <View style={styles.button}>
        <Button title='Get started' color = '#050DCE'></Button>
     </View>
   </View>
   
 );
}

const styles = StyleSheet.create({
body: {
   flex: 1,
   flexDirection: 'column',
   backgroundColor: '#E6E7EC',
   alignItems: 'center',
  //justifyContent: 'center',
},
column: {
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent: 'center',
},
item: {
  width: 305,
  height: 40,
  backgroundColor: '#050DCE',
  alignItems: 'flex-start',
  justifyContent: 'center',
  margin: 45,
},
image: {
  width: 245,
  height: 175,
  margin: 10,
  rotation: 12.08,
  shadowColor: '#000000',
},
image2: {
  width: 120.7,
  height: 105,
  margin: 10,
  rotation: -26.7,
  shadowColor: '#000000',
},
text: {
 color: '#000000',
 fontSize: 14,
 fontStyle: 'normal',
 fontWeight: 'bold',
 margin : 8,
},
button: {
  width: 305,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
},

});

export default App;