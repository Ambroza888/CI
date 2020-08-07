import * as express from 'express';
import { environment }  from './environments/environment'

const app = express();

app.use(express.json());




app.set('port', process.env.PORT || environment.PORT || 3000);
const server = app.listen(app.get('port'), function () {
  console.log('KT3 order API Express server listening on port %d in %s mode', app.get('port'), app.settings.env);
});
server.on('error', console.error);
export default app;