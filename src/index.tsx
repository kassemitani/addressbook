import 'react-native-gesture-handler'
import 'react-native-reanimated'

import { registerRootComponent } from 'expo'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AddressBook } from '~screens'

const queryClient = new QueryClient({})

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar />
        <AddressBook />
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

registerRootComponent(App)

export default App
