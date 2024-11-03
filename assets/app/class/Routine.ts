import { Exercise } from './Exercise'
import { Folder } from './Folder'

export class Routine {
    hydraContext: string | object
    hydraId: string
    hydraType: string
    id: number
    title: string
    folder: Folder
    createdAt: string | Date
    updatedAt: string | Date
    exercises: Array<Exercise> = []

    constructor(routine: any) {
        this.hydraContext = routine['@context']
        this.hydraId = routine['@id']
        this.hydraType = routine['@type']
        this.id = routine['id']
        this.title = routine['title']
        this.folder = routine['folder']
        this.createdAt = routine['createdAt']
        this.updatedAt = routine['updatedAt']
        this.exercises = routine['exercises']
    }
}
