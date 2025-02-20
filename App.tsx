import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import { GluestackUIProvider, Center } from '@gluestack-ui/themed'
import { config } from './config/gluestack-ui.config'
import { StatusBar } from 'react-native'
import { Loading } from '@components/Loading'
import { Routes } from './src/routes'

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
      <Center flex={1} bg="$gray700">
        {fontsLoaded ? <Routes /> : <Loading />}
      </Center>
    </GluestackUIProvider>
  )
}
