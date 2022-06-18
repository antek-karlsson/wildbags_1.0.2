import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.page";
import About from "./routes/About.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
