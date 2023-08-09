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

/*
    interface 'point' draws a point with given color and radius.
    created point doesn't function as 3d complex,
    it therefore is seen the same in wherever perspective you watch.
*/
interface point extends complex {
    color: string // html color
    radius: number // unit accords to preset done in 'camera'
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