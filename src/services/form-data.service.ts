import { FormData } from '../models';

export class FormDataService {
    getAllForms(): Array<FormData> {
        return [
            {
                id: 1,
                questions: [],
                title: 'Pizza Form'
            },
            {
                id: 2,
                questions: [],
                title: 'Hamburger Questions'
            },
            {
                id: 3,
                questions: [],
                title: 'On Burritos'
            },
            {
                id: 4,
                questions: [],
                title: 'Grilling Cheese'
            }
        ];
    }
}