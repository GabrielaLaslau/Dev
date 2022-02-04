import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import styles from './SecondPage.styles';
import { launchCamera } from 'react-native-image-picker';
import { useSelector} from 'react-redux';
import { setPic } from '../../Redux/Actions';


export default function SecondPage({ navigation }) {

  const { pic } = useSelector(state => state.reducer)

  const [photo, setPhoto] = useState();
  console.log("pic", pic)

  return (
    <ImageBackground
      style={styles.body}
      source={require('../../../assets/images/dcdf6a004518c7.jpg')}
    >
      <View style={styles.item}>
        <Text style={styles.text}>Be ready to enjoy every moment</Text>
      </View>

      <View style={{ width: 300, height: 300, margin: 10 }}>
        {photo && <Image source={{ uri: photo }} style={{ width: 300, height: 300 }} />}
      </View>

      < TouchableOpacity
        style={styles.startButton}
        onPress={async () => {
          const res = await launchCamera({
            mediaType: 'photo',
            quality: 1,
            includeBase64: false,
            cameraType: 'back',
            saveToPhotos: true,
            maxHeight: 600,
            maxWidth: 1000
          },
          );
          console.log(res.assets[0].uri)
          setPhoto(res.assets[0].uri)
          setPic(res.assets[0].uri)
        }
        }
      >
        <Text style={styles.buttonText}>Open camera</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}