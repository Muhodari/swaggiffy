import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { string } from 'yargs';
import { registerDefinition } from './helpers/registerDefinition';
// import { Schema } from './decorators/Schema';
import { registerSchema } from './helpers/registerSchema';
import { Swaggiffy } from './Swaggiffy';

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
router.get('/recent/:status/name/:name', (req: any, res: any) => {
    res.send('recents');
});

router.get('/manipulate', (req: any, res: any) => {
    res.send('recents');
});

router.post('/', (req: any, res: any) => {
    res.send('Created');
});

router.post('/manipulate', (req: any, res: any) => {
    res.send('recents');
});

router.put('/:id', (req: any, res: any) => {
    res.send('Update');
});

router.put('/manipulate/:name/test', (req: any, res: any) => {
    res.send('recents');
});

router.delete('/:id', (req: any, res: any) => {
    res.send('Delete');
});

app.use('/users', router);

registerDefinition(router, { tags: 'Users', basePath: 'users', mappedSchema: 'User' });

const schema = {
    username:'sdfaf',
    phone_number: 'sdfa'
}
registerSchema('User', schema);
new Swaggiffy().setupExpress(app).swaggiffy();
