var russia = [
  saintPetersburg,
  rostovOnDon,
  teberda,
  dombai,
  arkhyz
];

var ukraine = [
  holodnoe,
  sedovo,
  novoazovsk,
  shirikino,
  sopino,
  gnutovo,
  sartana,
  mariupol,
  melekine,
  bilosarayskaKosa,
  yalta,
  jurjiwka,
  urzuf,
  babakhTarama,
  berdiansk,
  kasianivka,
  donieck,
  artemovsk,
  soledar,
  kryvyiRih,
  ark,
  lviv
];

var poland = [
  warsaw
];

var netherlands = [
  eindhoven,
  amsterdam
];

var datas = [
  ['saintPetersburgData', 'saintPetersburg'],
  ['rostovOnDonData', 'rostovOnDon'],
  ['teberdaData', 'teberda'],
  ['dombaiData', 'dombai'],
  ['arkhyzData', 'arkhyz'],
  ['holodnoeData', 'holodnoe'],
  ['sedovoData', 'sedovo'],
  ['novoazovskData', 'novoazovsk'],
  ['shirikinoData', 'shirikino'],
  ['sopinoData', 'sopino'],
  ['gnutovoData', 'gnutovo'],
  ['sartanaData', 'sartana'],
  ['mariupolData', 'mariupol'],
  ['melekineData', 'melekine'],
  ['bilosarayskaKosaData', 'bilosarayskaKosa'],
  ['yaltaData', 'yalta'],
  ['jurjiwkaData', 'jurjiwka'],
  ['urzufData', 'urzuf'],
  ['babakhTaramaData', 'babakhTarama'],
  ['berdianskData', 'berdiansk'],
  ['kasianivkaData', 'kasianivka'],
  ['donieckData', 'donieck'],
  ['artemovskData', 'artemovsk'],
  ['soledarData', 'soledar'],
  ['kryvyiRihData', 'kryvyiRih'],
  ['arkData', 'ark'],
  ['lvivData', 'lviv'],
  ['warsawData', 'warsaw'],
  ['eindhovenData', 'eindhoven'],
  ['amsterdamData', 'amsterdam']
];

var mapPoints = [
  russia,
  ukraine,
  poland,
  netherlands
];

createObjectData(datas);

function createObjectData(datas) {
  for (var i = 0; i < datas.length; i++) {
    for (var j = 0; j < eval(datas[i][0]).length; j++) {
      eval(datas[i][1]).push(infoWindow(
        eval(datas[i][0])[j]['latitude'],
        eval(datas[i][0])[j]['longitude'],
        eval(datas[i][0])[j]['title'],
        eval(datas[i][0])[j]['titleCyrillic'],
        eval(datas[i][0])[j]['date'],
        eval(datas[i][0])[j]['description'],
        eval(datas[i][0])[j]['descriptionCyrillic'],
        eval(datas[i][0])[j]['link']
    ));
    }
  };
}

function infoWindow(latitude, longitude, title, titleCyrillic, date, description, descriptionCyrillic, link) {
  var object = {
    'latitude': Number(latitude),
    'longitude': Number(longitude),
    'title': title,
    'contentString': '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">' + title + ' / ' + titleCyrillic + '</h1>'+
    '<div id="bodyContent">'+
    '<a href="' + link + '" target="_blank">' + link + '</a>' +
    '<p>' + description + '</p>' +
    '<p>' + descriptionCyrillic + '</p>' +
    '<p>visited ' + date + '</p>'+
    '</div>'+
    '</div>'
  }

  return object;
}

/*
  new google.maps.LatLng(48.4409021,22.7127159),  /* Mukacheve 
  new google.maps.LatLng(48.456116,24.5762444),   /* Yaremche 

  new google.maps.LatLng(48.378791,24.410136),    /* Bukovel 

  new google.maps.LatLng(46.7176376,36.7854484),  /* Berdyans'k 
  new google.maps.LatLng(46.176903,34.7988354),   /* Heniches'k 

  new google.maps.LatLng(44.6655417,34.4007384),
  new google.maps.LatLng(44.701703,34.3545159),
  new google.maps.LatLng(44.7363802,34.2822222),
  new google.maps.LatLng(44.8554075,34.8787315),
  new google.maps.LatLng(44.8217762,34.8701609),
  new google.maps.LatLng(44.8173075,34.8981598),
  new google.maps.LatLng(44.8173075,34.8981598),
  new google.maps.LatLng(44.8299344,34.9130898),
  new google.maps.LatLng(44.857683,34.9749509),
  new google.maps.LatLng(45.050641,35.378017),
  new google.maps.LatLng(46.459972,30.7117875),
  new google.maps.LatLng(46.6222523,31.0990763),
  new google.maps.LatLng(48.7630055,30.2157589),
  new google.maps.LatLng(49.4310655,32.0487045),
  new google.maps.LatLng(49.2096835,31.2088564),
  new google.maps.LatLng(49.0754487,32.6507663),
  new google.maps.LatLng(48.4622985,35.0003565),
  new google.maps.LatLng(47.674099, 35.117914),
  new google.maps.LatLng(48.021107,37.810221),
  new google.maps.LatLng(48.6969205,38.0713526),
  new google.maps.LatLng(49.04089,37.5698134),
  new google.maps.LatLng(49.9916541,36.2804766),
  new google.maps.LatLng(49.6020445,34.5572385),
  new google.maps.LatLng(50.4020355,30.5326905),
  new google.maps.LatLng(49.8326891,24.0122356),
  new google.maps.LatLng(47.962975,24.187543),
  new google.maps.LatLng(49.8008965,23.9422635),
  new google.maps.LatLng(47.9073615,33.3665165),
  new google.maps.LatLng(44.430474,34.128384),
  new google.maps.LatLng(44.79698,34.278696),
];

*/

function initialize() {
        var myLatlng = new google.maps.LatLng(48.8592863,32.1908067);

        var mapOptions = {
            zoom: 4,
            center: myLatlng
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        for (var i = 0; i < mapPoints.length; i++) { /* countries */
            for (var j = 0; j < mapPoints[i].length; j++) { /* cities */
                for (var z = 0; z < mapPoints[i][j].length; z++) { /* places */
                  mycontent(map, mapPoints[i][j][z]);
                };
            };
        };
}

function mycontent(map, mapPoints) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(mapPoints.latitude, mapPoints.longitude),
    map: map,
    title: mapPoints.title
  });

  marker.infoWindowData = mapPoints;

  google.maps.event.addListener(marker, 'click', function() {
    var infowindow = new google.maps.InfoWindow({
      content: marker.infoWindowData.contentString
    });

    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);