import { register } from "../service/data.js";

export const registerIt = async (req, res) => {
    const { name } = req.body
    const response = await register(name)
    console.log(response, "the response");

    return res.status(200).json({ message: "new data" })
}