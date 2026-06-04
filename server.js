// Load environment variables before any other import is evaluated.
// (ESM evaluates imports before module-body code, so dotenv must run as a
// side-effect import here — db.js reads process.env at import time.)
import 'dotenv/config';

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message, err.stack);
  process.exit(1);
});

import app from './src/app.js';
import { connectDB } from './src/config/db.js';

const PORT = process.env.PORT || 4000;

let server;

// Connect to the database before accepting traffic
connectDB()
  .then(() => {
    server = app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Database connection error: ${err.message}`);
    process.exit(1);
  });

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down gracefully...');
  console.error(err.name, err.message);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});
