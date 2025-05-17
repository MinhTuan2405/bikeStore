import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import app from "./src/app/app.js"

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`  API running on port ${PORT}`);
});
