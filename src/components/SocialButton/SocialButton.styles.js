import {StyleSheet} from 'react-native'

//import {windowHeight} from '../utils/Dimentions';

export default StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: 45,
      padding: 5,
      flexDirection: 'row',
      borderRadius: 25,
      paddingHorizontal: 10,
      marginVertical: 5,
      marginTop: 20,
    },
    iconWrapper: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontWeight: 'bold',
    },
    btnTxtWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Lato-Regular',
    },
  });