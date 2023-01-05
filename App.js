import React,{ useState } from 'react';
import { View,Text,StyleSheet,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App(){

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Luis</Text>
      <Icon
        name={'home'}
        size={26}
        color={'#11118c'} 
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
})

