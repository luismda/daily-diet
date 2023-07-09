import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Metrics } from '@screens/Metrics'
import { NewMeal } from '@screens/NewMeal'
import { EditMeal } from '@screens/EditMeal'
import { Feedback } from '@screens/Feedback'
import { MealDetails } from '@screens/MealDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Screen name="home" component={Home} />
      <Screen name="metrics" component={Metrics} />
      <Screen name="new" component={NewMeal} />
      <Screen name="details" component={MealDetails} />
      <Screen name="edit" component={EditMeal} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}
