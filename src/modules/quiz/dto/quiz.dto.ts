import { IsEmpty, IsNotEmpty, Length } from "class-validator";

export class QuizDTO {
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @IsNotEmpty({ message: 'description is required' })
    @Length(10, 100, { message: 'description must be between 10 and 100 characters' })
    description: string;
}