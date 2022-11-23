import { api } from "@nitric/sdk";

const bookApi = api('main');

const bookDB = collection('books');

const coverImages = bucket('cover-images');

bookApi.get("/books/:name", async (ctx) => {
    const { name } = ctx.req.params;

    ctx.res.body = `Hello ${name}`;

    return ctx;
});
