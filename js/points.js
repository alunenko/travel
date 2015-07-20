function infoWindow(latitude, longitude, title, cyrillic, date, description, descriptionCyrillic) {
  var description = typeof description !== 'undefined' ? description : '',
      descriptionCyrillic = typeof descriptionCyrillic !== 'undefined' ? descriptionCyrillic : '';

  var object = {
    'latitude': Number(latitude),
    'longitude': Number(longitude),
    'title': title,
    'contentString1': '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">' + title + ' / ' + cyrillic + '</h1>'+
    '<div id="bodyContent">'+
    '<p>' + description + '</p>' +
    '<p>' + descriptionCyrillic + '</p>' +
    '<p>visited ' + date + '</p>'+
    '</div>'+
    '</div>'
  }
  return object;
};

var stPetersburg = [];
stPetersburg.push(infoWindow('59.928143', '30.362656', 'ХХХ', 'Московский Ж/Д вокзал', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.881157', '29.906449', 'Grand Palace', 'Парк возле большого дворца', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.885176', '29.908926', 'Fontan Samson', 'Фонтан Самсон', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.955418', '30.337822', 'Cruiser Aurora', 'Крейсер Аврора', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.940084', '30.328824', 'Savior on the Spilled Blood', 'Спас на крови', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.938940', '30.314957', 'Palace Square', 'Дворцовая площадь', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.716142', '30.395507', 'Catherine Palace', 'Екатерининский дворец', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.950041', '30.316644', 'Peter and Paul Fortress', 'Петропавловская крепость', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.954027', '30.313704', 'Voyenno-istoricheskiy Muzey artillerii, inzhenernykh voysk i voysk svyazi', 'Военно-исторический музей артелерии', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.952707', '30.282179', 'Petrovsky Stadium, Small sports arena', 'Петровский стадион', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.937079', '30.328474', 'Pamyatnik Ostap Bender', 'Памятник Остап Бендер', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('59.996209', '29.778605', 'Pamyatnik Podvodnikam-Baltiytsam', 'Памятник Подводникам-Балтийцам', 'June 17-30, 2004'));
stPetersburg.push(infoWindow('60.081296', '31.069050', 'Doroga zizni', 'Дорога жизни', 'June 17-30, 2004'));

var russia = [
  stPetersburg
];

/* russia */
/*,
  {
      new google.maps.LatLng(47.2610085,39.628),      /* Rostov-on-Don 
  },
  {
      new google.maps.LatLng(47.0908465,39.4210618),  /* Azov 
  },
  {
      new google.maps.LatLng(0,0),  /* Alania 
  },
  {
      new google.maps.LatLng(43.443700, 41.744376),   /* Teberda 
  },
  {
      new google.maps.LatLng(43.292954, 41.616660),   /* Dombai 
  }*/

var warsaw = [];
warsaw.push(infoWindow('52.167236', '20.967889', 'Lotnisko Chopina', 'Аэропорт Шопен', 'July 1;5, 2015'));
warsaw.push(infoWindow('52.219893', '20.965950', 'Warszawa Zachodnia Peron 3', 'Западная Станция', 'July 1;5, 2015'));

var polland = [
  warsaw
];

var eindhoven = [];
eindhoven.push(infoWindow('51.4580373', '5.3919141', 'Eindhoven Airport', 'Аэропорт Эйндховен', 'July 1;5, 2015'));

var amsterdam = [];
amsterdam.push(infoWindow('52.3791167', '4.900104', 'Amsterdam Centraal', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.374375', '4.898173', 'Oudekerksplein', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.375087', '4.896296', 'Beurs van Berlage', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.376541', '4.900831', 'Basiliek van de H. Nicolaas', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.376409', '4.902317', 'Schreierstoren', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.376592', '4.897255', 'Sex Museum', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.378642', '4.895033', 'Kebab house', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.384349', '4.901264', 'Eye Filmmuseum', 'институт кино EYE', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.383812', '4.902041', 'A’DAM Toren', 'Небоскрёб A’DAM', 'July 1;5, 2015', 'Hello, I’m A’DAM – the big tower behind Amsterdam’s Central Station'));
amsterdam.push(infoWindow('52.374210', '4.912338', 'Science Center NEMO', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.371715', '4.913650', 'Het Scheepvaartmuseum and VOC-schip Amsterdam', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.372808', '4.900290', 'Waag Society', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.372827', '4.893698', 'Nationaal Monument', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.372589', '4.892591', 'Madame Tussauds', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.373186', '4.891367', 'Koninklijk Paleis Amsterdam', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.373680', '4.895796', 'Condomerie', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.374284', '4.894309', 'Starbucks', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.373877', '4.891812', 'De Nieuwe Kerk', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.373516', '4.890225', 'Mango Magna Plaza', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.374534', '4.883967', 'Westerkerk', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.379770', '4.886129', 'Noorderkerk', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.383919', '4.895033', 'Paleis van Justitie', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.383100', '4.892666', 'Wolf Atelier', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.367611', '4.899052', 'Nationale Opera & Ballet and Spinoza and -pam. Evreejam-', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.366393', '4.906655', 'Hortus Botanicus Amsterdam', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.368320', '4.903281', 'Sant\'Egidio', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.368498', '4.905220', 'Nederlandse Filmacademie', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.369114', '4.897203', 'Amsterdams ADR Instituut B.V.', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.366150', '4.900113', 'Café Langereis', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.367072', '4.893076', 'Muntplein', 'Монетная башня', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.364140', '4.882987', 'Leidseplein', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.364657', '4.883457', 'Jamin', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.357846', '4.891770', 'Heineken Experience', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.359989', '4.885218', 'Rijksmuseum', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.358923', '4.884390', 'Cobra Cafe', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.359143', '4.884039', 'IAmsterdam Sign', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.359441', '4.882459', 'Diamant Museum Amsterdam', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.358955', '4.883743', 'Joy Ride Tours', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.358737', '4.874428', 'Vondelpark (Flevoroute)', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.359145', '4.874565', 'Vondelpark (mama baranka)', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.243566', '4.831068', 'Lasha', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.239117', '4.835643', 'Autobedrijf J. Maas Uithoorn B.V', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.234489', '4.835876', 'Chair', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.234970', '4.837222', 'Amstel', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.236142', '4.839613', 'Thamerkerk', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.241405', '4.834391', 'Wood', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.314397', '4.941901', 'Amsterdam Bijlmer ArenA', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.343463', '4.854009', 'Olympisch Stadion Amsterdam', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.339913', '4.855340', 'Nikon Nederland', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.337206', '4.855412', 'NN Group', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.365382', '4.902742', 'Hermitage Amsterdam', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.2925', '4.9449', 'Fletcher Hotel Amsterdam', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.375321', '4.907371', 'Restaurant Sea Palace', '***', 'July 1;5, 2015'));

var holland = [
  eindhoven,
  amsterdam
];

var mapPoints = [
  russia,
  polland,
  holland
];