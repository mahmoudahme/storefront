import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRoutes from './handlers/products';
import userRoutes from './handlers/Customer';
import orderRoutes from './handlers/orders';
import orderItemRoutes from './handlers/order_items';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!');
});

productRoutes(app);
userRoutes(app);
orderRoutes(app);
orderItemRoutes(app);

app.listen(3000, function () {
    console.log(`starting app on: 3000`);
});

export default app;
