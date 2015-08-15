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
  lviv,
  unnamed
];

var poland = [
  warsaw
];

var netherlands = [
  eindhoven,
  amsterdam
];

var datas = [
  /*['saintPetersburgData', 'saintPetersburg'],
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
  ['lvivData', 'lviv'],*/
  ['unnamedData', 'unnamed'],
  /*['warsawData', 'warsaw'],
  ['eindhovenData', 'eindhoven'],
  ['amsterdamData', 'amsterdam']*/
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

var mapPoints = [
  russia,
  ukraine,
  poland,
  netherlands
];

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