var saintPetersburgData = [
  {
    "latitude": "59.928143",
    "longitude": "30.362656",
    "title": "XXX",
    "titleCyrillic": "Московский Ж/Д вокзал",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.881157",
    "longitude": "29.906449",
    "title": "",
    "titleCyrillic": "Парк возле большого дворца",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.885176",
    "longitude": "29.908926",
    "title": "Fontan Samson",
    "titleCyrillic": "Фонтан Самсон",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.955418",
    "longitude": "30.337822",
    "title": "Cruiser Aurora",
    "titleCyrillic": "Крейсер Аврора",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.940084",
    "longitude": "30.328824",
    "title": "Savior on the Spilled Blood",
    "titleCyrillic": "Спас на крови",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.938940",
    "longitude": "30.314957",
    "title": "Palace Square",
    "titleCyrillic": "Дворцовая площадь",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.716142",
    "longitude": "30.395507",
    "title": "Catherine Palace",
    "titleCyrillic": "Екатерининский дворец",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.950041",
    "longitude": "30.316644",
    "title": "Peter and Paul Fortress",
    "titleCyrillic": "Петропавловская крепость",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.954027",
    "longitude": "30.313704",
    "title": "Voyenno-istoricheskiy Muzey artillerii, inzhenernykh voysk i voysk svyazi",
    "titleCyrillic": "Военно-исторический музей артелерии",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.952707",
    "longitude": "30.282179",
    "title": "Petrovsky Stadium, Small sports arena",
    "titleCyrillic": "Петровский стадион",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.937079",
    "longitude": "30.328474",
    "title": "Ostap Bender monument",
    "titleCyrillic": "Памятник Остапу Бендеру",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "59.996209",
    "longitude": "29.778605",
    "title": "Monument Podvodnikam-Baltiytsam",
    "titleCyrillic": "Памятник Подводникам-Балтийцам",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "60.081296",
    "longitude": "31.069050",
    "title": "Doroga zizni",
    "titleCyrillic": "Дорога жизни",
    "date": "June 17-30, 2004",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  }
];

var warsawData = [
  {
    "latitude": "52.167236",
    "longitude": "20.967889",
    "title": "Lotnisko Chopina",
    "titleCyrillic": "Аэропорт Шопен",
    "date": "July 1;5, 2015",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  },
  {
    "latitude": "52.219893",
    "longitude": "20.965950",
    "title": "Warszawa Zachodnia Peron 3",
    "titleCyrillic": "Западная Станция",
    "date": "July 1;5, 2015",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  }
];

var eindhovenData = [
  {
    "latitude": "51.4580373",
    "longitude": "5.3919141",
    "title": "Eindhoven Airport",
    "titleCyrillic": "Аэропорт Эйндховен",
    "date": "July 1;5, 2015",
    "description": "",
    "descriptionCyrillic": "",
    "link": ""
  }
];

var datas = [
  ['saintPetersburgData', 'saintPetersburg'],
  ['warsawData', 'warsaw'],
  ['eindhovenData', 'eindhoven']
];

var saintPetersburg = [];
var russia = [
  saintPetersburg
];

var warsaw = [];
var poland = [
  warsaw
];

var eindhoven = [];
var netherlands = [
  eindhoven
];

var mapPoints = [
  russia,
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
      /*'<a target="_blank" href="' + link + '">' + title + '</a>'*/

  var object = {
    'latitude': Number(latitude),
    'longitude': Number(longitude),
    'title': title,
    'contentString': '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">' + title + ' / ' + titleCyrillic + '</h1>'+
    '<div id="bodyContent">'+
    link +
    '<p>' + description + '</p>' +
    '<p>' + descriptionCyrillic + '</p>' +
    '<p>visited ' + date + '</p>'+
    '</div>'+
    '</div>'
  }

  return object;
}

