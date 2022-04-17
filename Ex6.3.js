
    function organizeString(stringA, stringB) {
        let newString = "";
        stringA.split('').forEach(element => {
            newString.includes(element) || (newString += element)
        });
        stringB.split('').forEach(element => {
            newString.includes(element) || (newString += element)
        });
        return newString.split('').sort().join('');
    }

