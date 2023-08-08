
/*********************************
*    Preset global variables    *
**********************************/

//GLOBAL VARIABLES
var mycounterbalance = Math.floor(Math.random() * 2) + 1; //have 16 subjects' story version left to collect causal rating on 

// set route_vector and choice_vector variables
if (mycounterbalance == 1) {
  var route_subject= "sub21_1020"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_6hCaDD6V95uhB0W' 
} else if (mycounterbalance == 2) {
  var route_subject= "sub22_1021"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_0PB41KkaHUzrdky' 
};


function assign_story(){
  window.location=link
}

