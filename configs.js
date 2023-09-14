import { fileURLToPath } from 'url';
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    ENV : process.env.PUBLIC_ENV,
    COOKIE_SECRET : process.env.COOKIE_SECRET,
    LANGUAGE : process.env.LANGUAGE.split('|'),
    ROOT_DIRECTORY : __dirname,
    IS_TEST : JSON.parse(process.env.IS_TEST)
}


export default config;