/* russia */
/*
  new google.maps.LatLng(47.2610085,39.628),      /* Rostov-on-Don 
  new google.maps.LatLng(47.0908465,39.4210618),  /* Azov 
  new google.maps.LatLng(0,0),  /* Alania 
  new google.maps.LatLng(43.443700, 41.744376),   /* Teberda 
  new google.maps.LatLng(43.292954, 41.616660),   /* Dombai 
  new google.maps.LatLng(43.562810,41.280212)  /* Arhuz 

amsterdam.push(infoWindow('52.3791167', '4.900104', 'Amsterdam Centraal', 'Центральный вокзал', 'July 1;5, 2015', 'Is het centraal station van de Nederlandse hoofdstad Amsterdam. Het is gebouwd tussen 1881 en 1889 naar ontwerp van P.J.H. Cuypers, A.L. van Gendt (stationsgebouw) en L.J. Eijmer (stationskap). Het station telt zes perrons die via drie dwarsgangen onder de vijftien sporen (waarvan 11 reizigerssporen) bereikbaar zijn', 'Главный железнодорожный вокзал нидерландской столицы. Построен в 1881—1889 годах архитектором Питером Кейперсом при участии Адольфа Леонарда ван Гендта. В 1885 году Кейперс также спроектировал здание Государственного музея в Амстердаме, которое внешне похоже на Центральный вокзал. Это первый вокзал в Нидерландах, который был спроектирован известным архитектором. Вокзал отделяет город от порта, а в городе было проложено множество железнодорожных путей. Вокзал насчитывает шесть перронов и 15 железнодорожных путей.', 'http://www.gvb.nl/'));
amsterdam.push(infoWindow('52.374375', '4.898173', 'Oudekerksplein', 'Старая церковь', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.375087', '4.896296', 'Beurs van Berlage', 'Биржа Берлаге', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.376541', '4.900831', 'De Basiliek van de H. Nicolaas', 'Церковь Св. Николая', 'July 1;5, 2015', 'The St. Nicholas’ parish in Amsterdam’s vibrant city center is made up of six roman catholic churches: Basiliek van de H. Nicolaas, Petrus & Paulus (De Papegaai), Franciscus Xaverius (Krijtberg), Onze Lieve Vrouwekerk, the Begijnhofkapel and the Mozes and Aäronkerk.', 'Церковь Св. Николая состоит из шести римских католических церквей: Basiliek van de H. Nicolaas, Petrus & Paulus (De Papegaai), Franciscus Xaverius (Krijtberg), Onze Lieve Vrouwekerk, the Begijnhofkapel and the Mozes and Aäronkerk'));
amsterdam.push(infoWindow('52.376409', '4.902317', 'Schreierstoren', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.376592', '4.897255', 'Sex Museum', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.378642', '4.895033', 'Kebab house', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.384349', '4.901264', 'Eye Filmmuseum', 'институт кино EYE', 'July 1;5, 2015', 'This national museum for film, located on Amsterdam’s IJ harbour, manages more than 40.000 films from all genres. The collection represents an outstanding sample of film history, from classics and blockbusters to cult films.', 'Национальный музей кино, находится на IJ гавани Амстердама, управляет более чем 40,000 фильмами всех жанров. Коллекция представляет собой выдающийся образец истории кино, от классики и блокбастеров до культовых фильмов.', 'https://www.eyefilm.nl/en'));
amsterdam.push(infoWindow('52.383812', '4.902041', 'A’DAM Toren', 'Небоскрёб A’DAM', 'July 1;5, 2015', 'Hello, I’m A’DAM – the big tower behind Amsterdam’s Central Station', '', 'http://adamtoren.nl'));
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
amsterdam.push(infoWindow('52.383919', '4.895033', 'Paleis van Justitie', 'новый Дворец юстиции', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.383100', '4.892666', 'Wolf Atelier', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.367611', '4.899052', 'Nationale Opera & Ballet and Spinoza and -pam. Evreejam-', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.366393', '4.906655', 'Hortus Botanicus Amsterdam', '***', 'July 1;5, 2015'));
amsterdam.push(infoWindow('52.368320', '4.903281', 'Sant’Egidio', '***', 'July 1;5, 2015'));
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
amsterdam.push(infoWindow('52.375321', '4.907371', 'Restaurant Sea Palace', '***', 'July 1;5, 2015'));*/


