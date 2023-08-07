/* for types */
type shapekinds = "point" | "face" | "line";
type point = [
    number, number, number,
];

/* for interfaces */
interface shape {
    type: shapekinds
    vertices: point[]
};
interface complex {
    type: "complex",
    shapes: shape[]
};

export {shape, shapekinds, complex, point};