import {complex} from "./complex";
import {Camera} from "./camera";

class Scene {
    // private logic
    private __numberComplexAdded: number = 0;

    // public logic
    readonly camera: Camera = new Camera();
    readonly complex: complex[] = [];


    /*addComplex(c): returns id of complex in the scene.*/
    async addComplex(c: complex): Promise<number> {
        // add into array
        this.__numberComplexAdded++;
        c.id = this.__numberComplexAdded;
        this.complex.push(c);

        // render


        // return id
        return this.__numberComplexAdded;
    }

    /*deleteComplex(id): returns corresponding boolean as it results in.*/
    async deleteComplex(id: number): Promise<boolean> {
        if (this.complex.find((v: complex): boolean => {return v.id == id ? true : false;})) {
            return true;
        } else {
            return false;
        }
    }
}

export {Scene}