/* ukraine parts 
var ua_ark = [
  new google.maps.LatLng(44.6142155,33.6380221),  /* Sevastopol 
  new google.maps.LatLng(44.499619,33.600164),    /* Balaklava 
  new google.maps.LatLng(0,0),  /* Laspi 
  new google.maps.LatLng(44.946798,34.1092134),   /* Simferopol 
  new google.maps.LatLng(44.61117,33.492118),     /* Hersones 
  new google.maps.LatLng(44.755538,33.8670791),   /* Bakhchysarai 
  new google.maps.LatLng(44.391775,33.7872484),   /* Foros 
  new google.maps.LatLng(44.4174669,34.043093),   /* Alupka 
  new google.maps.LatLng(44.4713865,34.1443075),  /* Livadiya 
  new google.maps.LatLng(44.514641,34.18591),     /* Yalta 
  new google.maps.LatLng(44.501716,34.1601309),   /* Masandra 
];

var ua_west = [
  new google.maps.LatLng(48.4409021,22.7127159),  /* Mukacheve 
  new google.maps.LatLng(48.456116,24.5762444),   /* Yaremche 

  new google.maps.LatLng(48.378791,24.410136),    /* Bukovel 
];

var ua_west_lviv_visited = [
  new google.maps.LatLng(49.824252,23.9920326),  /* Kul'parkivs'kyi park 
  new google.maps.LatLng(49.8230022,23.9943049), /* Museum Trusha 
  new google.maps.LatLng(49.8238193,23.997443),  /* park Piskovi Ozera 
  new google.maps.LatLng(49.8258951,24.0033074), /* BotSad LNU 
  new google.maps.LatLng(49.8353277,24.0144292), /* Politehnika 
  new google.maps.LatLng(49.8297098,24.0042998), /* Palac sporta 
  new google.maps.LatLng(49.8384128,24.0196595), /* Park Franko 
  new google.maps.LatLng(49.8317146,24.0212702), /* Lviv Cytadel 
  new google.maps.LatLng(49.8401739,24.0083423), /* Odesska street 
  new google.maps.LatLng(49.842426,24.0097781),  /* Pl. Knyazya Svjatoslava \Parkovka\ 
  new google.maps.LatLng(49.8380642,24.0045399), /* Senagoga Edel'veis 
  new google.maps.LatLng(49.8371549,24.0139563), /* Skver near Sv. Yura 
  new google.maps.LatLng(49.8435689,24.0281375), /* Pl. Vicheva 
  new google.maps.LatLng(49.84184,24.0312977),   /* Ratusha 
  new google.maps.LatLng(49.8443892,24.0459111), /* park 
  new google.maps.LatLng(49.8324605,24.0561303), /* Lychakiv cvintar 

                                                 /* Lviv: ot svyatogorskoy gory do vysokozamkovoy 
  new google.maps.LatLng(49.8386637,24.012947),  /* [01.1] Sv. Yra 
  new google.maps.LatLng(49.83692,24.0048627),   /* [02.1] Costel Sv. Ol'gi and Elisavety 
  new google.maps.LatLng(49.8400355,24.0137054), /* [03.1] Circus
  new google.maps.LatLng(49.8371847,24.0166576), /* [04.1] Hotel Dnister
  new google.maps.LatLng(49.8351583,24.0174557), /* [05.1] Costel Marii Magdaliny. Organnyi zal 
  new google.maps.LatLng(49.834913,24.0187292),  /* [06.1] Zertvam comunist. zlochiniv 
  new google.maps.LatLng(49.8338164,24.0201585), /* [07.1] Shpital' Sv. Lazara 
  new google.maps.LatLng(49.8351331,24.0208015), /* [08.1] Palac knyaziv Sapeg 
  new google.maps.LatLng(49.8323934,24.0240782), /* [09.1] Lviv Cytadel 
  new google.maps.LatLng(49.8339112,24.0267264), /* [09.1] Lviv Cytadel 
  new google.maps.LatLng(49.8354557,24.023531),  /* [09.1] Lviv Cytadel 
  new google.maps.LatLng(49.8356969,24.0217221), /* [10.1] Pam. Markiyan Shashkevich 
  new google.maps.LatLng(49.8396942,24.0212077), /* [12.1] Pam'ytnyk Franko 
  new google.maps.LatLng(49.8402222,24.0223818), /* [13.1] Univer Franko 
  new google.maps.LatLng(49.8411658,24.0215827), /* [14.1] Sientists house 
  new google.maps.LatLng(49.8415961,24.0225523), /* [15.1] Pam. police 
  new google.maps.LatLng(49.8425687,24.0171946), /* [16.1] Hram Sv. Anny 
  new google.maps.LatLng(49.8432625,24.0219158), /* [17.1] Jail. In past monastyr Sv. Brygidy 
  new google.maps.LatLng(49.8360459,24.0259962), /* [18.1] Pam. bag 
  new google.maps.LatLng(49.8378647,24.0268227), /* [19.1] Potocki Palace 
  new google.maps.LatLng(49.8343434,24.0314791), /* [21.1] Costel Mykolaja ordena trynitaiiv 
  new google.maps.LatLng(49.8356886,24.0323219), /* [22.2] Pam. Grusheckomu 
  new google.maps.LatLng(49.8386354,24.030542),  /* [23.1] Got. George 
  new google.maps.LatLng(49.8394351,24.0300473), /* [24.1] Pl. Mickevicha 
  new google.maps.LatLng(49.8397603,24.029311),  /* [26.1] Fontan Bogomater 
  new google.maps.LatLng(49.841063,24.0283139),  /* [27.1] pam. T.G.Shevchenko 
  new google.maps.LatLng(49.8414994,24.0290273), /* [28.1] Costel Iezuitiv 
  new google.maps.LatLng(49.8439534,24.0262666), /* [29.1] Nac. Ac. theatre opery i baleta Solomii Krushel'nickoi 
  new google.maps.LatLng(49.8441843,24.0275387), /* [30.1] Nac. Ac. ua dramm theatre Marii Zan'kovec'koi 
  new google.maps.LatLng(49.8481982,24.0391314), /* [01.2] Vysokiy Zamok 
  new google.maps.LatLng(49.8485025,24.0373377), /* [02.2] Park Vysokiy Zamok 
  new google.maps.LatLng(49.842833,24.0356259),  /* [10.2] Porohova veza 
  new google.maps.LatLng(49.8427336,24.0400915), /* [13.2] Pam. Tov. Prosvita 
  new google.maps.LatLng(49.8424517,24.0414064), /* [14.2] Costel Franciskanciv 
  new google.maps.LatLng(49.8418144,24.0407007), /* [15.2] Hram Sv. Georgija 
  new google.maps.LatLng(49.8423234,24.0455954), /* [16.2] Costel Franciskanok 
  new google.maps.LatLng(49.841087,24.0465681),  /* [17.2] Costel Sv. Antonia 
  new google.maps.LatLng(49.8448254,24.0303137), /* [18.2] Costel Marii Sneznoi 
  new google.maps.LatLng(49.843003,24.0316675),  /* [20.2] Gasova Lampa 
  new google.maps.LatLng(49.8427297,24.0340359), /* [21.2] Dominicanskii sobor 
  new google.maps.LatLng(49.8395998,24.036963),  /* [31.2] Museum Iogana Pinzelja 
  new google.maps.LatLng(49.8436155,24.0293321), /* [32.2] Cerkva Preobrazenija Gospodn'ogo 
  new google.maps.LatLng(49.8433496,24.0301937), /* [33.2] Armjansky sobor 
  new google.maps.LatLng(49.8432332,24.0306651), /* [33.2] Armjansky ansambl' 
  new google.maps.LatLng(49.841494,24.0318174),  /* [35.2] Pl. Runok 
  new google.maps.LatLng(49.8411407,24.0332698), /* [37.2] Maisternya Shokolada 
  new google.maps.LatLng(49.8393918,24.03444),   /* [38.2] Costel Bernardincev 
  new google.maps.LatLng(49.8422065,24.0281389), /* [43.2] Pam. Lviv. Bromarjam 
  new google.maps.LatLng(49.8422584,24.0283266), /* [44.2] Veza Kramariv 
  new google.maps.LatLng(49.8412768,24.0293354), /* [47.2] Pam. Ivanu Podkovi 
  new google.maps.LatLng(49.8407257,24.0305728), /* [49.2] Katedral'nii Sobor Usbeniya Prechistoi Materi Bozoi 
  new google.maps.LatLng(49.8394383,24.032552),  /* [53.2] Pam. Damilu Galickomu 
  new google.maps.LatLng(49.8380337,24.0318827), /* [55.2] Pam. V. Ivasyku 
];

var ua_west_lviv_not_visited = [
  new google.maps.LatLng(49.839512,24.0362414),  /* Park Olega Veschego 
  new google.maps.LatLng(49.8415245,24.035994),  /* Park 'na Valah' 

  /* Lviv: ot svyatogorskoy gory do vysokozamkovoy 
  new google.maps.LatLng(49.8538545,24.0344888), /* [03.2] Sv. Martina 
  new google.maps.LatLng(49.8517959,24.0307593), /* [04.2] Praskevy Pitncy 
  new google.maps.LatLng(49.849106,24.0284499),  /* [05.2] Cerkva Sv. Onufria 
  new google.maps.LatLng(49.8474014,24.0289714), /* [06.2] Cerkva Sv. Nikolaja 
  new google.maps.LatLng(49.8468501,24.0305452), /* [07.2] Cerkva Ioanna Hrestitelja 
  new google.maps.LatLng(49.845405,24.031769),   /* [08.2] Benedictinok 
  new google.maps.LatLng(49.8442068,24.0364076), /* [09.2] Stritenja 
  new google.maps.LatLng(49.8424517,24.0370836), /* [11.2] Costel Karmelitiv bosyh 
  new google.maps.LatLng(49.8418163,24.0406777), /* [12.2] Cerkva Voiceh 
  new google.maps.LatLng(49.8433178,24.03222),   /* [19.2] Pory roky house 
  new google.maps.LatLng(49.842357,24.0336483),  /* [22.2] Pam. Nikiforu Drovnjaku 
  new google.maps.LatLng(49.8427433,24.0346241), /* [23.2] Korolivs'kii arsenal 
  new google.maps.LatLng(49.8425885,24.0347623), /* [24.2] Pam. Ivanu Drukaru 
  new google.maps.LatLng(49.842393,24.0349165),  /* [25.2] Fragmentu avtentuchnuh muriv
  new google.maps.LatLng(49.8420093,24.0342928), /* [26.2] Ansambel sporud Uspenskogo bratstva 
  new google.maps.LatLng(49.8413658,24.0352081), /* [27.2] City arsenal 
  new google.maps.LatLng(49.8415153,24.036849),  /* [28.2] Galitske namisnuctva house 
  new google.maps.LatLng(49.8409536,24.036945),  /* [29.2] Palac gubernatoriv 
  new google.maps.LatLng(49.8411488,24.0360054), /* [30.2] Pam. Chernovolu 
  new google.maps.LatLng(49.8427049,24.032317),  /* [34.2] Museum Apteka 'under black eagle' 
  new google.maps.LatLng(49.841306,24.032288),   /* [36.2] Kruivka 
  new google.maps.LatLng(49.8430807,24.0281174), /* [41.2] Nac. museum 
  new google.maps.LatLng(49.8425959,24.028472),  /* [42.2] Palac Dedushinskih 
  new google.maps.LatLng(49.8373139,24.0285226), /* [20.1] Pam. Tudoru 
  new google.maps.LatLng(49.8399354,24.0281248), /* [25.1] Gausner House 
  new google.maps.LatLng(49.8406788,24.0310255), /* [50.1] Kaplica Boimiv 
];

var ua_east = [
  new google.maps.LatLng(47.117243,38.2169534),   /* Kholodne 
  new google.maps.LatLng(47.073497,38.1603745),   /* Sjedove 
  new google.maps.LatLng(47.0987215,37.8103641),  /* Shyrokyne 
  new google.maps.LatLng(47.0916584,37.755171),   /* Sopino 
  new google.maps.LatLng(47.0910715,37.6837705),  /* Vynohradne 
  new google.maps.LatLng(47.205048,37.752672),    /* Hnutove 
  new google.maps.LatLng(47.1773515,37.6887045),  /* Sartana 
  new google.maps.LatLng(47.122595,37.5819626),   /* Mariupol' 
  new google.maps.LatLng(46.9533745,37.3883561),  /* Melekyne 
  new google.maps.LatLng(46.902899,37.337901),    /* Belosarais'ka kosa 
  new google.maps.LatLng(46.9560436,37.2657941),  /* Yalta 
  new google.maps.LatLng(46.936121,37.197147),    /* Yurivka 
  new google.maps.LatLng(46.9158149,37.1179624),  /* Urzuf 
  new google.maps.LatLng(46.7176376,36.7854484),  /* Berdyans'k 
  new google.maps.LatLng(46.176903,34.7988354),   /* Heniches'k 
];

/* unknowns */
var unknowns = [
  new google.maps.LatLng(44.5111841,34.2356621),  /* Nikitsky Botanical Garden 
  new google.maps.LatLng(44.5147121,34.2484298),  /* Ai Danil 
  new google.maps.LatLng(44.547294,34.2914851),   /* Gurzuf 
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