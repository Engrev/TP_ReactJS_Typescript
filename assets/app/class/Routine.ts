import { Exercise } from './Exercise'
import { Folder } from './Folder'

export class Routine {
    private _ldContext: string | object
    private _ldId: string
    private _ldType: string
    id: number
    title: string
    folder: Folder
    createdAt: string | Date
    updatedAt: string | Date
    exercises: Array<Exercise | object> = []

    constructor(routine: any) {
        this._ldContext = routine['@context']
        this._ldId = routine['@id']
        this._ldType = routine['@type']
        this.id = routine['id']
        this.title = routine['title']
        this.folder = routine['folder']
        this.createdAt = routine['createdAt']
        this.updatedAt = routine['updatedAt']
        this.exercises = routine['exercises']
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
