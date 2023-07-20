
/*********************************
*    Preset global variables    *
**********************************/

//GLOBAL VARIABLES
var mycounterbalance = Math.floor(Math.random() * 3) + 1; //have 16 subjects' story version left to collect causal rating on 

// set route_vector and choice_vector variables
if (mycounterbalance == 1) {
  var route_subject= "sub6_1005"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_eypHd5TieSzrrfwa' 
} else if (mycounterbalance == 2) {
  var route_subject= "sub12_1011"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_1HMX4EWjm0CXKt0' 
} else if (mycounterbalance == 3) {
  var route_subject= "sub3_1002"
  var link = 'https://jh.qualtrics.com/jfe/form/SV_b8HATMrTQOs4qJo' 
};


function assign_story(){
  window.location=link
}

