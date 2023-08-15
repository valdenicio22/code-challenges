import { ClickedStack } from "../App"
import { ClickStateAction } from "./action"

export interface ClickState {
  clickedStack: ClickedStack[]
  poppedClicks: ClickedStack[]
}



export const clickReducer = (state: ClickState, action: ClickStateAction) => {
  switch (action.type) {
    case 'ADD_CIRCLE': {
      const newStack = [...state.clickedStack, action.payload.positions]
      return {
        ...state,
        clickedStack: newStack
      }
    }
    case 'UNDO': {
      const shallowStack = [...state.clickedStack]
      const removedClick = shallowStack.pop();
      if (!removedClick) return state
      return {
        ...state,
        clickedStack: shallowStack,
        poppedClicks: [...state.poppedClicks, removedClick]
      }
    }
    case 'REDO': {
      const shallowStack = [...state.poppedClicks]
      const removedClick = shallowStack.pop();
      if (!removedClick) return state
      return {
        ...state,
        poppedClicks: shallowStack,
        clickedStack: [...state.clickedStack, removedClick]
      }
    }
    default: return state
  }
}