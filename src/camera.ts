interface cameraSetting {
    exportSetting: {
        unit: string
        w: number
        h: number
        z: number
    }
};


interface camera {
    // Variable
    dom: HTMLDivElement | null

    // Method
    export(): HTMLDivElement
};

class Camera implements camera, cameraSetting {
    readonly dom = document.createElement("div");
    exportSetting = {
        unit: "px",
        w: 512,
        h: 512,
        z: 1
    }

    constructor() {
        // Define Initial Dom Style
        let style: {[key:string]: any} = {
            "width": `${this.exportSetting.w}${this.exportSetting.unit}`,
            "height": `${this.exportSetting.h}${this.exportSetting.unit}`,
            "transform-style": "preserve-3d",
            "perspective": "512px",
            "transform": `scale(${this.exportSetting.z})`
        }
        // Application Of It
        for (const k in style) {
            const v: any = style[k];
            this.dom.style.setProperty(k, v);
        }
    }

    export() {
        return this.dom;
    }
};

export {camera, Camera, cameraSetting};
