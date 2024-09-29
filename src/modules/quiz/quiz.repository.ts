import { EntityRepository, Repository } from "typeorm";
import { QuizEntity } from "./quiz.entity";

@EntityRepository(QuizEntity)
export class QuizRepositoryClass extends Repository<QuizEntity> {}