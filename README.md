# QGISmap3

This simple Leaflet map allows dragging and scaling GeoJSON shapes. To persist your changes to `spaces.geojson`, run the included Node.js server and use the interface normally.

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
