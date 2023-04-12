import "./App.css";
import Home from "./pages/Home";
import DemoForm from "./pages/DemoForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="demo-form" element={<DemoForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
