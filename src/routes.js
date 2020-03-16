import { Router } from "express";

import CountryController from "./app/controllers/CountryController";

const routes = new Router();

routes.get("/countries/", CountryController.get);
routes.get("/countries/:countryId", CountryController.get);

export default routes;
