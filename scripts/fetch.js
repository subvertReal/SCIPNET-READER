const axios = require('axios');

async function getItem() {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/subvertReal/scpWikiAPI/refs/heads/main/SCP-1000.html"
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


export function sendItem(){
    return getItem();
}