/* for types */
type complexKinds = "point" | "face" | "line" | "compound";
type coord = [
    number, number, number,
];

/* for interfaces */

/* 'id' of complex is automatically set when added */
interface complex {
    k: "complex"
    id: number
    complexKind: complexKinds
};

class Point implements complex {
    /* implemented */
    readonly complexKind = "point"
    readonly k = "complex"
    id = -1;

    /* unique */
    radius = 1;
    color = "#000000"
    readonly coord = [0, 0, 0]


    constructor(radius:number=1, color:string="#000000", coord:coord=[0,0,0]) {
        this.radius = radius;
        this.color = color;
        this.coord = coord;
    }
}

class Face implements complex {
    /* implemented */
    readonly complexKind = "face"
    readonly k = "complex"
    id = -1;

    /* unique */
    readonly vertices: coord[] = [];


    constructor(...verticesLists: coord[]) {
        this.vertices.concat(verticesLists);
    }
}

class Line implements complex {
    /* implemented */
    readonly complexKind = "line"
    readonly k = "complex"
    id = -1;

    /* unique */
    readonly vertices: coord[] = [];

    constructor(...verticesLists: coord[]) {
        this.vertices.concat(verticesLists);
    }
}

class Compound implements complex {
    /* implemented */
    readonly complexKind = "compound"
    readonly k = "complex"
    id = -1;

    /* unique */
    readonly complexes: (Point|Line|Face)[] = []

    constructor(...complexLists: (Point|Line|Face)[]) {
        this.complexes.concat(...complexLists);
    }
}


export {complexKinds, complex, coord, Point, Face, Line, Compound};