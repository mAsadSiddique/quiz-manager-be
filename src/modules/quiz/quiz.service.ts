import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepositoryClass } from "./quiz.repository";
import type { QuizDTO } from "./dto/quiz.dto";


@Injectable()
export class QuizService { 

    constructor(@InjectRepository(QuizRepositoryClass) private readonly quizRepository: QuizRepositoryClass) {}

    getAllQuiz() {
        return 'All Quizzes';
    }

    async createNewQuiz(quiz:QuizDTO ) {
        return await this.quizRepository.save(quiz);
    }
}