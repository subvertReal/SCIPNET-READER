import axios from 'axios';


let plainText;

async function fetchSCPNum(val){
  try{

    // console.log(val + ' test');
    const response = await axios.get(val);

    let json = response.data;

    let keys = Object.keys(json);

    let i = 0;



    while(i < keys.length){
      let name = keys[i];
      (global.scpList).push(name);
      i++;
    }

    return 
  }
  catch(err){

  }
}

async function fetchSCP() {
  alert('Simple Button pressed')
  try {
    const response = await axios.get('https://raw.githubusercontent.com/scp-data/scp-api/refs/heads/main/docs/data/scp/items/content_series-1.json');

    let data = response.data;
    // console.log('num:'+ global.selectedSCPKey);
    let payLoad = Object.entries(data)[global.selectedSCPKey][1].raw_content;
    
    return { payLoad };
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}

function cons(){
  console.log(global.selectedSCP);
}

export function conso(){
  return cons();
}

export function fetchSCPExpo(){
    return fetchSCP();
}

export function fetchSCPNumExpo(val){
  return fetchSCPNum(val);
}