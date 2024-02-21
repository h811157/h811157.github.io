import fs from 'fs';
import { mkdir } from "fs/promises";
import { Readable } from 'stream';
import { finished } from  'stream/promises';
import path from "path";
const downloadFile = (async (url, fileName) => {
  const res = await fetch(url).catch(r=>{console.log("fetch err",url,r)});
  const fileStream = fs.createWriteStream(fileName, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
});

let website="https://www.spriters-resource.com"
let jj = fs.readFileSync('names.txt',{encoding:"ascii"});
let rr = jj.split('\n').filter(l=>l.includes('<img')).map(
        l=>{
            return{
                name:l.split('alt=')[1].split('"')[1],
                addr:l.split('src=')[1].split('"')[1],
            }
        }
    )
    .forEach(async s=>{
        if (s.addr.includes('/resources') && s.name !== ''){
            console.log(s);
            await downloadFile(`${website}${s.addr}`,`${s.name.replace("/","")}.png`)
        }
    });

console.log(rr)

// await downloadFile("<url_to_fetch>", "<fileName>")