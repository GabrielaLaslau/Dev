import React, {useState} from 'react';
import { Text , ImageBackground , TouchableOpacity} from 'react-native';
import styles from './HomePage.styles';
import Header from './Header';

const HomePage = ( {navigation} ) => {

  const [started,setStarted] = useState(false)
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
 return (
  <ImageBackground
  style={styles.body}
  source={require('../../../assets/images/f0a8cede86dd82cf7.jpg')}
  >
   <Header/>   
   < TouchableOpacity
        style={styles.buttonItem}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.text}>GET STARTED</Text>
      </TouchableOpacity>

      { started ?
        <Text style={styles.text}>
        </Text>
        :
        null
      }
   </ImageBackground>
 );
}
export default HomePage;