function toCamelCase(input) {
    let result;
    result =  input.split(/[-_]/).map(e => e[0].toUpperCase() + e.substr(1,).toLowerCase()).join('');
    if (!(input[0].toUpperCase() === input[0])){
        result = result.charAt(0).toLowerCase() + result.slice(1);
    }
    return result;
  }
  


let string = "The-stealth-warrior";


console.log(toCamelCase(string));
