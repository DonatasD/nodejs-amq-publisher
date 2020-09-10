import service from './service';
import express from 'express';

const router = express.Router();

router.route('/publisher/publish').get((req, res) => res.send(service.publish('hello world')));

export default router;
