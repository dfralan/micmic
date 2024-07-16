function obtenerContenidoParentesis(str) {
    var regex = /(.*) \((.*)\)/;
    var resultado = regex.exec(str);
    
    if (resultado) {
      var a = resultado[1];
      var b = resultado[2];
      return [a, b];
    } else {
      return null; // El formato del string no coincide con lo esperado
    }
  }

function obtenerIdCiudad(provincia, ciudad) {
    
  // Buscar la provincia en los datos
  var provinciaEncontrada = citiesAR.find(function(prov) {
    return prov.nombre.toLowerCase() === provincia.toLowerCase();
  });

  if (provinciaEncontrada) {
    // Buscar la ciudad dentro de la provincia encontrada
    var ciudadEncontrada = provinciaEncontrada.ciudades.find(function(ciud) {
      return ciud.nombre.toLowerCase() === ciudad.toLowerCase();
    });

    if (ciudadEncontrada) {
      return ciudadEncontrada.id;
    } else {
      return "Ciudad no encontrada";
    }
  } else {
    return "Provincia no encontrada";
  }
}

function getParentProvinceAndCityName(id) {
  var result = {
    provincia: null,
    ciudad: null
  };

  for (var i = 0; i < citiesAR.length; i++) {
    var provincia = citiesAR[i];
    for (var j = 0; j < provincia.ciudades.length; j++) {
      var ciudad = provincia.ciudades[j];
      if (ciudad.id === id) {
        result.provincia = provincia.nombre;
        result.ciudad = ciudad.nombre;
        break;
      }
    }
    if (result.provincia !== null) {
      break;
    }
  }

  return result;
}