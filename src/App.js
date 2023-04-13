import "./App.css";
import Home from "./pages/Home";
import DemoForm from "./pages/DemoForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";
import { PublicRoute } from "./routeProtectors/PublicRoute.js";
import { ProtectedRoute } from "./routeProtectors/ProtectedRoute";
import {Toaster} from 'react-hot-toast'

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/demo-form"
              element={
                <ProtectedRoute>
                  <DemoForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
