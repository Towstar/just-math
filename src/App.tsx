import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import TopicsList from "./pages/TopicsList";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { EquationInput } from "./components/EquationInput";
import { ThemeProvider } from "@mui/material";
import GlobalTheme from "../public/theme";

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="topics" element={<TopicsList />} />
            <Route path="test" element={<EquationInput />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
