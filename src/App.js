import "./App.css";
import Home from "./pages/Home";
import DemoForm from "./pages/DemoForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";
import { PublicRoute } from "./routeProtectors/PublicRoute";
import { ProtectedRoute } from "./routeProtectors/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/Spinner";
import { useState } from "react";
import { SpinnerContext } from "./components/Context";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

function App() {
  const [loading,setLoading] = useState(false)
  const showLoading = ()=>{
    setLoading(true)
  }
  const hideLoading = ()=>{
    setLoading(false)
  }
  return (
    <>
      <Provider store={store}>
        <SpinnerContext.Provider value={{showLoading:showLoading,hideLoading:hideLoading}}>
          <Toaster position="top-center" reverseOrder={false} />
          {loading && <Spinner />}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/book-demo"
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
        </SpinnerContext.Provider>
      </Provider>
    </>
  );
}

export default App;
