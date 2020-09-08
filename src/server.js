import dotenv from 'dotenv';
import App from './App';

dotenv.config();

App.listen(process.env.SERVER_PORT || 3000);
