import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizDTO } from './dto/quiz.dto';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) {}

    @Get('/')
    getAllQuiz(){
        return this.quizService.getAllQuiz()
    }

    @Post('/')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
   async createQuiz(@Body() quizData:QuizDTO){
        // Create a new quiz
        return await {
            data: this.quizService.createNewQuiz(quizData),
        }
    }
}
