import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import TopicsList from "./pages/TopicsList";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { ThemeProvider } from "@mui/material";
import GlobalTheme from "../public/theme";
import EquationTestPage from "./pages/EquationTestPage";
import Billboard from "./pages/Billboard";
import DesmosTest from "./pages/DesmosTest";
import CodeMirrorTest from "./pages/CodeMirrorTest";

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            {/* In the future, need to make this the default route for users who do not have a sign in*/}
            <Route path="billboard" element={<Billboard />} />{" "}
            <Route path="about" element={<About />} />
            <Route path="topics" element={<TopicsList />} />
            <Route path="EquationTest" element={<EquationTestPage />} />
            <Route path="DesmosTest" element={<DesmosTest />} />
            <Route path="CodeMirrorTest" element={<CodeMirrorTest />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
