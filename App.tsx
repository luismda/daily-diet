import { useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { Home } from '@screens/Home'

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
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <Home />
    </>
  )
}
