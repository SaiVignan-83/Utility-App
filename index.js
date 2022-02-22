const readLineSync = require('readline-sync');
const crypto = require('crypto');


console.log("                 -------------Utility App---------------           ");
const utilities = [
  "URL Encoder/Decoder",
  "Base64 Encoding/Decoding",
  "String hashing",
  "Epoch Converters",
  "Binary/Decimal/Hex/Octal Converters",
  "RGB-Hex",
  "Unit Converters"
]


function urlEncodeDecoder(){
          const selectedUtilityOption = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n'));
          console.log(`You have selected ${selectedUtilityOption}`);
          switch(selectedUtilityOption) {
            case 1:
              const urlToEncode = readLineSync.question('Please enter the url to be encoded\n');
              const encodedURL = encodeURIComponent(urlToEncode);
              console.log(encodedURL);
              break;
            case 2:
              const urlToDecode = readLineSync.question('Please enter the url to be decoded\n');
              const decodedURL = decodeURIComponent(urlToDecode);
              console.log(decodedURL);
              break;
            default:
              console.log('Invalid URL\n');
              break;
          }
}
function base64EncodeDecode(){
          const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Base64 Encoding/Decodingr. Which utility function would you like to use \n1. Base64 Encoding\n2. Base64 Decoding\n'));
          console.log(`You have selected ${selectedUtilityOption}`);
          switch(selectedUtilityOption) {
            case 1:
              const string = readLineSync.question('Please enter the string to be encoded\n');
              const encodedstr = Buffer.from(string).toString("base64");
              console.log(encodedstr);
              break;
            case 2:
              const strToDecode = readLineSync.question('Please enter the url to be decoded\n');
              const decodedstr = Buffer.from(strToDecode,'base64').toString('ascii');
              console.log(decodedstr);
              break;
            default:
              console.log('Invalid str\n');
              break;
          }
}

function stringhashing(){
         const selectedUtilityOption = parseInt(readLineSync.question('Welcome to String hashing. Which utility hash function would you like to use \n1.md5 \n2.sha-1\n3.sha-256\n4.sha-512\n'));
        console.log(`You have selected ${selectedUtilityOption}\n`);
        let algo = '';
        const string = readLineSync.question('Please enter the String\n');
        switch(selectedUtilityOption){
             case 1:
                  algo = 'md5';
                  console.log(crypto.createHash(algo).update(string).digest('hex'));
                  break;
             case 2:
                  algo = 'sha1';
                  console.log(crypto.createHash(algo).update(string).digest('hex'));
                  break;
            case 3:
                  algo = 'sha256';
                  console.log(crypto.createHash(algo).update(string).digest('hex'));
                  break;
            case 4:
                  algo = 'sha512';
                  console.log(crypto.createHash(algo).update(string).digest('hex'));
                  break;
        }
}
function epochConverters(){
        const selectedUtilityOption = parseInt(readLineSync.question('Welcome to epoch Converter. Which utility  function would you like to use \n1.toHumanDate \n2.toEpoch\n'));
        console.log(`You have selected ${selectedUtilityOption}\n`);
        switch(selectedUtilityOption) {
            case 1:
                    const epochTime = parseInt(readLineSync.question("Enter Epoch time\n"));
                    const myDate = new Date(epochTime);
                    console.log(myDate);
                    break;
            case 2:
                  const year = readLineSync.question("Enter year in YYYY format\n");
                  const month = readLineSync.question("Enter Month (Jan-1,Feb-2..)\n");
                  const date = readLineSync.question("Enter date in DD format\n");
                  const hours = readLineSync.question("Enter hours in HH format\n");
                  const minutes = readLineSync.question("Enter minutes in MM format\n");
                  const seconds = readLineSync.question("Enter seconds in SS format\n");
                  const updatedDate = new Date(
                    `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`
                  );
                  const epochval = updatedDate.getTime() / 1000.0;
                  console.log(epochval);
                  break;
        }
}

function baseConverters(){
        const selectedUtilityOption = parseInt(readLineSync.question('Welcome to base Converter. Which utility  function would you like to use \n1.Binary to Decimal\n2.Binary to Hex\n3.Binary to Octal\n4.Decimal to Binary\n5.Decimal to Hex\n6.Decimal to Octal\n7.Hex to Binary\n8.Hex to Decimal\n8.Hex to Octal\n9.Octal to Binary\n10.Octal to Decimal\n11.Octal to Hex\n'));
        console.log(`You have selected ${selectedUtilityOption}\n`);
        const number = parseInt(readLineSync.question("Enter number\n"));
        switch(selectedUtilityOption) {
          case 1:
          case 2:
          case 3:
          case 8:
          console.log(number, 2);
          break;

          case 4:
          case 7:
          case 10:
            console.log(number.toString(2));
          break;

          case 5:
          case 12:
          console.log(number.toString(16));
          break;

          case 6:
          case 9:
          console.log(number.toString(8));
          break;

          case 11:
           console.log(number.toString(11));
           break;
        }
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r,g,b){
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hextoRGB(hex){
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [ r, g, b ]
}

function rbgHex(){
      const selectedUtilityOption = parseInt(readLineSync.question('Welcome to RGB ⇔ Hex Converter. Which utility  function would you like to use \n1.rgbToHex \n2.hexToRgb\n'));
        console.log(`You have selected ${selectedUtilityOption}\n`);
        switch(selectedUtilityOption) {
            case 1:
                const red = parseInt(readLineSync.question('Enter the value of Red'));
                const green = parseInt(readLineSync.question('Enter the value of Green'));
                const blue = parseInt(readLineSync.question('Enter the value of Blue'));
                console.log(rgbToHex(red,green,blue));
                break;
            case 2:
                  const hex = readLineSync.question('Enter the value of hex');
                  const rgb_obj = {'red':0,'green':0,'blue':0};
                  const rgb_val = hextoRGB(hex);
                  rgb_obj.red = rgb_val[0];
                  rgb_obj.green = rgb_val[1];
                  rgb_obj.blue = rgb_val[2];
                  console.log(rgb_obj);
                  break;
            default:
                console.log("Enter the correct choice");
        }
}

function unitConverter(){
   const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Unit Converter. Which utility  function would you like to use \n1.Metre to CentiMeter \n2.Mile to Kilometer\n'));
        console.log(`You have selected ${selectedUtilityOption}\n`);
    switch(selectedUtilityOption){
      case 1:
          const metre_val = parseInt(readLineSync.question('Enter the value in metres'));
          const cm_val = metre_val*100;
          console.log(`${metre_val}m = ${cm_val}cms`);
          break;
      case 2:
          const kilometre_val = parseInt(readLineSync.question('Enter the value in kilometres'));
          const mile_val = kilometre_val*1.60935;
          console.log(`${kilometre_val}km = ${mile_val}miles`);
          break;
        }

}

function utilityMainFun(){
  console.log('Welcome to Utility App. Which utility would\ you like to select \n');
  for(let ind = 0;ind < utilities.length;ind++){
    console.log(`${ind+1}. ${utilities[ind]}`);
  }
  const selectedUtilityOption = parseInt(readLineSync.question('Select any option-\n'));
  switch(selectedUtilityOption)
  {
    case 1:
        urlEncodeDecoder();
          break;
    case 2:
          base64EncodeDecode();
          break;
    case 3:
        stringhashing();
        break;
    case 4:
         epochConverters();
         break;
    case 5:
         baseConverters();
         break;
    case 6:
        rbgHex();
        break;
    case 7:
        unitConverter();
        break;
    default:
    console.log('Invalid option\n');
    break;
  }
}
utilityMainFun();