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
  fedorovka,
  melekine,
  bilosarayskaKosa,
  yalta,
  jurjiwka,
  urzuf,
  babakhTarama,
  berdiansk,
  kasianivka,
  donieck,
  debalcevo,
  kremenevka,
  artemovsk,
  svyatohirsk,
  soledar,
  kharkiv,
  poltava,
  zaporizhia,
  dnepropetrovsk,
  kryvyiRih,
  kyiv,
  henichesk,
  ark,
  cherkasy,
  vilshana,
  chygirin,
  uman,
  odessa,
  kruhlyi,
  bukovel,
  yaremche,
  mukacheve,
  lviv,
  svirzh,
  univ,
  stareselo,
  rozhirche
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
  ['fedorovkaData', 'fedorovka'],
  ['melekineData', 'melekine'],
  ['bilosarayskaKosaData', 'bilosarayskaKosa'],
  ['yaltaData', 'yalta'],
  ['jurjiwkaData', 'jurjiwka'],
  ['urzufData', 'urzuf'],
  ['babakhTaramaData', 'babakhTarama'],
  ['berdianskData', 'berdiansk'],
  ['kasianivkaData', 'kasianivka'],
  ['donieckData', 'donieck'],
  ['debalcevoData', 'debalcevo'],
  ['kremenevkaData', 'kremenevka'],
  ['artemovskData', 'artemovsk'],
  ['svyatohirskData', 'svyatohirsk'],
  ['soledarData', 'soledar'],
  ['kharkivData', 'kharkiv'],
  ['poltavaData', 'poltava'],
  ['zaporizhiaData', 'zaporizhia'],
  ['dnepropetrovskData', 'dnepropetrovsk'],
  ['kryvyiRihData', 'kryvyiRih'],
  ['kyivData', 'kyiv'],
  ['henicheskData', 'henichesk'],
  ['arkData', 'ark'],
  ['chygirinData', 'chygirin'],
  ['cherkasyData', 'cherkasy'],
  ['vilshanaData', 'vilshana'],
  ['umanData', 'uman'],
  ['odessaData', 'odessa'],
  ['kruhlyiData', 'kruhlyi'],
  ['bukovelData', 'bukovel'],
  ['yaremcheData', 'yaremche'],
  ['mukacheveData', 'mukacheve'],
  ['lvivData', 'lviv'],
  ['svirzhData', 'svirzh'],
  ['univData', 'univ'],
  ['stareseloData', 'stareselo'],
  ['rozhircheData', 'rozhirche'],
  ['warsawData', 'warsaw'],
  ['eindhovenData', 'eindhoven'],
  ['amsterdamData', 'amsterdam']
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
        eval(datas[i][0])[j]['link'],
        eval(datas[i][0])[j]['visited']
    ));
    }
  };
}

function infoWindow(latitude, longitude, title, titleCyrillic, date, description, descriptionCyrillic, link, visited) {
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
    '</div>',
    'visited': visited
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
  var pinColor = "00FF00",
    icon = null;

  mapPoints.visited && (icon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png");

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(mapPoints.latitude, mapPoints.longitude),
    map: map,
    title: mapPoints.title,
    icon: icon
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