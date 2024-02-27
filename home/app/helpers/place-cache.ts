interface Place {
  name: string;
  description: string;
  googleLink: string;
}

interface CityInfo {
  key: string;
  history: string;
  places: Place[];
}

interface CityData {
  [city: string]: CityInfo;
}

const cityData: CityData = {
  // Tu JSON anterior aquí...
};

function getCityInfo(key: string): CityInfo | null {
  const cityInfo = cityData[key];
  if (cityInfo) {
    return cityInfo;
  } else {
    return null;
  }
}

// Ejemplo de uso:
const cityKey = "rome";
const romeInfo = getCityInfo(cityKey);
if (romeInfo) {
  console.log(`Historia de ${cityKey}:`, romeInfo.history);
  console.log(`Lugares de interés en ${cityKey}:`);
  romeInfo.places.forEach(place => {
    console.log(`- ${place.name}: ${place.description}`);
    console.log(`  Google Maps: ${place.googleLink}`);
  });
} else {
  console.log(`No se encontró información para la clave "${cityKey}"`);
}
