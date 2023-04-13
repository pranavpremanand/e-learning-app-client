import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
const SignupForm = () => {
  const classList = ["Class 1", "Class 2", "Class 3"];
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    class: "",
  });
  const [err, setErr] = useState({
    nameErr: "",
    phoneErr: "",
    classErr: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info.class.length) {
      setErr({ ...err, classErr: "This field is required" });
    } else {
      toast.success('Request submitted')
      setInfo({name:'',phone:'',class:''})
      e.target.reset()
    }
  };
  return (
    <div className="flex justify-center lg:justify-start pt-5 lg:pl-20 lg:pt-20">
      <div className="w-9/12 gap-3 items-center bg-gray-200 py-16 grid lg:grid-cols-2 grid-cols-1 px-10">
        <div className="flex flex-col gap-3">
          <div className="text-2xl md:text-3xl font-bold">
            Book your Free Demo Session
          </div>
          <p className="font-semibold text-gray-500">
            Share your information for a call back
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <small>
              All the fields are mandatory{" "}
              <span className="text-red-500">*</span>
            </small>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              onChange={(e) => {
                const nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                if (e.target.value.length === 0) {
                  setErr({ ...err, nameErr: "This field is required" });
                } else if (e.target.value.length < 2) {
                  setErr({ ...err, nameErr: "Enter a valid name" });
                } else {
                  if (!nameReg.test(e.target.value)) {
                    setErr({ ...err, nameErr: "Enter a valid name" });
                  } else {
                    setInfo({ ...info, name: e.target.value });
                    setErr({ ...err, nameErr: "" });
                  }
                }
              }}
              className="p-2 w-full rounded-sm placeholder:text-neutral-400 focus:outline-none"
            />
            {err.nameErr && (
              <small className="text-red-600">{err.nameErr}</small>
            )}
            <div className="relative grid md:grid-cols-2 grid-cols-1 gap-2">
              <div>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  required
                  placeholder="Mobile Number"
                  onChange={(e) => {
                    const phoneRegex = /^[6-9]{1}[0-9]{9}$/;
                    if (e.target.value.length === 0) {
                      setErr({ ...err, phoneErr: "This field is required" });
                    } else if (!phoneRegex.test(e.target.value)) {
                      setErr({ ...err, phoneErr: "Enter valid phone number" });
                    } else {
                      setInfo({ ...info, phone: e.target.value });
                      setErr({ ...err, phoneErr: "" });
                    }
                  }}
                  className="p-2 w-full rounded-sm placeholder:text-neutral-400 focus:outline-none"
                />
                {err.phoneErr && (
                  <small className="text-red-600">{err.phoneErr}</small>
                )}
              </div>
              <div className="md:absolute right-0 md:w-1/2 rounded-sm">
                <div className="w-full py-2 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                    className={`w-full h-full rounded-sm items-center bg-white text-base flex justify-between px-2 ${
                      info.class ? "text-black" : "text-neutral-400"
                    }`}
                  >
                    {!info.class ? "Class" : info.class}{" "}
                    {!open ? <AiFillCaretDown /> : <AiFillCaretUp />}
                  </button>
                </div>
                {err.classErr && (
                  <small className="text-red-600">{err.classErr}</small>
                )}
                {open && (
                  <div className="self-end mt-2 bg-slate-500 rounded-md">
                    <ul>
                      {classList.map((val) => {
                        return (
                          <li
                            onClick={() => {
                              setInfo({ ...info, class: val });
                              setOpen(false);
                              setErr({ ...err, classErr: "" });
                            }}
                            className="cursor-pointer hover:text-gray-700 hover:bg-slate-100 p-1 text-md text-slate-100 rounded-sm"
                          >
                            {val}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 uppercase w-full rounded-sm bg-orange-600 py-2 text-white font-medium active:bg-orange-700"
            >
              Submit request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
