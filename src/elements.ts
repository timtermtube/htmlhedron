/* for types */
type complexKinds = "point" | "face" | "line" | "compound";
type coord = [
    number, number, number,
];

/* for interfaces */
interface complex {
    k: "complex"
    complexKind: complexKinds
};

interface point extends complex {
    complexKind: "point"
    coord: coord
};

interface face extends complex {
    complexKind: "face"
    vertices: coord[]
}

interface line extends complex {
    complexKind: "line"
    vertices: coord[]
}

interface compound extends complex {
    complexKind: "compound"
    complexes: (point|face|line)[]
}

export {complexKinds, coord, complex, point, face, line, compound};