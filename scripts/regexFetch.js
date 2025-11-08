// Use this as a backup if https://github.com/scp-data/scp-api goes down or somehting?

import axios from 'axios';


async function fetchTest() {
  alert('Simple Button pressed')
  try {
    const response = await axios.get('https://scp-wiki.wikidot.com/scp-7000');

    // console.log(response.data);
    let value = response.data;
    // console.log(value);

    // deletes the before
    value = value.replace(/[\s\S]*?(<div\s+id=["']page-content["'][^>]*>)/i, '$1');

  
    // Save image names
    value = value.replace(/<img[^>]*?src=["'][^"']*\/([^"'/]+)["'][^>]*?>/gi,(match, fileName) => `\n[Image: ${fileName}]\n`);
    // Remove all HTML tags
    let plainText = value.replace(/<[^>]+>/g, '').trim();



    // Remove everything after & or ‡
    plainText = plainText.split('‡')[0].trim();
    plainText = plainText.replace(/rating:&nbsp;\+[0-9]+\+&#8211;-?x?/gi, '').trim();

   // Remove the SCP navigation line (&#171; SCP-XXX | SCP-XXX | SCP-XXX &#187;)
    plainText = plainText.replace(/&#171;\s*SCP-[^|]+\s*\|\s*SCP-[^|]+\s*\|\s*SCP-[^|]+\s*&#187;/g, '').trim();


    



    console.log(plainText);

    return { plainText };
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}

export function a(){
    return fetchTest();
}