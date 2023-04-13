import Navbar from "../components/Navbar";
import LogoImg from "../assets/udemy-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { baseUrl } from "../API/baseUrl";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const Signup = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    nameErr: "",
    emailErr: "",
    passErr: "",
  });

  // Signup user
  const signupUser = async (e) => {
    e.preventDefault();
    try {
      const response = await baseUrl.post("/create-user", data);
      if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem('eLearningUserToken',response.data.token)
          dispatch(setUser(response.data.user))
        navigate("/");
      }
    } catch (err) {
      // handle err
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-5 sm:mt-10 gap-2">
        <img src={LogoImg} className="w-32" alt="" />
        <form onSubmit={signupUser} className="">
          <div className="flex flex-col justify-center items-center w-screen gap-4">
            <div className="w-4/6 sm:w-1/2 lg:w-1/4 max-w-sm">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 text-sm font-medium text-gray-800 absolute">
                Name
              </p>
              <input
                required
                type="text"
                onChange={(e) => {
                  const nameReg = /^[^-\s][a-zA-Z0-9_\s-]+$/;
                  if (e.target.value.length === 0) {
                    setErr({ ...err, nameErr: "This field is required" });
                  } else {
                    if (!nameReg.test(e.target.value)) {
                      setErr({ ...err, nameErr: "Enter a valid name" });
                    } else {
                      setData({ ...data, name: e.target.value });
                      setErr({ ...err, nameErr: "" });
                    }
                  }
                }}
                className="border w-full placeholder-gray-400 focus:outline-none focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
              />
              {err.nameErr && (
                <small style={{ color: "red" }}>{err.nameErr}</small>
              )}
            </div>
            <div className="w-4/6 sm:w-1/2 lg:w-1/4 max-w-sm">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 text-sm font-medium text-gray-800 absolute">
                Email
              </p>
              <input
                required
                type="email"
                onChange={(e) => {
                  const regEmail =
                    /^\S+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if (
                    e.target.value.length > 0 &&
                    !regEmail.test(e.target.value)
                  ) {
                    setErr({
                      ...err,
                      emailErr: "Enter a valid email address",
                    });
                  } else {
                    let email = e.target.value.trim();
                    setData({ ...data, email: email });
                    setErr({ ...err, emailErr: "" });
                  }
                  if (e.target.value.length === 0) {
                    setErr({
                      ...err,
                      emailErr: "This field is required",
                    });
                  }
                }}
                className="border w-full placeholder-gray-400 focus:outline-none focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
              />
              {err.emailErr && (
                <small style={{ color: "red" }}>{err.emailErr}</small>
              )}
            </div>
            <div className=" relative w-4/6 sm:w-1/2 lg:w-1/4 max-w-sm">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 text-sm font-medium text-gray-800 absolute">
                Password
              </p>
              <div className="flex">
                <input
                  required
                  type={showPass ? "text" : "password"}
                  onChange={(e) => {
                    const passReg = /^[^-\s][a-zA-Z0-9_\s-]+$/;
                    if (e.target.value.length === 0) {
                      setErr({ ...err, passErr: "This field is required" });
                    } else if (e.target.value.length < 8) {
                      setErr({ ...err, passErr: "Minimum 8 characters" });
                    } else {
                      if (!passReg.test(e.target.value)) {
                        setErr({
                          ...err,
                          passErr: "Only letters and numbers allowed",
                        });
                      } else {
                        setData({ ...data, password: e.target.value });
                        setErr({ ...err, passErr: "" });
                      }
                    }
                  }}
                  className="border w-full placeholder-gray-400 focus:outline-none focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                />
                <div className="absolute cursor-pointer right-5 top-5">
                  {showPass ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPass(false)}
                      size={20}
                    />
                  ) : (
                    <AiOutlineEye onClick={() => setShowPass(true)} size={20} />
                  )}
                </div>
              </div>
              {err.passErr && (
                <small style={{ color: "red" }}>{err.passErr}</small>
              )}
            </div>
            <button
              type="submit"
              className="rounded w-4/6 sm:w-1/2 lg:w-1/4 max-w-sm py-3 font-medium text-xl bg-gray-900 text-white"
            >
              Signup
            </button>
          </div>
        </form>
        <small className="flex text-end mt-2 gap-2">
          Already have an account?
          <p
            onClick={() => navigate("/login")}
            className="cursor-pointer font-medium underline underline-offset-2"
          >
            Login here
          </p>
        </small>
      </div>
    </>
  );
};

export default Signup;
