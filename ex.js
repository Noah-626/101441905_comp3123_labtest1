function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            return reject(new Error("Input is not an array"));
        }

        try {
            const result = array
                .filter(item => typeof item === 'string')  
                .map(word => word.toLowerCase());          
            resolve(result);
        } catch (error) {
            reject(new Error("Error while processing"));
        }
    });
}

lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
    .then(result => console.log(result))   
    .catch(error => console.error(error));
