import { useState, useEffect } from "react";

function Third({ formData, setFormData }) {
  const [selectedAddOns, setSelectedAddOns] = useState(formData.addOns || []);
  const theplan = formData.plan;

  useEffect(() => {
    setSelectedAddOns(formData.addOns || []);
  }, [formData.addOns]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setFormData((prevData) => ({
        ...prevData,
        addOns: [...prevData.addOns, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        addOns: prevData.addOns.filter((item) => item !== value),
      }));
    }
  };
console.log(formData.addOns)
  return (
    <div className="grid gap-8">
      <div className="gap-2 grid">
        <h1 className="text-4xl text-[var(--blue-prime)] font-semibold">
          Pick add-ons
        </h1>
        <p className="text-[var(--Cool-gray)]">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="grid gap-4">
        <label
          htmlFor="addons1"
          className={`justify-between px-5 py-4 rounded-lg hover:border-blue-500 flex items-center gap-10 cursor-pointer border border-gray-500 ${selectedAddOns.includes("Online service") ? "bg-[var(--monaliza)] border-2 border-blue-700" : ""}`}
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="addOns"
              id="addons1"
              className="w-5 h-5"
              value="Online service"
              checked={selectedAddOns.includes("Online service")}
              onChange={handleChange}
            />
            <div>
              <p className="font-medium text-[var(--blue-prime)]">
                Online service
              </p>
              <p className="text-sm text-[var(--Cool-gray)]">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <p className="text-[var(--blue-second)]">
            {theplan === '9' || theplan === '12' || theplan === '15' ? '+$1/mo' : '+$10/yr'}
          </p>
        </label>

        <label
          htmlFor="addons2"
          className={` justify-between px-5 py-4 rounded-lg hover:border-blue-500 flex items-center gap-10 cursor-pointer border border-gray-500 ${selectedAddOns.includes("Larger storage") ? "bg-[var(--monaliza)] border-2 border-blue-700-red-500" : ""}`}
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="addOns"
              id="addons2"
              className="w-5 h-5"
              value="Larger storage"
              checked={selectedAddOns.includes("Larger storage")}
              onChange={handleChange}
            />
            <div>
              <p className="font-medium text-[var(--blue-prime)]">
                Larger storage
              </p>
              <p className="text-sm text-[var(--Cool-gray)]">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          <p className="text-[var(--blue-second)]">
            {theplan === '9' || theplan === '12' || theplan === '15' ? '+$2/mo' : '+$20/yr'}
          </p>
        </label>

        <label
          htmlFor="addons3"
          className={` justify-between px-5 py-4 rounded-lg hover:border-blue-500 flex items-center gap-10 cursor-pointer border border-gray-500 ${selectedAddOns.includes("Customizable profile") ? "bg-[var(--monaliza)] border-2 border-blue-700" : ""}`}
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="addOns"
              id="addons3"
              className="w-5 h-5"
              value="Customizable profile"
              checked={selectedAddOns.includes("Customizable profile")}
              onChange={handleChange}
            />
            <div>
              <p className="font-medium text-[var(--blue-prime)]">
                Customizable profile
              </p>
              <p className="text-sm text-[var(--Cool-gray)]">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <p className="text-[var(--blue-second)]">
            {theplan === '9' || theplan === '12' || theplan === '15' ? '+$2/mo' : '+$20/yr'}
          </p>
        </label>
      </div>
    </div>
  );
}

export default Third;
