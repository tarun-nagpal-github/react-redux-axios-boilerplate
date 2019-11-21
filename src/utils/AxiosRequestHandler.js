/*
Axios Request Handler
Params: 
type    -> GET,POST,DELETE, PUT
url     -> Request Url
data    -> Request Body
headers -> Request Header
*/
import { AxiosErrorHandler } from "./AxiosErrorHandler";
import Axios from "axios";

export const AxiosRequestHandler = (type, url, data="", headers="") => {
    switch(type){
        case "GET":
            return Axios.get(
                url,
                headers
            ).catch(AxiosErrorHandler);
        case "POST":
            return Axios.post(
                url,
                data,
                headers
            ).catch(AxiosErrorHandler);
        case "DELETE":
            return Axios.delete(
                url,
                { headers, data }
            ).catch(AxiosErrorHandler);
        case "PUT":
            return Axios.put(
                url,
                data,
                headers
            ).catch(AxiosErrorHandler);
    }
}