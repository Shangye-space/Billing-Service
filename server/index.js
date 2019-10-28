const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/status', (ctx, next) => {
    ctx.body = {
        service: 'Billing Service',
        version: 'v0.1',
    };
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`Billing Service has started on port ${port}!`),
);
