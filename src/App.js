import { Routes, Route } from "react-router-dom";

import { Flex, Heading } from "@chakra-ui/react";

import Home from "./routes/Home.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
