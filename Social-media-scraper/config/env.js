import 'dotenv/config'

export const PORT = process.env.PORT || 3000;

export const GOOGLE_API = process.env.GOOGLE_API;

if (GOOGLE_API === null) {
    console.log('Plese provide the Google api key ');
}

