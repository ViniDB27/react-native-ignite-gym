import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'

import { Center } from '@gluestack-ui/themed'

export function Routes() {
  return (
    <Center flex={1} w="$full" bg="$gray700">
      <NavigationContainer>
       <AuthRoutes />
      </NavigationContainer>
    </Center>
  )
}
