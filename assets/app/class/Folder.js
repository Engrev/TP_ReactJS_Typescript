export class Folder {
    hydraContext;
    hydraId;
    hydraType;
    id;
    title;
    routines = [];
    constructor(folder) {
        this.hydraContext = folder['@context'];
        this.hydraId = folder['@id'];
        this.hydraType = folder['@type'];
        this.id = folder['id'];
        this.title = folder['title'];
        this.routines = folder['routines'];
    }
}
