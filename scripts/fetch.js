const axios = require('axios');

async function getItem(item) {
  try {
    const response = await axios.get(
      item
    );
    
    return response.data; 
  } catch (error) {
    console.error(
      "Error fetching github repo with error code:",
      error
    );
    throw error;
  }
}


export function sendItem(item){
    return getItem(item);
}