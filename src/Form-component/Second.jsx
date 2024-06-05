import { useState } from "react";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import Summary from "./Summary";


function Second({formData, setFormData}) {
  const [payment , setPayment] = useState("monthly")
  const handdleCharge = (event) => {
      setPayment(event.target.value)
  }  
  const selectPlan = (event) => {
    setFormData({...formData , plan : event.target.value} );
  } 
  const selectedPlan = formData.plan;
  
    return (
    <div className="grid gap-10">
      <div className="gap-2 grid">
        <h1 className="text-4xl text-[var(--blue-prime)] font-semibold">
          Pick add-ons
        </h1>
        <p className="text-[var(--Cool-gray)] ">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex w-full flex-wrap justify-between items-center gap-2">
        <label
          htmlFor="arcade"
          className={` ${selectedPlan === '9' || selectedPlan === '90' ? 'border-2 border-blue-700 bg-[var(--monaliza)]' : ''} grid max-sm:w-full max-sm:flex gap-8 max-sm:gap-3 py-5 px-4 border min-w-32 rounded-lg border-gray-400`} 
        >
          <input type="radio" name="plan" id="arcade" className="hidden" value={ payment === 'monthly' ? 9 : payment === 'yearly'? 90 : 9 } onChange={selectPlan}/>
          <img src={Arcade} alt="" />
          <div>
            <p className="text-[var(--blue-prime)] font-medium">arcade</p>
            <p className="text-[var(--Cool-gray)] text-sm">{payment === 'monthly' ? '$9/mo' : '$90/yr'}</p>
            <p className={`text-[var(--blue-prime)] text-sm font-medium ${ payment === 'yearly' ?'block' : 'hidden' }`}> 2 months free</p>
          </div>
        </label>

        <label
          htmlFor="advanced"
          className={` ${selectedPlan === '12' || selectedPlan === '120' ? 'border-2 border-blue-700 bg-[var(--monaliza)]' : ''} grid gap-8 max-sm:w-full max-sm:flex max-sm:gap-3 py-5 px-4 border min-w-32 rounded-lg border-gray-400`}
        >
          <input type="radio" name="plan" id="advanced" className="hidden" value={payment === 'monthly' ? 12 :  120 } onChange={selectPlan} />
          <img src={Advanced} alt="" />
          <div className="">
            <p className="text-[var(--blue-prime)] font-medium">Advanced</p>
            <p className="text-[var(--Cool-gray)] text-sm">{payment === 'monthly' ? '$12/mo' : '$120/yr'}</p>
            <p className={`text-[var(--blue-prime)] text-sm font-medium ${ payment === 'yearly' ?'block' : 'hidden' }`}> 2 months free</p>
          </div>
        </label>

        <label
          htmlFor="pro"
          className={` ${selectedPlan === '15' || selectedPlan === '150' ? 'border-2 border-blue-700 bg-[var(--monaliza)]' : ''} grid gap-8  max-sm:w-full max-sm:flex max-sm:gap-3  py-5 px-4 border min-w-32 rounded-lg border-gray-400`}        >
          <input type="radio" name="plan" id="pro" className="hidden" value={payment === 'monthly' ? 15 : 150 }  onChange={selectPlan}/>
          <img src={Pro} alt="" />
          <div>
            <p className="text-[var(--blue-prime)] font-medium">Pro</p>
            <p className="text-[var(--Cool-gray)] text-sm">{payment === 'monthly' ? '$15/mo' : '$150/yr'}</p>
            <p className={`text-[var(--blue-prime)] text-sm font-medium ${ payment === 'yearly' ?'block' : 'hidden' }`}> 2 months free</p>
          </div>
        </label>
      </div>

      <div className="w-full flex items-center justify-center bg-[var(--monaliza)] rounded-lg gap-4">
        <label htmlFor="monthly">
          <input type="radio" name="charge" id="monthly" value='monthly' className="hidden" onChange={handdleCharge}/>
          <p className={`${payment === 'yearly' ? 'text-[var(--Cool-gray)]' : 'text-[blue-prime]'} font-bold`}>Monthly</p>
        </label>

        <div className={`${ payment === 'yearly' ? 'justify-end' : 'justify-start'} flex bg-[var(--blue-prime)] w-9 px-1 py-1 rounded-full`}><div className="bg-white w-3 h-3 rounded-full"></div></div>

        <label htmlFor="yearly">
          <input type="radio" name="charge" id="yearly" value='yearly' className="hidden" onChange={handdleCharge}/>
          <p className={`${payment === 'monthly' ? 'text-[var(--Cool-gray)]' : 'text-[blue-prime]'} font-bold`}>Yearly</p>
        </label>

      </div>
    </div>
  );
}

export default Second;
