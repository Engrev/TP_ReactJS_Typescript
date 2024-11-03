export class Routine {
    hydraContext;
    hydraId;
    hydraType;
    id;
    title;
    folder;
    createdAt;
    updatedAt;
    exercises = [];
    constructor(routine) {
        this.hydraContext = routine['@context'];
        this.hydraId = routine['@id'];
        this.hydraType = routine['@type'];
        this.id = routine['id'];
        this.title = routine['title'];
        this.folder = routine['folder'];
        this.createdAt = routine['createdAt'];
        this.updatedAt = routine['updatedAt'];
        this.exercises = routine['exercises'];
    }
}
