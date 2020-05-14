import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    console.log(req.session);
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Not permitted :)');
}

const loginRouter = Router();

loginRouter.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
            <section>
                <fieldset>
                    <legend>Email</legend>
                    <input name="email" />
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <input name="password" type="password" />
                </fieldset>

                <button type="submit"> Submit </button>
            </section>
        <form>
    `);
});

loginRouter.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email && password && email === 'cjs' && password === 'cjs') {
        req.session = { loggedIn: true };

        res.redirect('/');
    } else {
        res.status(422).send('You must provide a valid email');
    }
});

loginRouter.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <article>
                <h1> You are Logged in CJS !</h1>
                <a href="/logout"> Logout </a>
            <article>
        `);
    } else {
        res.send(`
            <article>
                <h1> You are not Logged in !</h1>
                <a href="/login"> Login </a>
            <article>
        `);
    }
});

loginRouter.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

loginRouter.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome Private CJS !');
});

export { loginRouter };
