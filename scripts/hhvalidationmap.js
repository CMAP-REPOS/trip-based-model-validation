// basic map
var mapboxAccessToken = 'pk.eyJ1Ijoic2FyYWhjbWFwIiwiYSI6ImNqc3VzMDl0YzJocm80OXBnZjc2MGk4cGgifQ.S_UmPA1jm5pQPrCCLDs41Q';
var lat = 41.8781;
var long = -87.8298;

var map1 = new L.Map("hhvalidationmap", {
    zoomControl: false,
    center: new L.LatLng(lat, long),
    zoom: 8
});

var center = new L.LatLng(lat, long);

function zoomTo(location, map) {
	map.setView(location, 8);
	}

var baselayer1 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v10',
    attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1
})

$('#hhcalmap').on('click', function(){
    setTimeout(
    function()
    {
        map1.invalidateSize()
    },100)
});

map1.addLayer(baselayer1);

function highlightFeatureCounty1(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: 'black',
        dashArray: '',
        fillOpacity: 0,
    }); }

function resetHighlightCounty1(e) {
    var layer = e.target;

    layer.setStyle(
       countystyle1(layer.feature)
    );
    }

function countystyle1(feature) {
    return {
    weight: 2.5,
    fillOpacity: 0,
    color: 'black',
    dashArray: '',
    className: feature.properties.COUNTY
    };
}

var countiesmini = L.geoJSON(countiesdatamini, {
        style: countystyle1,
        interactive: false
            })
var baseLayers1 = {
    "Baselayer": baselayer1
  	};

var overlays1 = {
  "Counties": countiesmini
};


// control that shows state info on hover
	var info1 = L.control();

	info1.onAdd = function () {
		this._div = L.DomUtil.create('div', 'infoval');
		this.update();
		return this._div;
	};
  info1.update = function (props) {
		this._div.innerHTML =  (props ?
            '<table id="datatable"> <tr> <td style="width:105px">PUMA </td> <td>' + props.NAME_NEW + '</td> </tr> <tr> <td> Attribute </td> <td>' + whichone_name + '</td> </tr> <tr> <td>Difference</td> <td>' + Math.round((100 * props[whichone1]) * 100) / 100 + '<br> percentage points' + '</td> </tr> <tr> <td>Model Count</td> <td>' + props[model_count_var] + '</td> </tr> <tr> <td>Observed Count</td> <td>' + props[census_count_var] + '</td> </tr></table>'
            : 'Hover over a PUMA');
    };

	info1.addTo(map1);

// settings for initial page load
var whichone1 = 'difSZ_1'
var whichone_name = '1-person households'
var model_count_var = 'HHSZ_1m'
var census_count_var = 'HHSZ_1p'
var firsttime1 = true
d3.select('#hhmaptitle').text('1-person households')
drawmap1()


