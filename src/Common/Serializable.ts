export interface Serializable {
    serialize(): {[key: string]: any};
}