import { useState } from "react";
import ThemeProvider from "../context/ThemeProvider";
import Card from "../components/Card";
import Button from "../components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <div className="flex flex-col items-center gap-4 p-10">
        {/* flex-col = vertical layout, items-center = center horizontally */}
        {/* gap-4 = spacing between items (adjust as needed) */}
        <Button />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
