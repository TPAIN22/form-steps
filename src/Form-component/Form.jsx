import React, { useState } from "react";
import Desk from "../assets/images/bg-sidebar-desktop.svg";
import First from "./First.jsx";
import Second from "./Second.jsx";
import Third from "./Third.jsx";
import Thanks from "./Thanks.jsx";
import Summary from "./Summary.jsx";
import Mobile from "../assets/images/bg-sidebar-mobile.svg";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: 0,
    addOns: [],
  });

  const [page, setPage] = useState(0);

  const displayPage = () => {
    switch (page) {
      case 0:
        return <First formData={formData} setFormData={setFormData} />;
      case 1:
        return <Second formData={formData} setFormData={setFormData} />;
      case 2:
        return <Third formData={formData} setFormData={setFormData} />;
      case 3:
        return <Summary formData={formData} setFormData={setFormData} />;
      default:
        return <Thanks />;
    }
  };

  const updateStepIndicator = () => {
    const steps = ["one", "two", "three", "four"];
    steps.forEach((step, index) => {
      const element = document.getElementById(step);
      if (element) {
        if (index === page) {
          element.classList.add("active-number");
        } else {
          element.classList.remove("active-number");
        }
      }
    });
  };

  React.useEffect(() => {
    updateStepIndicator();
  }, [page]);

  return (
    <div className="flex w-full max-sm:bg-[var(--Light-gray)] bg-white justify-between items-center gap-16 max-sm:gap-0 p-4 rounded-2xl relative max-sm:flex-col max-sm:p-0">
      <div className="">
        <div className="text-white absolute left-8 top-10 grid gap-8 max-sm:grid-flow-col max-sm:top-8 max-sm:left-16">
          {["one", "two", "three", "four"].map((step, index) => (
            <div className="flex gap-4 items-center justify-start" key={step}>
              <div
                id={step}
                className="rounded-full border border-white font-bold px-3 py-1"
              >
                {index + 1}
              </div>
              <div className=" max-sm:hidden">
                <h1 className="text-[var(--Pastel-blue)] text-xs">
                  STEP {index + 1}
                </h1>
                <p>
                  {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"][index]}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <img src={Mobile} alt="background" className="mobile" />
        <img src={Desk} alt="Sidebar Background" className="desk" />
      </div>

      <div className="flex flex-col justify-between gap-12 px-12 max-sm:bg-[var(--Light-gray)] bg-white">
        <div className="bg-white w-full max-sm:p-4 max-sm:-mt-16 max-sm:min-w-80  rounded-xl  ">{displayPage()}</div>
        
      
        <div
          className={`flex items-center mt-10 w-full bg-white py-6 max-sm:px-5 rounded-xl ${
            page === 0 ? "justify-end" : page < 4 ? "justify-around" : "hidden"
          }`}
        >
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            className={`${page === 0 ? "hidden" : "block"}`}
          >
            Go Back
          </button>
          <button
            onClick={() => {
              if (page < 4) {
                if (
                  page === 0 &&
                  (formData.name.trim() === "" ||
                    formData.email.trim() === "" ||
                    formData.phone.trim() === "")
                ) {
                  alert(
                    "Please fill out all fields on the first page before proceeding."
                  );

                  return;
                }
                setPage((prev) => prev + 1);
              }
            }}
            className={`px-6 py-2 text-white rounded-xl ${
              page === 3 ? "bg-[var(--blue-second)]" : "bg-[var(--blue-prime)]"
            }`}
          >
            {page === 3 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
