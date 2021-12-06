import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
       flex: 1,
       alignItems: 'center',
    },
    
    text: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'left',
      marginLeft: 10,
    },
    
    textBigger: {
      color: '#FFFFFF',
      fontSize: 34,
      textAlign: 'left',
      marginLeft: 10,
    },
    
    textSmaller: {
      color: '#FFFFFF',
      fontSize: 12,
      textAlign: 'right',
      marginRight: 10,
    },
    
    buttonItem: {
      width: 305,
      height: 45,
      backgroundColor: '#2C3539',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      margin: 420,
    },
    
    view: {
      width:'100%',
      height: 200,
      backgroundColor: '#2C3539',
      justifyContent: 'center',
    },

    preview: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    cameraContainer: {
      flex: 1,
      flexDirection: 'row',
    },

    fixedRatio: {
      flex: 1,
      aspectRatio: 1
    }

});