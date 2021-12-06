import React, { useState } from 'react';
import styles from './HomePage.styles';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { CameraType } from 'react-native-camera';


export default function Camera() {
    
 const [hasCameraPermission,setHasCameraPermission] = useState(null);
 const [camera,setCamera] = useState(null);
 const [image,setImage] = useState(null);
 const [type,setType] = useState(Camera.Constants.Type.back);

 useEffect(() => {
   (async () => {
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === 'grated');
   })();
 }, [])
  
const takePicture = async() => {
  if(camera){
    const data = await camera.takePictureAsync(null);
    setImage(data.uri);
  }
}
  
if(hasCameraPermission == false)
{
  return <Text>Camera acces denied!</Text>
}

return (

 <View style={{flex:1}}>
  <View style={styles.cameraContainer}>
    <Camera ref={ref => setCamera(ref)}
    style={styles.fixedRatio}
    type={type}
    ratio={'1:1'}
    />
  </View>
  
  <Button
  title = 'Flip Camera'
  onPress = {() => {
    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
  }}>
  </Button>

  <Button title = "Take picture"
  onPress = {() => takePicture()} 
  />
  { image && <Image source = {{uri: image}} style = {{flex:1}} />}
 </View>
 );
}