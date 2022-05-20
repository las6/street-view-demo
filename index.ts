/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let panorama: google.maps.StreetViewPanorama;

function initialize() {
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view') as HTMLElement,
    {
      position: { lat: 60.2325363, lng: 20.0813216 },
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
    }
  );
}
declare global {
  interface Window {
    initialize: () => void;
  }
}
window.initialize = initialize;
export {};
