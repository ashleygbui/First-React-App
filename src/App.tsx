import { useState } from "react";
import Alert from "./Componenets/Alert";
import Button from "./Componenets/Button";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Button
      </Button>
    </div>
  );
}

export default App;
