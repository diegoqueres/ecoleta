// Request param: parametros que vem na rota e que identificam um recurso
// Request query: parametros opcionais (filtros de busca, etc). Ex: http://localhost:3333/users/1?search=Diego
// Request body: Parâmetros enviados pelo POST para criação e atualização de informações
// index (listagem), show, create, update, delete

//Pode ser melhorado a partir daqui com Patterns
//-Service Pattern
//-Repository Pattern (Data Mapper)
import express from 'express';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes;