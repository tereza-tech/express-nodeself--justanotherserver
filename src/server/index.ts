
import Server from './common/server';
import routes from './routes';

let PORT = '3000';


const port = parseInt(PORT ?? '3000');
export default new Server().router(routes).listen(port);