// dropdown button events
function updateview1(buttonarg) {
    d3.select('#hhmaptitle').text(buttonarg)
    
    if (buttonarg == '1-person households') {
        whichone1 = 'difSZ_1'
        model_count_var = 'HHSZ_1m'
        census_count_var = 'HHSZ_1p'
        whichone_name = '1-person households';
    }
    else if (buttonarg == '2-person households') {
        whichone1 = 'difSZ_2'
        model_count_var = 'HHSZ_2m'
        census_count_var = 'HHSZ_2p'
        whichone_name = '2-person households';
    }
    else if (buttonarg == '3-person households') {
        whichone1 = 'difSZ_3'
        model_count_var = 'HHSZ_3m'
        census_count_var = 'HHSZ_3p'
        whichone_name = '3-person households';
    }
    else if (buttonarg == '4+ person households') {
        whichone1 = 'difSZ_4'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'HHSZ_4p'
        whichone_name = '4+ person households';
    }
    else if (buttonarg == '4-person households') {
        whichone1 = 'ps4d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'SIZE4'
        whichone_name = '4 person households';
    }
    else if (buttonarg == '5-person households') {
        whichone1 = 'ps5d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'SIZE5'
        whichone_name = '5 person households';
    }
    else if (buttonarg == '6-person households') {
        whichone1 = 'ps6d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'SIZE6'
        whichone_name = '6 person households';
    }
    else if (buttonarg == '7+-person households') {
        whichone1 = 'ps7d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'SIZE7P'
        whichone_name = '7+ person households';
    }
    else if (buttonarg == 'Adults') {
        whichone1 = 'pad'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'ADLT'
        whichone_name = 'Adults';
    }
    else if (buttonarg == 'Workers') {
        whichone1 = 'pwd'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'WRKR'
        whichone_name = 'Workers';
    }
    else if (buttonarg == 'Children') {
        whichone1 = 'pkd'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'KID'
        whichone_name = 'Children';
    }
    else if (buttonarg == 'White Non-Hispanic') {
        whichone1 = 'pwhited'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'POPWHT'
        whichone_name = 'White Non-Hispanic';
    }
    else if (buttonarg == 'Black Non-Hispanic') {
        whichone1 = 'pblackd'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'POPBLK'
        whichone_name = 'Black Non-Hispanic';
    }
    else if (buttonarg == 'Asian Non-Hispanic') {
        whichone1 = 'pasiand'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'POPASN'
        whichone_name = 'Asian Non-Hispanic';
    }
    else if (buttonarg == 'Other Non-Hispanic') {
        whichone1 = 'potherd'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'POPOTH'
        whichone_name = 'Other Non-Hispanic';
    }
    else if (buttonarg == 'Hispanic') {
        whichone1 = 'phispd'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'POPHSP'
        whichone_name = 'Hispanic';
    }
    else if (buttonarg == 'less than 35') {
        whichone1 = 'ph35d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'HHRU35'
        whichone_name = 'HH less than 35';
    }
    else if (buttonarg == '35-64') {
        whichone1 = 'ph3564d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'HHR3564'
        whichone_name = 'HH 35-64';
    }
    else if (buttonarg == 'greater than 64') {
        whichone1 = 'ph65d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'HHRO64'
        whichone_name = 'HH greater than 64';
    }
    else if (buttonarg == '1') {
        whichone1 = 'pb1d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE1'
        whichone_name = 'Mobile home or trailer';
    }
    else if (buttonarg == '2') {
        whichone1 = 'pb2d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE2'
        whichone_name = 'One-family detached';
    }
    else if (buttonarg == '3') {
        whichone1 = 'pb3d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE3'
        whichone_name = 'One-family attached';
    }
    else if (buttonarg == '4') {
        whichone1 = 'pb4d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE4'
        whichone_name = '2 Apartments';
    }
    else if (buttonarg == '5') {
        whichone1 = 'pb5d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE5'
        whichone_name = '3-4 Apartments';
    }
    else if (buttonarg == '6') {
        whichone1 = 'pb6d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE6'
        whichone_name = '5-9 Apartments';
    }
    else if (buttonarg == '7') {
        whichone1 = 'pb7d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE7'
        whichone_name = '10-19 Apartments';
    }
    else if (buttonarg == '8') {
        whichone1 = 'pb8d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE8'
        whichone_name = '20-49 Apartments';
    }
    else if (buttonarg == '9') {
        whichone1 = 'pb9d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE9'
        whichone_name = '50+ Apartments';
    }
    else if (buttonarg == '10') {
        whichone1 = 'pb10d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE10'
        whichone_name = 'Boat, RV, van, etc.';
    }
    else if (buttonarg == 'Household income <35k') {
        whichone1 = 'difINC_1'
        model_count_var = 'HHINC_1m'
        census_count_var = 'HHINC_1p'
        whichone_name = 'Household income <35k';
    }
    else if (buttonarg == 'Household income 35k - 65k') {
        whichone1 = 'difINC_2'
        model_count_var = 'HHINC_2m'
        census_count_var = 'HHINC_2p'
        whichone_name = 'Household income 35k - 65k';
    }
    else if (buttonarg == 'Household income 65k - 100k') {
        whichone1 = 'difINC_3'
        model_count_var = 'HHINC_3m'
        census_count_var = 'HHINC_3p'
        whichone_name = 'Household income 65k - 100k';
    }
    else if (buttonarg == 'Household income <30k') {
        whichone1 = 'difINC_1'
        model_count_var = 'HHINC_1m'
        census_count_var = 'HHINC_1p'
        whichone_name = 'Household income <30k';
    }
    else if (buttonarg == 'Household income 30k - 60k') {
        whichone1 = 'difINC_2'
        model_count_var = 'HHINC_2m'
        census_count_var = 'HHINC_2p'
        whichone_name = 'Household income 30k - 60k';
    }
    else if (buttonarg == 'Household income 60k - 100k') {
        whichone1 = 'difINC_3'
        model_count_var = 'HHINC_3m'
        census_count_var = 'HHINC_3p'
        whichone_name = 'Household income 60k - 100k';
    }
    else if (buttonarg == 'Household income > 100k') {
        whichone1 = 'difINC_4'
        model_count_var = 'HHINC_4m'
        census_count_var = 'HHINC_4p'
        whichone_name = 'Household income > 100k';
    }
    else if (buttonarg == '0-worker households') {
        whichone1 = 'difWK_0'
        model_count_var = 'HHWK_0m'
        census_count_var = 'HHWK_0p'
        whichone_name = '0-worker households';
    }
    else if (buttonarg == '1-worker households') {
        whichone1 = 'difWK_1'
        model_count_var = 'HHWK_1m'
        census_count_var = 'HHWK_1p'
        whichone_name = '1-worker households';
    }
    else if (buttonarg == '2-worker households') {
        whichone1 = 'difWK_2'
        model_count_var = 'HHWK_2m'
        census_count_var = 'HHWK_2p'
        whichone_name = '2-worker households';
    }
    else if (buttonarg == '3+ worker households') {
        whichone1 = 'difWK_3'
        model_count_var = 'HHWK_3m'
        census_count_var = 'HHWK_3p'
        whichone_name = '3+ worker households';
    }
    else if (buttonarg == '0-vehicle households') {
        whichone1 = 'difAU_0'
        model_count_var = 'HHAU_0m'
        census_count_var = 'HHAU_0p'
        whichone_name = '0-vehicle households';
    }
    else if (buttonarg == '1-vehicle households') {
        whichone1 = 'difAU_1'
        model_count_var = 'HHAU_1m'
        census_count_var = 'HHAU_1p'
        whichone_name = '1-vehicle households';
    }
    else if (buttonarg == '2+ vehicle households') {
        whichone1 = 'difAU_2'
        model_count_var = 'HHAU_2m'
        census_count_var = 'HHAU_2p'
        whichone_name = '2+ vehicle households';
    }
    return whichone1,
    updatemap1();
}

