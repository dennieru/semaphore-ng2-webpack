import { FormDataService } from './form-data.service';
import { FormData } from '../models';

describe('Service: FormDataService', () => {
    let service: FormDataService;

    beforeEach(() => service = new FormDataService());

    describe('#getAllForms', () => {
        it('should return an array of forms', () => {
            const forms = service.getAllForms();

            expect(forms).toEqual([
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
            ]);
        });
    });
});