import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async () => {
    // Connect database
    await connectDB();

    const port = process.env.PORT || 5173; // Use Railway's PORT env variable if available

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    });
};

startServer();