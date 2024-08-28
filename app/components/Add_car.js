import useResource from "../custom_hook/useResource";

export default function AddCar() {

    const { addCar } = useResource();  // Use camelCase for function names

    function submitHandler(e) {
        e.preventDefault();
        const carInfo = {
            car_brand: e.target.car_brand.value,
            car_model: e.target.car_model.value,
            car_price: parseInt(e.target.car_price.value, 10),
            buyer: 1,
            is_bought: true, 
            buy_time: new Date().toISOString()
        };
        addCar(carInfo);  // Call the function with the correct name
    }

    return (
        <>
            <h3>Add New Car</h3>
            <form onSubmit={submitHandler}>
                <input className="border border-black" name="car_brand" placeholder="Car Brand" />
                <input className="border border-black" name="car_model" placeholder="Car Model" />
                <input className="border border-black" name="car_price" placeholder="Car Price" type="number" />
                <button className="focus:outline-none text-white bg-green-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900" type="submit">Add</button>
            </form>
        </>
    );
}
