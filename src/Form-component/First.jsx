import { useState } from "react";

function First({ formData, setFormData }) {
    const [errors, setErrors] = useState({}); // حالة محلية لتخزين الأخطاء

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        
        // التحقق من صحة البيانات وتحديث حالة الأخطاء
        if (value.trim() === "") {
            setErrors(prevErrors => ({ ...prevErrors, [name]: true }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, [name]: false }));
        }
    }

    return (
        <div className="grid gap-10">
            <div className="gap-2 grid">
                <h1 className="text-4xl text-[var(--blue-prime)] font-semibold">Personal info</h1>
                <p className="text-[var(--Cool-gray)] ">Please provide your name, email address, and phone number.</p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-1 curs">
                    <div className="flex justify-between">
                        <label className="text-[var(--blue-prime)] font-medium text-sm">Name</label>
                        {errors.name && <span id="error1" className="text-[var(--red-prime)]">This field is required</span>}
                    </div>
                    <input className=" cursor-pointer"
                        type="text"
                        name="name"
                        placeholder="e.g. Stephen King"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid gap-1 curs">
                    <div className="flex justify-between">
                        <label className="text-[var(--blue-prime)] font-medium text-sm">Email Address</label>
                        {errors.email && <span id="error2" className="text-[var(--red-prime)]">This field is required</span>}
                    </div>
                    <input className=" cursor-pointer"
                        type="email"
                        name="email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid gap-1 curs">
                    <div className="flex justify-between">
                        <label className="text-[var(--blue-prime)] font-medium text-sm">Phone Number</label>
                        {errors.phone && <span id="error3" className="text-[var(--red-prime)]">This field is required</span>}
                    </div>
                    <input className=" cursor-pointer"
                        type="tel"
                        name="phone"
                        placeholder="e.g. +1 234 567 890"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default First;
