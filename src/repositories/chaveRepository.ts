import { AppDataSource } from "../data-source";
import { Chave } from "../entities/Chave";

export const chaveRepository = AppDataSource.getRepository(Chave)