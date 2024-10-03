const delayedSuccess = () => {
    setTimeout(() =>{
        let success =  {'message': 'Delayed Success'};
        console.log(success);
    }, 500);
}


const delayedException = () => {
    setTimeout(() =>{
        try {
            throw new Error('error: delayed exception!');
        }catch(e){
            console.log(e);
        }
    }, 500);
};




function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('message: Delayed Success');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('error: delayed exception!');
        }, 500);
    });
}


resolvedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });


rejectedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error); 
    });


//     delayedSuccess();
// delayedException();