import express from "express";
import cors from "cors";
import countryRoutes from "../backend/routes/countryRoutes.js";
import cityRoutes from "../backend/routes/cityRoutes.js";
import weatherRoutes from "../backend/routes/weatherRoutes.js";

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