$('#hhvalbuttons .dropdown-menu a').click(function () {
    updateview1(($(this).text()));
});


// start mode button events
function updatemap1() {
  map1.eachLayer(function (layer) {
      if (![baselayer1].includes(layer)){
          map1.removeLayer(layer);
  }});
    firsttime1 = false
    drawmap1();
}


function drawmap1() {
  L.geoJson(run2020, {style: style1, onEachFeature: onEachFeature1}).addTo(map1);
  map1.addLayer(countiesmini)
}

function getDiffColor1(d) {
    return d > 15  ? '#1C4E80' :
    d > 10  ? '#4A729A' :
    d > 5  ?  '#8FA8C1':
           d < -15  ? '#D00000' :
           d < -10  ? '#DA3434' :
           d < -5   ? '#EE9C9C' :
           '#EBF0F5';
}

function style1(feature) {
    return {
        fillColor: getDiffColor1(100*feature.properties[whichone1]) ,
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '3',
        fillOpacity: 0.7
      };
}

function highlightFeaturePuma1(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: 'orange',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  info1.update(layer.feature.properties);
}

var geojson;
geojson = L.geoJson(chicagoMapNew, {style: style1});

function resetHighlightPuma1(e) {
  geojson.resetStyle(e.target);
  info1.update();
  if(map1.hasLayer(countiesmini)){
    countiesmini.bringToFront()
  }
}

function onEachFeature1(feature, layer) {
		layer.on({
			mouseover: highlightFeaturePuma1,
			mouseout: resetHighlightPuma1
		});
	}

var difflegend1 = L.control({position: 'bottomright'});
difflegend1.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'difflegend1'),
    grades = [-20,-15,-10,-5,5,10,15,20],
    labels = [],
    from, to;

    for (var i=0; i< grades.length-1; i++) {
      from = grades[i];
      var from_str = String(from)
      var middle = ' to '
      to = grades[i + 1];
      var to_str = String(to)
      if (i == 0){
        from_str = ''
        middle = ''
        to_str = '-15+'
      }
      if (i == 6){
        middle = ''
        to_str = '+'
      }
      labels.push(
          '<i style="background:' + getDiffColor1(from + 1) + '"></i> ' +
          from_str + middle + to_str)
    }
    div.innerHTML = "<h6>Difference</h6>" + labels.join('<br>');
    return div;
};

difflegend1.addTo(map1);
L.control.layers(baseLayers1,overlays1, {hideSingleBase:true, position: 'bottomleft'} ).addTo(map1);
