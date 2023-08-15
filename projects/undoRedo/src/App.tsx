
import { MouseEvent, useEffect, useReducer } from 'react';
import './App.css';
import { addCircle, redoClick, undoClick } from './reducers/action';
import { ClickState, clickReducer } from './reducers/reducer';

export interface ClickedStack {
  x: number;
  y: number;
}

const initialState: ClickState = {
  clickedStack: [],
  poppedClicks: []
}

function App() {
  const [clickState, dispatch] = useReducer(clickReducer, initialState)
  const { clickedStack, poppedClicks } = clickState

  const handleClick = (ev: globalThis.MouseEvent): void => {
    const { clientX, clientY } = ev;
    dispatch(addCircle({ x: clientX, y: clientY }))
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const handleUndo = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();

    dispatch(undoClick())
  }
  const handleRedo = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    dispatch(redoClick())
  }

  return (
    <div>
      <button onClick={handleUndo} disabled={!clickedStack.length}>Undo</button>
      <button onClick={handleRedo} disabled={!poppedClicks.length}>Redo</button>

      {clickedStack.map((click, i) => (
        <div key={i + 1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', background: 'black', color: 'white', position: 'absolute', top: click.y, left: click.x }}>{i + 1}</div>
      ))}

    </div>
  )
}

export default App
