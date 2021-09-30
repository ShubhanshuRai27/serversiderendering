import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "./src/app";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(express.static("build"));

app.get("*", (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const html = `
    <html>
        <head>
        </head>
        <body>
            <div id="root">
                ${content}
            </div>
        </body>
    </html>`;

  res.send(html);
});

app.listen(PORT, () => console.log(`Server is live on port ${PORT}`));
