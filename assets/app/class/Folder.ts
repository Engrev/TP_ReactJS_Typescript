import { Routine } from './Routine'

export class Folder {
    private _ldContext: string | object
    private _ldId: string
    private _ldType: string
    id: number
    title: string
    routines: Array<Routine | object> = []

    constructor(folder: any) {
        this._ldContext = folder['@context']
        this._ldId = folder['@id']
        this._ldType = folder['@type']
        this.id = folder['id']
        this.title = folder['title']
        this.routines = folder['routines']
    }

    get ldContext(): string | object {
        return this._ldContext
    }
    get ldId(): string {
        return this._ldId
    }
    get ldType(): string {
        return this._ldType
    }
}
