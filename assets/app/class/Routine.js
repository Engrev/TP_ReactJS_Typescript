export class Routine {
    _ldContext;
    _ldId;
    _ldType;
    id;
    title;
    folder;
    createdAt;
    updatedAt;
    exercises = [];
    constructor(routine) {
        this._ldContext = routine['@context'];
        this._ldId = routine['@id'];
        this._ldType = routine['@type'];
        this.id = routine['id'];
        this.title = routine['title'];
        this.folder = routine['folder'];
        this.createdAt = routine['createdAt'];
        this.updatedAt = routine['updatedAt'];
        this.exercises = routine['exercises'];
    }
    get ldContext() {
        return this._ldContext;
    }
    get ldId() {
        return this._ldId;
    }
    get ldType() {
        return this._ldType;
    }
}
