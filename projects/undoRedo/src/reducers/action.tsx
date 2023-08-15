import { ClickedStack } from "../App";

export enum ClickTypeAction {
  ADD_CIRCLE = 'ADD_CIRCLE',
  UNDO = 'UNDO',
  REDO = 'REDO'
}

export type ClickStateAction =
  | { type: ClickTypeAction.ADD_CIRCLE, payload: { positions: ClickedStack } }
  | { type: ClickTypeAction.REDO }
  | { type: ClickTypeAction.UNDO }

export const addCircle = (positions: ClickedStack): ClickStateAction => {
  return {
    type: ClickTypeAction.ADD_CIRCLE,
    payload: { positions }
  }
}

export const undoClick = (): ClickStateAction => {
  return {
    type: ClickTypeAction.UNDO
  }
}

export const redoClick = (): ClickStateAction => {
  return {
    type: ClickTypeAction.REDO
  }
}