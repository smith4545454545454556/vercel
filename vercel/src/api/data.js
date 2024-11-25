import axios from "axios"
import { baseUrl } from "../config/config.js"
export const data = async (data) => {
    console.log("data before the response", data)
    const response = await axios({
        url: `${baseUrl}/register`,
        method: "POST",
        data: data
    })
    return response

}