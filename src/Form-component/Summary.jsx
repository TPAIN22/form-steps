function Summary({ formData, payment }) {
    var pl = formData.plan;
  
    const getAddonPrice = (addon, plan) => {
      if (addon === "Online service") {
        return plan === "9" || plan === "12" || plan === "15" ? 1 : 10;
      } else if (addon === "Larger storage") {
        return plan === "9" || plan === "12" || plan === "15" ? 2 : 20;
      } else if (addon === "Customizable profile") {
        return plan === "9" || plan === "12" || plan === "15" ? 2 : 20;
      }
      return 0;
    };
  
    const calculateTotal = () => {
      let total = 0;
      if (pl === "9") total += 9;
      else if (pl === "12") total += 12;
      else if (pl === "15") total += 15;
      else if (pl === "90") total += 90;
      else if (pl === "120") total += 120;
      else if (pl === "150") total += 150;
  
      formData.addOns.forEach(addon => {
        total += getAddonPrice(addon, pl);
      });
  
      return total;
    };
  
    const total = calculateTotal();
  
    return (
      <div>
        <div className="gap-2 grid">
          <h1 className="text-4xl text-[var(--blue-prime)] font-semibold">
            Finishing up
          </h1>
          <p className="text-[var(--Cool-gray)]">
            Double-check everything looks OK before confirming.
          </p>
        </div>
  
        <div className="grid gap-4 px-6 py-4">
          <div className="flex justify-between">
            <div>
              <p className="text-[var(--blue-prime)] font-semibold">
                {pl === "9"
                  ? "Arcade (Monthly)"
                  : pl === "12"
                  ? "Advanced (Monthly)"
                  : pl === "15"
                  ? "Pro (Monthly)"
                  : pl === "90"
                  ? "Arcade (Yearly)"
                  : pl === "120"
                  ? "Advanced (Yearly)"
                  : pl === "150"
                  ? "Pro (Yearly)"
                  : ""}
              </p>
              <p className="text-[var(--Cool-gray)] text-sm underline mt-1">
                Change
              </p>
            </div>
            <p className="text-[var(--blue-prime)] font-semibold">
              {pl === "9"
                ? "$9/mo"
                : pl === "12"
                ? "$12/mo"
                : pl === "15"
                ? "$15/mo"
                : pl === "90"
                ? "$90/yr"
                : pl === "120"
                ? "$120/yr"
                : pl === "150"
                ? "$150/yr"
                : ""}
            </p>
          </div>
          <hr></hr>
  
          {formData.addOns.includes("Online service") && (
            <div className="flex justify-between">
              <p>Online service</p>
              <p>{pl === "9" || pl === "12" || pl === "15" ? "$1/mo" : "$10/mo"}</p>
            </div>
          )}
  
          {formData.addOns.includes("Larger storage") && (
            <div className="flex justify-between">
              <p>Larger storage</p>
              <p>{pl === "9" || pl === "12" || pl === "15" ? "$2/mo" : "$20/mo"}</p>
            </div>
          )}
  
          {formData.addOns.includes("Customizable profile") && (
            <div className="flex justify-between">
              <p>Customizable profile</p>
              <p>{pl === "9" || pl === "12" || pl === "15" ? "$2/mo" : "$20/mo"}</p>
            </div>
          )}
        </div>
        <div className="text-[var(--Cool-gray)] flex justify-between items-center">
          <p>Total (per Month)</p>
          <p className="text-2xl text-[var(--blue-second)] font-bold">${total}/mo</p>
        </div>
      </div>
    );
  }
  export default Summary;
  