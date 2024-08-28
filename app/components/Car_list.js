import AddCar from "./Add_car";
import useResource from "../custom_hook/useResource"

export default function Car_list() {
    const { resource, loading } = useResource();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">            
            {resource.map((car) => (
                <div key={car.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Car Information</h2>
                        <div className="mb-4">
                            <p className="text-gray-700"><span className="font-bold">Car Brand:</span> {car.car_brand}</p>
                            <p className="text-gray-700"><span className="font-bold">Car Model:</span> {car.car_model}</p>
                            <p className="text-gray-700"><span className="font-bold">Car Price:</span> ${car.car_price}</p>
                            <p className="text-gray-700"><span className="font-bold">Buyer ID:</span> {car.buyer}</p>
                        </div>
                        <div className="text-center">
                            <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <AddCar />
        </div>
    );
}
