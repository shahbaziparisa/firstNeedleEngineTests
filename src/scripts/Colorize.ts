import * as THREE from "three"
import { Behaviour } from "@needle-tools/engine"

export class Colorize extends Behaviour {

    
  start() {
    const mesh = this.gameObject as unknown as THREE.Mesh
    const mat = mesh.material as THREE.MeshStandardMaterial
    mat.color.set(0x00ff00)
  }
}
