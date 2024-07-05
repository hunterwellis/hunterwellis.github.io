const app = new App({ setup, animate, preload });

window.onload = app.init;
window.onresize = app.handleResize;

const loader = new THREE.TextureLoader();
const controls = {}
const data = {}


async function preload() {
  try {
    // const gridUrl = '../assets/data/grid.json';
    // const gridRes = await fetch(gridUrl);
    // const grid = await gridRes.json();
    // data.grid = grid;

    // const countryUrl = '../assets/data/countries.json';
    // const countryRes = await fetch(countryUrl);
    // const countries = await countryRes.json();
    // data.countries = countries;

    // const connectionsUrl = '../assets/data/connections.json';
    // const connectionsRes = await fetch(connectionsUrl);
    // const connections = await connectionsRes.json();
    // data.connections = getCountries(connections, countries);    

    return true;
  } catch(error) {
    console.log(error);
  }
}


function setup(app) {

  app.camera.position.z = config.sizes.globe * 2.85;
  app.camera.position.y = config.sizes.globe * 0;

  groups.main = new THREE.Group();
  groups.main.name = 'Main';

  const globe = new Globe();
  groups.globe.rotation.x = 0.5;
  groups.globe.position.x = 310;
  groups.globe.position.z = -150;
  
  groups.main.add(globe);

  const points = new Points(data.grid);
  groups.globe.add(groups.points);

  const markers = new Markers(data.countries);
  groups.globe.add(groups.markers);

  app.scene.add(groups.main);
}


function animate(app) {
  
  if(elements.lineDots) {
    for(let i = 0; i < elements.lineDots.length; i++) {
      const dot = elements.lineDots[i];
      dot.animate();
    }
  }

  if(elements.markers) {
    for(let i = 0; i < elements.markers.length; i++) {
      const marker = elements.markers[i];
      marker.point.material.color.set(config.colors.globeMarkerColor);
      marker.glow.material.color.set(config.colors.globeMarkerGlow);
      marker.label.material.map.needsUpdate = true;
      marker.animateGlow();
    }
  }

  if(animations.rotateGlobe) {
    groups.globe.rotation.y += 0.0025;
  }
}

