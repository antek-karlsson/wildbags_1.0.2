import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.comp";
import Home from "./routes/Home.page";
import About from "./routes/About.page";
import Custom from "./routes/Custom.page";
import AdminAuth from "./routes/AdminAuth.page";
// import AdminPanel from "./routes/AdminPanel.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="custom" element={<Custom />} />
        <Route path="admin" element={<AdminAuth />} />
      </Route>
    </Routes>
  );
};

export default App;

// import { selectCurrentUser } from "./store/user/user.selector";
// const currentUser = selectCurrentUser();
// <Route
//   path="admin"
//   element={currentUser.isAdmin ? <AdminAuth /> : <AdminPanel />}
// />;
