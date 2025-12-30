![Project Screenshot](https://www.dropbox.com/scl/fi/23k9lvd50mq063ddnn9rd/Screenshot-2025-12-30-at-7.04.11-PM.png?rlkey=9l4cpit9580kb96cku0ww5aws&dl=1)

# Needle Engine Test Project

This is a sample project using the Needle Engine, built with Vite. It includes custom components for rotating and coloring 3D objects.

## Features

- **Rotating Cube**: A gray cube that continuously rotates around the Y-axis (using the `Rotate` component).
- **Contact Shadows**: Automatic shadows for enhanced visual effects.
- **SceneSwitcher**: Ability to load and switch between different scenes from cloud URLs.
- **Post-Processing Effects**: Includes Sharpening, Tone Mapping (AgX), Antialiasing, and Bloom.
- **Custom Components**:
  - `Rotate`: Rotates the object at a configurable speed.
  - `Colorize`: Changes the object's color to green.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation and Running
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the project:
   ```bash
   npm start
   ```
   This starts the Vite development server and opens the project in the browser.

### Build for Production
```bash
npm run build:production
```

## Project Structure

- `src/main.ts`: Main file for setting up the scene and components.
- `src/scripts/Rotate.ts`: Rotation component.
- `src/scripts/Colorize.ts`: Coloring component.
- `assets/`: Asset files.
- `include/`: Additional Needle Engine files.

## Samples and Documentation
- [Needle Engine Samples](https://engine.needle.tools/samples)
- [Needle Engine Documentation](https://docs.needle.tools)
- [Stackblitz Needle Engine Collection](https://stackblitz.com/@marwie/collections/needle-engine)

If you have questions, reach out in our [forum](https://forum.needle.tools).

## Contributing
For contributions, please submit a Pull Request or discuss in the forum.

## Contact
[Needle Tools](https://needle.tools) • [@NeedleTools](https://twitter.com/NeedleTools) • [Forum](https://forum.needle.tools) • [YouTube](https://www.youtube.com/@needle-tools)