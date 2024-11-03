import { Exercise } from './Exercise';
import { Training } from './Training';
import { Folder } from './Folder';
import { Routine } from './Routine';
export class ApiResponse {
    ldContext;
    ldId;
    ldType;
    hydraTotalItems;
    hydraMember = [];
    hydraView;
    constructor(data) {
        this.ldContext = data['@context'];
        this.ldId = data['@id'];
        this.ldType = data['@type'];
        this.hydraTotalItems = data['hydra:totalItems'];
        //this.hydraMember = data['hydra:member']
        this.hydraView = data['hydra:view'];
        data['hydra:member'].forEach((item) => {
            if (item instanceof Exercise) {
                this.hydraMember.push(new Exercise(item));
            }
            else if (item instanceof Training) {
                this.hydraMember.push(new Training(item));
            }
            else if (item instanceof Folder) {
                this.hydraMember.push(new Folder(item));
            }
            else if (item instanceof Routine) {
                this.hydraMember.push(new Routine(item));
            }
            else {
                this.hydraMember.push(item);
            }
        });
    }
}
