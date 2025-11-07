import axios from 'axios';



async function fetchTest() {
  alert('Simple Button pressed')
  try {
    const response = await axios.get('https://scp-wiki.wikidot.com/scp-173');
    console.log('hi');
    console.log(response.data);
    let value = response.data;
    return value;
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}

export function a(){
    return fetchTest();
}