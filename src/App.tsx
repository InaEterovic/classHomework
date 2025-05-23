import "./App.css";
import { ActionButton } from "./components/FE 8/ActionButton";
import { ControlForm } from "./components/FE 8/ControlForm";
import { Counter } from "./components/FE 8/Counter";
import { OldCounter } from "./components/FE 8/OldCounter";

function App() {
  function showAlert() {
    alert("Button was clicked!");
  }

  return (
    <div>
      {/* <ControlForm /> */}
      <ActionButton label="Click Me" onAction={showAlert} />
      <Counter />
      <OldCounter />
    </div>
  );
}

export default App;
