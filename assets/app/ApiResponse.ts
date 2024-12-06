interface HydraView {
    id: string
    type: string
    first: string
    last: string
    previous: string
    next: string
}

interface HydraSearch {
    type: string
    template: string
    variableRepresentation: string
    mapping: Array<object>
}

/**
 * Represents a collection of resources with metadata information.
 *
 * This class is designed to handle a collection of resources, providing
 * methods to access context, identification, type, and other metadata
 * such as view and search capabilities. It utilizes the Hydra
 * vocabulary to structure collection data and associated operations.
 *
 * Properties:
 * - context: The context associated with the collection, indicating
 *   contextual information as defined by the Hydra specification.
 * - id: The unique identifier for this collection.
 * - type: The type of the collection as specified in the data source.
 * - totalItems: The total number of items within the collection.
 * - members: The actual resources that are part of the collection.
 * - view: Information about the pagination view of the collection, if
 *   available.
 * - search: Search capabilities defined for the collection, if any.
 *
 * The constructor initializes the collection with the provided data,
 * interpreting specific keys according to the Hydra specification.
 *
 * @param {object} data - The raw data object to initialize the collection,
 * containing all necessary keys as expected from a Hydra collection.
 */
export class Collection {
    context: string
    id: string
    type: string
    totalItems: number
    members: Array<Resource>
    view: HydraView | null
    search: HydraSearch | null

    constructor(data: any) {
        this.context = data['@context']
        this.id = data['@id']
        this.type = data['@type']
        this.totalItems = data['hydra:totalItems']
        this.members = data['hydra:member']

        this.view = data['hydra:view'] ? {
            id: data['hydra:view']['@id'],
            type: data['hydra:view']['@type'],
            first: data['hydra:view']['hydra:first'],
            last: data['hydra:view']['hydra:last'],
            previous: data['hydra:view']['hydra:previous'],
            next: data['hydra:view']['hydra:next'],
        } : null

        this.search = data['hydra:search'] ? {
            type: data['hydra:search']['@type'],
            template: data['hydra:search']['hydra:template'],
            variableRepresentation: data['hydra:search']['hydra:variableRepresentation'],
            mapping: data['hydra:search']['hydra:mapping'],
        } : null
    }
}

/**
 * Represents a resource with a specified context, ID, type, and attributes.
 */
export class Resource {
    context: string | object
    id: string
    type: string
    attributes: object

    constructor(data: any) {
        this.context = data['@context']
        this.id = data['@id']
        this.type = data['@type']
        this.attributes = this.extractAttributes(data)
    }

    // Extrait les attributs de data qui ne sont pas préfixés par '@'
    private extractAttributes(data: any): object {
        const filteredEntries = Object.entries(data).filter(
            ([key]) => !key.startsWith('@')
        )
        return Object.fromEntries(filteredEntries) ?? null
    }
}
