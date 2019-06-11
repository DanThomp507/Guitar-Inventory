import express from "express";
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
} );
