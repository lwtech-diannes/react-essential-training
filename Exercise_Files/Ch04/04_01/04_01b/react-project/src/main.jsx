import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const [firstAnimal, secondAnimal, thirdAnimal] = ["giraffe", "zebra", "bear"];
console.log(firstAnimal, secondAnimal, thirdAnimal);

createRoot(document.getElementById("root")).render(<App />);
