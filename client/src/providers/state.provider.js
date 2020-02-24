class createStateProvider {
  loadState = () => {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) {
        return undefined
      }
      return JSON.parse(serializedState)
    } catch (error) {
      return undefined
    }
  }

  saveState = state => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch (error) {
      // error
    }
  }
}

export const stateProvider = new createStateProvider()
