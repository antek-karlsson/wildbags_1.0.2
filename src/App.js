import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home.page";
import About from "./routes/About.page";
import Custom from "./routes/Custom.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/custom" element={<Custom />} />
    </Routes>
  );
};

export default App;
