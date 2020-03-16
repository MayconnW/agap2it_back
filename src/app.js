import "./bootstrap";

import express from "express";
import * as Sentry from "@sentry/node";
import "express-async-errors";
import Youch from "youch";
import cors from "cors";
import http from "http";
import routes from "./routes";
import sentryConfig from "./config/sentry";

class App {
  constructor() {
    this.app = express();

    Sentry.init(sentryConfig);

    this.midllewares();
    this.routes();
    this.exceptionHandler();
    this.server = http.Server(this.app);
  }

  midllewares() {
    this.app.use(Sentry.Handlers.requestHandler());
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
    this.app.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.app.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === "development") {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: "Internal server error" });
    });
  }
}

export default new App().server;
