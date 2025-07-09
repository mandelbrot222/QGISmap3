# QGISmap3

This simple Leaflet map allows dragging and scaling GeoJSON shapes. It loads features from both `spaces.geojson` and `DE Dock and Signs.geojson`.  To persist your changes, run the included Node.js server and use the interface normally. All shapes are stored back into `spaces.geojson` when saving.

## Usage

1. Install dependencies:
   ```bash
   npm install express
   ```
2. Start the server:
   ```bash
   node server.js
   ```
3. Open `http://localhost:3000` in your browser.
4. Drag shapes or adjust the scale slider and click **Save** to persist changes. The map also stores the latest state in `localStorage` for convenience.
