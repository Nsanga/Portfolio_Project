import { useColorMode } from "@chakra-ui/color-mode";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Realisation from "./Realisation";
import CV from "./CV";


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="realisation" element={<Realisation smooth/>} />
        <Route path="cv" element={<CV />} smooth/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;