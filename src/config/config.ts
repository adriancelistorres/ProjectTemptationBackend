import { config } from 'dotenv';
require("dotenv").config();
export const { PORT, DB_HOST,DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
