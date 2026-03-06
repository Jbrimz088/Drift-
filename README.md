# DRIFT! — Neon Synthwave Racing

Low-poly 3D multiplayer drifting game built with **HTML**, **CSS**, **JavaScript**, and **Three.js**. Neon-synthwave city, arcade drift physics, and real-time tandem drifting via **Socket.io**.

## Run the game

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server (serves the game and WebSocket):
   ```bash
   npm start
   ```
3. Open **http://localhost:3000** in your browser.
4. Choose your car (Porsche 911 GT3 RS or Lamborghini Aventador), set the neon underglow color, then click **START RACE**.

## Controls

- **W / ↑** — Accelerate  
- **S / ↓** — Brake / Reverse  
- **A / ←** — Steer left  
- **D / →** — Steer right  
- **Space** — Handbrake (drift)

## Multiplayer

Open the same URL in another tab or device to drift together. Positions and cars sync in real time over WebSockets.

## Tech

- **Three.js** — 3D scene, low-poly meshes, wet asphalt (MeshPhysicalMaterial + clearcoat), emissive neon
- **Socket.io** — Real-time multiplayer state sync
- **HTML/CSS** — Car picker overlay, HUD, neon UI
