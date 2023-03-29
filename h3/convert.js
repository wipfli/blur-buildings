import {cellToParent} from "h3-js";
import geojson2h3 from 'geojson2h3';
import fs from 'fs';
import data from './data.json' assert { type: "json" };


const hexagons_13 = geojson2h3.featureToH3Set(data, 13);
const features_13 = geojson2h3.h3SetToFeatureCollection(hexagons_13);

fs.writeFileSync('out-13.json', JSON.stringify(features_13), err => {
    console.log('done');
});




const hexagons_12 = new Set();

for (const hexagon of hexagons_13) {
    hexagons_12.add(cellToParent(hexagon, 12));
}

const features_12 = geojson2h3.h3SetToFeatureCollection(Array.from(hexagons_12));

fs.writeFileSync('out-12.json', JSON.stringify(features_12), err => {
    console.log('done');
});






const hexagons_11 = new Set();

for (const hexagon of hexagons_12) {
    hexagons_11.add(cellToParent(hexagon, 11));
}

const features_11 = geojson2h3.h3SetToFeatureCollection(Array.from(hexagons_11));

fs.writeFileSync('out-11.json', JSON.stringify(features_11), err => {
    console.log('done');
});








const hexagons_10 = new Set();

for (const hexagon of hexagons_11) {
    hexagons_10.add(cellToParent(hexagon, 10));
}

const features_10 = geojson2h3.h3SetToFeatureCollection(Array.from(hexagons_10));

fs.writeFileSync('out-10.json', JSON.stringify(features_10), err => {
    console.log('done');
});








const hexagons_9 = new Set();

for (const hexagon of hexagons_10) {
    hexagons_9.add(cellToParent(hexagon, 9));
}

const features_9 = geojson2h3.h3SetToFeatureCollection(Array.from(hexagons_9));

fs.writeFileSync('out-9.json', JSON.stringify(features_9), err => {
    console.log('done');
});
