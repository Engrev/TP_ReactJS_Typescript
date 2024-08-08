export class Folder {
    _ldContext;
    _ldId;
    _ldType;
    id;
    title;
    routines = [];
    constructor(folder) {
        this._ldContext = folder['@context'];
        this._ldId = folder['@id'];
        this._ldType = folder['@type'];
        this.id = folder['id'];
        this.title = folder['title'];
        this.routines = folder['routines'];
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
