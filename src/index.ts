import {complex} from "./elements";
import {Camera} from "./camera";

namespace HTMLHedron {
    export interface Scene {
        camera: Camera
        complex: complex[]
    };

    const scene: Scene = {
        camera: new Camera(),
        complex: []
    };
};

export {HTMLHedron};