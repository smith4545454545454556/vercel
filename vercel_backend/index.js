import app from "./app.js";
import { port } from "./src/config/config.js";
import { connectToDB } from "./src/config/database.js";
app.listen(port, async () => {
    await connectToDB()
    console.log("server is running")
})
