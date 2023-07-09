import { useEffect, useCallback } from 'react'
import { StatusBar } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { MealDetails } from '@screens/MealDetails'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [hasFontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  const hideSplashScreenWhenHasFontsLoaded = useCallback(async () => {
    if (hasFontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [hasFontsLoaded])

  useEffect(() => {
    hideSplashScreenWhenHasFontsLoaded()
  }, [hideSplashScreenWhenHasFontsLoaded])

  if (!hasFontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <MealDetails />
    </>
  )
}
