import useResource from "../custom_hook/useRerource";

export default function AddCar({ id }) {

    const { addCar } = useResource();

    function submitHandler(e) {
        e.preventDefault();
        const carInfo = {
            car_brand: e.target.car_brand.value,
            car_model: e.target.car_model.value,
            car_price: e.target.car_price.value,
            buyer: id,
            is_bought: true,
            buy_time: new Date().toISOString()
        };
        addCar(carInfo);
    }

    return (
        <>
            <h3 className="text-center text-3xl font-bold mb-6 text-gray-900">Add New Car</h3>
            <form onSubmit={submitHandler} className="flex flex-col items-center space-y-5">
                <label className="text-white">Car Brand</label>
                <input
                    className="border border-gray-300 rounded-lg p-4 w-full max-w-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    name="car_brand"
                    placeholder="Car Brand"
                    required
                />
                <label className="text-white">Car Model</label>

                <input
                    className="border border-gray-300 rounded-lg p-4 w-full max-w-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    name="car_model"
                    placeholder="Car Model"
                    required
                />
                <label className="text-white">Car Price</label>

                <input
                    className="border border-gray-300 rounded-lg p-4 w-full max-w-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    name="car_price"
                    placeholder="Car Price"
                    type="number"
                    required
                />
                <button
                    className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-lg px-5 py-3 w-full max-w-md"
                    type="submit"
                >
                    Add
                </button>
            </form>


        </>
    );
}
