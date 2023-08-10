import {Point, complexKinds, coord} from "./complex";
import {Camera} from "./camera";
import {Scene} from "./scene";

const scene: Scene = new Scene();

export async function createPoint(i: {
    radius: number,
    color: string,
    coord: coord
}): Promise<Point> {
    return new Point(i.radius||1, i.color||"#000000", i.coord||[0,0,0]);
}

export async function exportScene(): Promise<Scene>{
    return scene;
}