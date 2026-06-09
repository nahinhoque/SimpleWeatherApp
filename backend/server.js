import express from "express";
import cors from "cors";
import countryRoutes from "./routes/countryRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", countryRoutes);
app.use("/api", cityRoutes);
app.use("/api", weatherRoutes);



// ONLY start the local server if we aren't running on Vercel ✅
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Local server is running on port ${PORT}`);
    });
}

export default app;