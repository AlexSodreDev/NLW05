import { Router } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

routes.post("/settings", async (request, response) => {

});

export { routes };
