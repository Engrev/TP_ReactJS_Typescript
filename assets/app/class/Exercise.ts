export class Exercise {
    hydraContext: string | object
    hydraId: string
    hydraType: string
    id: number
    name: string
    equipment: string
    primaryMuscleGroup: string
    secondaryMuscleGroup: string | null
    image: string
    comment: string | null
    createdAt: string | Date
    updatedAt: string | Date

    constructor(exercise: any) {
        this.hydraContext = exercise['@context']
        this.hydraId = exercise['@id']
        this.hydraType = exercise['@type']
        this.id = exercise['id']
        this.name = exercise['name']
        this.equipment = exercise['equipment']
        this.primaryMuscleGroup = exercise['primaryMuscleGroup']
        this.secondaryMuscleGroup = exercise['secondaryMuscleGroup']
        this.image = exercise['image']
        this.comment = exercise['comment']
        this.createdAt = exercise['createdAt']
        this.updatedAt = exercise['updatedAt']
    }
}
