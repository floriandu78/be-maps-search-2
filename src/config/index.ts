import { config } from 'dotenv'
config();

export const apiKey: string = process.env.TOMTOM_API_KEY ?? (() => {
    throw new Error('TOMTOM_API_KEY is not defined');
  })();