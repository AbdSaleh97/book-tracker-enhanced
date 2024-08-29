'use client';
import Car_list from "../components/Car_list";
import { AuthContext } from "../components/context/auth"; 
import { useContext } from "react";

export default function RenderCars() {
    const { token } = useContext(AuthContext);

    return (
        <AuthContext>
            <Car_list />
        </AuthContext>
    )
}
