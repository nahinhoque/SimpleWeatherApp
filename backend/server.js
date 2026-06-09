import express from "express";
import cors from "cors";
import countryRoutes from "./routes/countryRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.use("/api", countryRoutes);
app.use("/api", cityRoutes);
app.use("/api", weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on por ${PORT}`);
});


// ONLY start the local server if we aren't running on Vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// CRUCIAL FOR VERCEL: Export the app instance
export default app;