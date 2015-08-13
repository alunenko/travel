var lvivData = [];
var lviv = [];

/*

visited

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


not visited
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
*/