# Needle Engine Interactive 3D Demo

A modern, interactive 3D web application built with **Needle Engine**, **Three.js**, and **TypeScript**. This project demonstrates how to create immersive 3D experiences that run directly in the browser.

![Needle Engine](https://img.shields.io/badge/Needle%20Engine-4.10.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.169-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.3-purple)

## Overview

This project showcases a 3D scene with interactive objects, custom behavior components, dynamic texturing, and visual effects. Users can click on objects to select them and apply different textures using an intuitive UI or keyboard shortcuts.

## Features

- **Interactive 3D Objects** - Click to select objects with visual feedback (scaling and transparency effects)
- **Dynamic Texture System** - Apply procedurally-generated gradient textures to objects
- **Rotation Animation** - Automatic rotation behavior for 3D objects
- **Color Customization** - Runtime color changing capabilities
- **Visual Effects** - Post-processing including bloom, tone mapping, and antialiasing
- **Contact Shadows** - Realistic shadow rendering for depth perception
- **Keyboard Controls** - Press keys 1-4 to quickly switch textures
- **Responsive UI** - Circular button menu for texture selection

## Project Structure

```
my-first-needle/
├── src/
│   ├── main.ts                  # Application entry point
│   ├── scripts/                 # Custom components
│   │   ├── Rotate.ts           # Rotation behavior
│   │   ├── Colorize.ts         # Color changing component
│   │   ├── Selector.ts         # Object selection system
│   │   └── TextureChanger.ts   # Texture management
│   ├── styles/
│   │   └── style.css           # Application styles
│   └── generated/              # Auto-generated Needle files
├── assets/
│   └── basic.glb               # 3D model assets
├── index.html                   # HTML entry point
├── needle.config.json          # Needle Engine config
├── vite.config.js              # Vite configuration
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## Custom Components

### Rotate
Automatically rotates objects around the Y-axis with configurable speed.

```typescript
const cube = ObjectUtils.createPrimitive(PrimitiveType.Cube);
cube.addComponent(Rotate, { speed: 50 });
```

### Colorize
Changes the material color of an object at runtime.

```typescript
cube.addComponent(Colorize, { targetColor: new Color("green") });
```

### Selector
Enables click-to-select functionality with visual feedback:
- Selected objects scale up slightly
- Opacity changes to indicate selection state
- Displays object name in a balloon message

### TextureChanger
Applies procedurally-generated gradient textures to selected objects:
- Creates textures using Canvas API with HSL color gradients
- Supports 4 different texture presets
- Can be triggered via UI buttons or keyboard (keys 1-4)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-first-needle
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Production Build

To create an optimized production build:

```bash
npm run build:production
```

The compiled files will be output to the `dist/` directory.

## Usage

### Mouse Controls
- **Click** on any 3D object to select it
- **Click** the circular buttons (1-4) at the bottom to apply textures

### Keyboard Controls
- **1** - Apply texture preset 1
- **2** - Apply texture preset 2
- **3** - Apply texture preset 3
- **4** - Apply texture preset 4

## Scene Objects

The scene contains three interactive 3D primitives:

| Object | Color | Components |
|--------|-------|------------|
| Cube | Gray → Green | Rotate, Colorize, Selector, TextureChanger |
| Sphere | Red | Selector, TextureChanger |
| Box | Blue | Selector, TextureChanger |

## Technologies Used

| Technology | Purpose |
|------------|---------|
| [Needle Engine](https://needle.tools) | 3D web framework |
| [Three.js](https://threejs.org) | 3D graphics library |
| [TypeScript](https://typescriptlang.org) | Type-safe JavaScript |
| [Vite](https://vitejs.dev) | Build tool & dev server |

## Configuration

### Needle Engine Config (`needle.config.json`)
- `buildDirectory`: Output folder for production builds
- `assetsDirectory`: Location of 3D assets
- `scriptsDirectory`: Custom component scripts
- `codegenDirectory`: Auto-generated code location

### Vite Config (`vite.config.js`)
- Dev server runs on port 3000
- Gzip compression enabled for production
- Relative paths for flexible deployment

## Visual Effects

The project includes several post-processing effects:
- **Sharpening** - Enhanced edge definition
- **Tone Mapping** - AgX color grading
- **Antialiasing** - Smooth edge rendering
- **Bloom** - Glowing highlight effects
- **Environment Mapping** - Ground-projected HDRI

## Samples and Documentation

- [Needle Engine Samples](https://engine.needle.tools/samples)
- [Needle Engine Documentation](https://docs.needle.tools)
- [Stackblitz Needle Engine Collection](https://stackblitz.com/@marwie/collections/needle-engine)

If you have questions, reach out in the [Needle Forum](https://forum.needle.tools).

## Contributing

For contributions, please submit a Pull Request or discuss in the forum.

## Contact

[Needle Tools](https://needle.tools) | [@NeedleTools](https://twitter.com/NeedleTools) | [Forum](https://forum.needle.tools) | [YouTube](https://www.youtube.com/@needle-tools)

---

Built with Needle Engine
