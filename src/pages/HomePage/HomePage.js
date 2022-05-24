import React, { useEffect, useState } from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import styles from './HomePage.styles';
import Header from './Header';

import { useDispatch } from 'react-redux';
import { getUser } from '../../Redux/Actions';

const HomePage = ({ navigation }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [started, setStarted] = useState(false)

  const onSignInPressed = () => {
    console.log("sunt aici");
    navigation.navigate('toEverywhere');
  }

  return (
    <ImageBackground
      style={styles.body}
      source={require('../../../assets/images/f0a8cede86dd82cf7.jpg')}
    >
      <Header />
      < TouchableOpacity
        style={styles.buttonItem}
        onPress={onSignInPressed}
      >
        <Text style={styles.text}>GET STARTED</Text>
      </TouchableOpacity>

      {started ?
        <Text style={styles.text}>
        </Text>
        :
        null
      }
    </ImageBackground>
  );
}
export default HomePage;