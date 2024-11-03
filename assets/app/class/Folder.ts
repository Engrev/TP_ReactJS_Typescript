export class Folder {
    hydraContext: string | object
    hydraId: string
    hydraType: string
    id: number
    title: string
    routines: Array<string> = []

    constructor(folder: any) {
        this.hydraContext = folder['@context']
        this.hydraId = folder['@id']
        this.hydraType = folder['@type']
        this.id = folder['id']
        this.title = folder['title']
        this.routines = folder['routines']
    }
}
