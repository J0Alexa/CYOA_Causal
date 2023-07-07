
/*********************************
*    Preset global variables    *
**********************************/

//GLOBAL VARIABLES
var mycounterbalance = Math.floor(Math.random() * 2) + 1; //have 16 subjects' story version left to collect causal rating on 

// set route_vector and choice_vector variables
if (mycounterbalance == 1) {
  var route_subject= "sub55_7055"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_doqxCA7AUcLjLIa' 
} else if (mycounterbalance == 2) {
  var route_subject= "sub79_7079"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_783nNHRQIhxGK7Y' 
};


function assign_story(){
  window.location=link
}

