// import 'reflect-metadata';
import { Swaggiffy } from './Swaggiffy';
import { registerDefinition, registerDefinitions } from './helpers/registerDefinition';
// export * from './globals';
// export * from './decorators/Schema';
// export * from './errors/SwaggiffyError';
// export * from './Swaggiffy';

const express = require('express');
const app = express();

app.listen(5008, () => {
    console.log('Server is running 2');
});

app.get('/', (req: any, res: any) => {
    return res.send('Server is running');
});

const router = express.Router();

router.get('/', (req: any, res: any) => {
    res.send('get all');
});
router.get('/recent', (req: any, res: any) => {
    res.send('recents');
});
router.get('/:id', (req: any, res: any) => {
    res.send('Get by Id');
});

router.post('/', (req: any, res: any) => {
    res.send('Created');
});

router.put('/:id', (req: any, res: any) => {
    res.send('Update');
});

router.delete('/:id', (req: any, res: any) => {
    res.send('Delete');
});

registerDefinition({ router, tags: 'Users' });
new Swaggiffy().setupExpress(app).swaggiffy();
