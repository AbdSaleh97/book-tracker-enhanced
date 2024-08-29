import AddCar from "./Add_car";
import useResource from "../custom_hook/useRerource";
import jwt_decode from 'jwt-decode';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/auth";
import UpdateCarModal from "./Update_model";

export default function Car_list(token) {
    // const { token } = useContext(AuthContext);
    const { resource, loading, deleteFun, updateCar } = useResource();
    const [decodedToken, setDecodedToken] = useState(null);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (token.access) {
            try {
                const decoded = jwt_decode(token.access);
                setDecodedToken(decoded);
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        }
    }, [token.access]);

    const handleEdit = (car) => {
        setSelectedCar(car);
        setIsModalOpen(true);
    };

    const handleUpdate = async (updatedCar) => {
        await updateCar(updatedCar);
        setIsModalOpen(false);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resource.map((car) => (
                <div key={car.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Car Information</h2>
                        <div className="mb-6 p-4 bg-gray-100 border border-gray-200 rounded-lg">
                            <p className="text-gray-800 text-lg mb-2">
                                <span className="font-semibold text-gray-900">Car Brand:</span> {car.car_brand}
                            </p>
                            <p className="text-gray-800 text-lg mb-2">
                                <span className="font-semibold text-gray-900">Car Model:</span> {car.car_model}
                            </p>
                            <p className="text-gray-800 text-lg mb-2">
                                <span className="font-semibold text-gray-900">Car Price:</span> ${car.car_price}
                            </p>
                            <p className="text-gray-800 text-lg mb-2">
                                <span className="font-semibold text-gray-900">Buyer ID:</span> {car.buyer}
                            </p>
                            <p className="text-gray-800 text-lg">
                                <span className="font-semibold text-gray-900">CAR ID:</span> {car.id}
                            </p>
                        </div>

                        <button
                            onClick={() => deleteFun(car.id)}
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xl px-6 py-4 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full"
                        >
                            DELETE
                        </button>

                        <button
                            onClick={() => handleEdit(car)}
                            className="px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-blue-700"
                        >
                            Edit
                        </button>


                    </div>
                </div>
            ))}
            <AddCar id={decodedToken ? decodedToken.user_id : null} />
            {isModalOpen && (
                <UpdateCarModal
                    carData={selectedCar}
                    onUpdate={handleUpdate}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}
