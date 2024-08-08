export class Exercise {
    hydraContext;
    hydraId;
    hydraType;
    id;
    name;
    equipment;
    primaryMuscleGroup;
    secondaryMuscleGroup;
    image;
    comment;
    createdAt;
    updatedAt;
    constructor(exercise) {
        this.hydraContext = exercise['@context'];
        this.hydraId = exercise['@id'];
        this.hydraType = exercise['@type'];
        this.id = exercise['id'];
        this.name = exercise['name'];
        this.equipment = exercise['equipment'];
        this.primaryMuscleGroup = exercise['primaryMuscleGroup'];
        this.secondaryMuscleGroup = exercise['secondaryMuscleGroup'];
        this.image = exercise['image'];
        this.comment = exercise['comment'];
        this.createdAt = exercise['createdAt'];
        this.updatedAt = exercise['updatedAt'];
    }
}
