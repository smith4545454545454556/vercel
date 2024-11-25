import DataModel from "../model/data.js"

export const register = async (name) => {
    console.log(name, "name")
    const data = new DataModel({
        name: name
    })
    await data.save()
    return data
}