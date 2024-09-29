import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('quizes')
export class QuizEntity extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'Unique identifier for each quiz',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    title: string;

    @Column({
        type: 'text',
    })
    description: string;

    @Column({type:'boolean', default:1})
    isActive: boolean;
}