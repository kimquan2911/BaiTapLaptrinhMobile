import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>        
      { <View style={styles.square}>
        <Text>Hello, world</Text>
        <StatusBar style="auto" />
      </View> }

      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  square: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
  }  
});
