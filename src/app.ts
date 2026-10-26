// configures the setting for express app object
import express, {Express} from 'express';

const app: Express = express();

app.get('/health', (req, res) => {
    res.json({
        status: 'ok!',
        timeStamp: new Date().toString()
        
    })
});

export { app };