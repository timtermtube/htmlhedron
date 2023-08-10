interface cameraSetting {
    exportSetting: {
        unit: string
        w: number
        h: number
        z: number
    }
};

class Camera implements cameraSetting {
    readonly dom: HTMLDivElement = document.createElement("div");
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

export {Camera, cameraSetting};
