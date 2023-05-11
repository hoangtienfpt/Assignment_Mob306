import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Quanli from'./Quanli'
import Themmoi from './Themmoi'
const Manager = (props)=>{
  const nav = props.navigation;
  return(<View style = {styles.container}>
 <Button title='Quan Li'  onPress={() => { nav.navigate('Quan li') }} />
  </View>)
}


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Manager' component={Manager}/>
          <Stack.Screen name='Quan li' component={Quanli}/>
          <Stack.Screen name='Them moi' component={Themmoi}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
