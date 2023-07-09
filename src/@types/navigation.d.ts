export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      metrics: undefined
      new: undefined
      details: {
        mealId: string
      }
      edit: {
        mealId: string
      }
      feedback: {
        isInsideDiet: boolean
      }
    }
  }
}
