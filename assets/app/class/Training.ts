import { Exercise } from './Exercise'

export class Training {
    private _ldContext: string | object
    private _ldId: string
    private _ldType: string
    id: number
    startAt: string | Date
    endAt: string | Date | null
    duration: string | null
    volume: number
    createdAt: string | Date
    updatedAt: string | Date
    exercises: Array<Exercise | object> = []

    constructor(training: any) {
        this._ldContext = training['@context']
        this._ldId = training['@id']
        this._ldType = training['@type']
        this.id = training['id']
        this.startAt = training['startAt']
        this.endAt = training['endAt']
        this.duration = training['duration']
        this.volume = training['volume']
        this.createdAt = training['createdAt']
        this.updatedAt = training['updatedAt']
        this.exercises = training['exercises']
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
