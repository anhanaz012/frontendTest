import background from "./assets/images/background.png";
import logo from "./assets/images/logo.png";
import "./App.css";
import { useState } from "react";
import SignUp from "./Pages/SignUp";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("Choose one");
  return (
    <>
      <Text>Hello signup page</Text>
      <SignUp />
    </>
  );
}

export default App;
