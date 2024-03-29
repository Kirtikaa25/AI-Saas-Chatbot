import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// four request are made in the backend development
// GET - if we want to get some data from this server
// PUT - if you want to update modify
// POST - if you want to send some data
// DELETE - if you want to send some data which is to be deleted
// connections and listeners
const PORT = process.env.PORT || 3000;
connectToDatabase().then(() => {
    app.listen(3000, () => console.log("Server Open and Connected to Database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map