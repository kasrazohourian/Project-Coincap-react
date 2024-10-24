// data/server.js

let baseUrl = "https://api.coincap.io/v2";
let assetsUrl = baseUrl + "/assets";

// Funktion zum Abrufen der Coins mit Paginierung
export async function getAssetsList(page, limit) {
  const offset = (page - 1) * limit;
  const response = await fetch(`${assetsUrl}?limit=${limit}&offset=${offset}`);
  const body = await response.json();
  return body.data;
}
