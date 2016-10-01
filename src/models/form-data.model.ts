import { Question } from './question.model';

export interface FormData {
    id: Number;
    questions: Array<Question>;
    title: String;
}