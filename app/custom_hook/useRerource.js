import { useContext } from "react";
import { AuthContext } from "../components/context/auth";
import useSWR from "swr";

export default function useResource() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL+"api/v1/cars/";
    const { token } = useContext(AuthContext)
    const { data, error, mutate } = useSWR([apiUrl, token], fetchResourse)

    async function fetchResourse() {

        if (!token) {
            return { recource: null };
        }
        else {
            try {
                const res = await fetch(apiUrl, config())
                const resJSON = await res.json()
                return resJSON;
            }
            catch (err) {
                console.log(err);
            }
        }

    }

    async function createResource(carInfo) {
        if (!token) {
            return;
        }
        try {
            const options = config()
            options.method = "POST"
            console.log(carInfo);
            
            options.body = JSON.stringify(carInfo)
            await fetch(apiUrl, options)
            mutate()
        }
        catch (err) {
            console.log(err);
        }
    }

    async function deleteResource(id) {
        try {
            const url = apiUrl + id
            const options = config()
            options.method = "DELETE"
            await fetch(url, options)
            mutate()
        }
        catch (err) {
            console.log(err);

        }
    }

    async function updateResource(carInfo) {
        if (!token) {
            return;
        }
        try {
            const url = apiUrl + carInfo.id + '/';            
            const options = config();
            options.method = "PUT";
            options.body = JSON.stringify(carInfo);  

            await fetch(url, options);
            mutate(); 
        } catch (err) {
            console.log(err);
        }
    }


    function config() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token.access
            }
        };
    }
    return {
        resource: data,
        deleteFun: deleteResource,
        addCar: createResource,
        updateCar: updateResource,
        loading: token && !error && !data
    }
}