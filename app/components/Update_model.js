import { useState } from "react";

export default function UpdateCarModal({ carData, onUpdate, onClose }) {
    const [formData, setFormData] = useState({
        car_brand: carData.car_brand || "",
        car_model: carData.car_model || "",
        car_price: carData.car_price || "",
        buyer: carData.buyer || "",
        is_bought: carData.is_bought || false,
        buy_time: carData.buy_time || new Date().toISOString()
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

    function submitHandler(e) {
        e.preventDefault();
        onUpdate({
            id: carData.id,
            ...formData
        });
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-center text-black">Update Car Information</h3>
                <form onSubmit={submitHandler} className="space-y-4">
                    <input
                        className="border border-black rounded-lg p-3 w-full text-black"
                        name="car_brand"
                        value={formData.car_brand}
                        onChange={handleChange}
                        placeholder="Car Brand"
                        required
                    />
                    <input
                        className="border border-black rounded-lg p-3 w-full text-black"
                        name="car_model"
                        value={formData.car_model}
                        onChange={handleChange}
                        placeholder="Car Model"
                        required
                    />
                    <input
                        className="border border-black rounded-lg p-3 w-full text-black"
                        name="car_price"
                        type="number"
                        value={formData.car_price}
                        onChange={handleChange}
                        placeholder="Car Price"
                        required
                    />
                    <input
                        className="border border-black rounded-lg p-3 w-full text-black"
                        name="buyer"
                        value={formData.buyer}
                        onChange={handleChange}
                        placeholder="Buyer ID"
                        required
                    />
                    <div className="flex items-center">
                        <input
                            className="border border-black rounded-lg p-3 mr-2"
                            type="checkbox"
                            name="is_bought"
                            checked={formData.is_bought}
                            onChange={handleChange}
                        />
                        <label className="text-black">Is Bought</label>
                    </div>
                    <input
                        className="border border-black rounded-lg p-3 w-full text-black"
                        name="buy_time"
                        type="datetime-local"
                        value={new Date(formData.buy_time).toISOString().slice(0, 16)}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2 w-full"
                    >
                        Update Car
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-500">Cancel</button>
            </div>
        </div>
    );
}
