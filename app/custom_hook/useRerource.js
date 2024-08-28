import { useContext } from "react";
import { AuthContext } from "../components/context/auth";
import useSWR from "swr";

export default function useResource(){

    const apiUrl = 'http://localhost:8000/api/v1/cars/';
    const { token } = useContext(AuthContext)
    const {data, error, mutate} = useSWR([apiUrl,token],fetchResourse)

    async function fetchResourse(){
        if(!token){
            return {recource : null};
        }
        else{
            try{
                const res = await fetch(apiUrl, config())
                const resJSON = await res.json()
                // console.log(resJSON);
                return resJSON;
            }
            catch(err){
                console.log(err);
            }
        }

    }

    async function createResource(carInfo){
        if(!token) {
            return;
        }
        try{
            const options = config()
            options.method = "POST"
            options.body = JSON.stringify(carInfo)
            await fetch(apiUrl,options)
            mutate()
        }
        catch(err){
            console.log(err);
        }
    }

    async function deleteResource(id) {
        try {
           const url = apiUrl+id
        //    console.log(url)
           const options = config()
           options.method = "DELETE"
           console.log(options)
           await fetch(url, options)
           mutate()
        }
        catch(err){
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
        recource : data,
        deleteFun : deleteResource,
        addCar : createResource,
        loading : token && !error && !data
    }
}