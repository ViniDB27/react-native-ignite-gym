import { View, StatusBar } from 'react-native'
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import { GluestackUIProvider, Text, Center } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparente"
        translucent
      />
      <Center flex={1} bg="$info600">
        {fontsLoaded ? <Text>Home</Text> : <View />}
      </Center>
    </GluestackUIProvider>
  )
}
