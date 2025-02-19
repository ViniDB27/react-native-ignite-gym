import { Text, View } from 'react-native'
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {fontsLoaded ? <Text style={{ color: 'white' }}>Home</Text> : <View />}
    </View>
  )
}
