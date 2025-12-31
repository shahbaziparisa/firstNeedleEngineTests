import { Behaviour, PointerEventData, showBalloonMessage } from "@needle-tools/engine";
import * as THREE from "three";

export class Selector extends Behaviour {

    static selectedObject: any = null;
    static previousScale: THREE.Vector3 | null = null;
    static originalColors: Map<any, THREE.Color> = new Map();

    onPointerClick(_args: PointerEventData) {
        // Reset previous selected object's scale and material
        if (Selector.selectedObject && Selector.previousScale) {
            Selector.selectedObject.scale.copy(Selector.previousScale);
            const prevMesh = Selector.selectedObject as unknown as THREE.Mesh;
            if (prevMesh.material instanceof THREE.MeshStandardMaterial) {
                // If it has a texture, keep it as is (opacity 1, no gray)
                if (!prevMesh.material.map) {
                    prevMesh.material.opacity = 1;
                    prevMesh.material.transparent = false;
                    const origColor = Selector.originalColors.get(Selector.selectedObject);
                    if (origColor) {
                        prevMesh.material.color.copy(origColor);
                    }
                } else {
                    prevMesh.material.opacity = 1;
                    prevMesh.material.transparent = false;
                }
            }
        }

        // Set new selected object
        Selector.selectedObject = this.gameObject;
        Selector.previousScale = this.gameObject.scale.clone();

        // Make it slightly larger and semi-transparent gray to indicate selection
        this.gameObject.scale.multiplyScalar(1.2);
        const mesh = this.gameObject as unknown as THREE.Mesh;
        if (mesh.material instanceof THREE.MeshStandardMaterial) {
            // Save original color if not already saved
            if (!Selector.originalColors.has(this.gameObject)) {
                Selector.originalColors.set(this.gameObject, mesh.material.color.clone());
            }
            // Only make gray if no texture is applied
            if (!mesh.material.map) {
                mesh.material.transparent = true;
                mesh.material.opacity = 0.5;
                mesh.material.color.set(0x808080); // Gray
            }
        }

        showBalloonMessage("Selected: " + this.gameObject.name);
    }


    
}