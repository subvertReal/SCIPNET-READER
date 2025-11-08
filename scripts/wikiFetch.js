import axios from 'axios';


let plainText;

async function fetchSCP() {
  alert('Simple Button pressed')
  try {
    const response = await axios.get('https://raw.githubusercontent.com/scp-data/scp-api/refs/heads/main/docs/data/scp/items/content_series-1.json');
    console.log(response.data["SCP-002"]["raw_content"])
    plainText = 'response';
    
    return { plainText };
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}

export function fetchSCPExpo(){
    return fetchSCP();
}