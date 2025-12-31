import * as THREE from "three";
import { Behaviour } from "@needle-tools/engine";
import { Selector } from "./Selector.js";

export class TextureChanger extends Behaviour {

    static textures: THREE.Texture[] = [];

    static currentTextureIndex: number = 0;

    start() {
        // Load textures if not loaded
        if (TextureChanger.textures.length === 0) {
            // For simplicity, create procedural textures
            for (let i = 0; i < 4; i++) {
                const canvas = document.createElement('canvas');
                canvas.width = 256;
                canvas.height = 256;
                const ctx = canvas.getContext('2d')!;
                // Simple color
                ctx.fillStyle = `hsl(${i * 90}, 100%, 50%)`;
                ctx.fillRect(0, 0, 256, 256);
                const texture = new THREE.CanvasTexture(canvas);
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                TextureChanger.textures.push(texture);
            }
        }

        // Listen for keyboard events
        document.addEventListener('keydown', (event) => {
            const key = parseInt(event.key);
            if (key >= 1 && key <= 4) {
                TextureChanger.currentTextureIndex = key - 1;
            }
        });
    }

    update() {
        // No need to update every frame, texture is applied on button click
    }
}