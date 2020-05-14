import express from 'express';
import { loginRouter } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({ keys: ['agfljadbfladbgladbglajbdgaeljbflaksnf'] }));

app.use(loginRouter);

app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
});
