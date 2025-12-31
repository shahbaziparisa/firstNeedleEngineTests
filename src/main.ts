import { onStart, RemoteSkybox, WebXR, addComponent, ContactShadows, findObjectOfType, OrbitControls, PostProcessingManager, ToneMappingEffect, BloomEffect, SharpeningEffect, ScreenSpaceAmbientOcclusionN8, ObjectUtils, onUpdate, Gizmos, getTempVector, GroundProjectedEnv, fitObjectIntoVolume, Antialiasing, AnimationUtils, Mathf, useForAutoFit, setAutoFitEnabled } from "@needle-tools/engine";
import * as THREE from "three";
import { Rotate } from "./scripts/Rotate.js";
import { Colorize } from "./scripts/Colorize.js";
import { Selector } from "./scripts/Selector.js";
import { TextureChanger } from "./scripts/TextureChanger.js";

// onStart is an easy way to hook into needle engine (this is called once at the beginning of the update loop)
onStart(context => {
    const scene = context.scene;

    context.mainCamera.position.set(0,1,10);
    // context.menu.showFullscreenOption(true);


    // To add contact shadows we can add the ContactShadows component to the scene (scene.addComponent(ContactShadows))
    // Or we can call `ContactShadows.auto()` which automatically fits the shadows to our scene
    const contactshadows = ContactShadows.auto();
    contactshadows.darkness = .8;
    contactshadows.opacity = .9;

   

    // Create a cube and add the Rotate component
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(1, 0.5, 0);
    cube.name = "Cube";
    scene.add(cube);
    addComponent(cube, new Rotate()); 
    addComponent(cube, new Colorize());
    addComponent(cube, new Selector());

    // Create a sphere
    const sphere = ObjectUtils.createPrimitive("Sphere", {
        position: [-1, 0.5, 0],
        material: new THREE.MeshStandardMaterial({ color: 0xff0000 })
    });
    sphere.name = "Sphere";
    scene.add(sphere);
    addComponent(sphere, new Selector());

    // Create a box (rectangular prism)
    const boxGeometry = new THREE.BoxGeometry(1, 2, 0.5);
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0, 1, -2);
    box.name = "Box";
    scene.add(box);
    addComponent(box, new Selector());

    // Add TextureChanger to scene
    addComponent(scene, new TextureChanger());

    // Create circular texture menu
    const menuDiv = document.createElement('div');
    menuDiv.id = 'texture-menu';

    for (let i = 0; i < 4; i++) {
        const button = document.createElement('button');
        button.textContent = `${i + 1}`;
        button.style.backgroundColor = `hsl(${i * 90}, 100%, 50%)`;
        button.addEventListener('click', () => {
            TextureChanger.currentTextureIndex = i;
            // Apply texture immediately
            if (Selector.selectedObject) {
                const mesh = Selector.selectedObject as any as THREE.Mesh;
                if (mesh.material instanceof THREE.MeshStandardMaterial) {
                    const texture = TextureChanger.textures[i];
                    texture.needsUpdate = true;
                    mesh.material.map = texture;
                    mesh.material.color.set(0xffffff);
                    mesh.material.transparent = false;
                    mesh.material.opacity = 1;
                    mesh.material.needsUpdate = true;
                }
            }
        });
        menuDiv.appendChild(button);
    }

    document.body.appendChild(menuDiv);


   


})


onUpdate((ctx)=> {
    const hits = ctx.physics.raycast({ray: undefined});
    if(hits?.length) {
        const hit = hits[0];
        Gizmos.DrawSphere(hit.point, 0.005, 0x33ff33);
        if(hit.normal) 
        {
            Gizmos.DrawLine(hit.point, getTempVector(hit.normal).multiplyScalar(.1).add(hit.point), 0x33ff33)
        }
    }
})