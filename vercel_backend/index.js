import app from "./app.js";
import { port } from "./src/config/config.js";
import { connectToDB } from "./src/config/database.js";
const PORT = process.env.PORT || 3100;

app.listen(PORT, async () => {
    await connectToDB()
    console.log("server is running")
})
