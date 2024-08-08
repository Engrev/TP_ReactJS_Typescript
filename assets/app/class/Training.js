export class Training {
    _ldContext;
    _ldId;
    _ldType;
    id;
    startAt;
    endAt;
    duration;
    volume;
    createdAt;
    updatedAt;
    exercises = [];
    constructor(training) {
        this._ldContext = training['@context'];
        this._ldId = training['@id'];
        this._ldType = training['@type'];
        this.id = training['id'];
        this.startAt = training['startAt'];
        this.endAt = training['endAt'];
        this.duration = training['duration'];
        this.volume = training['volume'];
        this.createdAt = training['createdAt'];
        this.updatedAt = training['updatedAt'];
        this.exercises = training['exercises'];
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
