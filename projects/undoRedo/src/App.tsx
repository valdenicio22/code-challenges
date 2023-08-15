
import { MouseEvent, useEffect, useState } from 'react';
import './App.css';

interface ClickedStack {
  x: number;
  y: number;
}

function App() {
  const [clickedStack, setClickedStack] = useState<ClickedStack[]>([])
  const [poppedClicks, setPoppedClicks] = useState<ClickedStack[]>([])

  const handleClick = (ev: globalThis.MouseEvent): void => {
    const { clientX, clientY } = ev;
    setClickedStack((prev) => [...prev, { x: clientX, y: clientY }]);
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const handleUndo = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    const shallowClickedStack = [...clickedStack];
    const removedClick = shallowClickedStack.pop();
    if (!removedClick) return;
    setClickedStack(shallowClickedStack);
    setPoppedClicks((prev) => [...prev, removedClick]);
    return
  }
  const handleRedo = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    const shallowPoppedClicks = [...poppedClicks];
    const removedClick = shallowPoppedClicks.pop();
    if (!removedClick) return;
    setPoppedClicks(shallowPoppedClicks);
    setClickedStack((prev) => [...prev, removedClick]);
    return
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
