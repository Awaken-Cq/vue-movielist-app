function a() {
    console.log('a');
}

function b() {
    console.log('b');
}

a(); 
b();
// a
// b

function a() {
    setTimeout( function() {
        console.log('a');
    }, 1000);
}

function() {
    console.log('b');
}

a();
b();
// b
// a

function a(cb) {
    setTimeout( function() {
        console.log('a');
        cb()
    }, 1000);
}

function b() {
    console.log('b');
}

a()
b()

a( function() {
    b();
});

// a
// b

// callback 지옥
function a(cb) {
    setTimeout( function() {
        console.log('a');
        cb();
    }, 1000);
}
function b(cb) {
    setTimeout( function() {
        console.log('b');
        cb();
    }, 1000);
}
function c(cb) {
    setTimeout( function() {
        console.log('c');
        cb();
    }, 1000);
}
function d(cb) {
    setTimeout( function() {
        console.log('d');
        cb();
    }, 1000);
}

a( function() {
    b( function() {
        c( function() {
            d();
        });
    });
});

function a() {
    return new Promise( function(resolve) {
        setTimeout( function() {
            console.log('a');
            resolve();
        }, 1000);
    });
}
function b() {
    return new Promise( function(resolve) {
        setTimeout( function() {
            console.log('b');
            resolve();
        }, 1000);
    });
}
function c() {
    return new Promise( resolve => {
        setTimeout( function() {
            console.log('c');
            resolve();
        }, 1000);
    });
}
function d() {
    return new Promise( (resolve) => {
        setTimeout( function() {
            console.log('d');
            resolve();
        }, 1000);
    });
}
a()
    .then(() => b())
    .then(() => c())
    .then(() => d());

//Desktop IE에서 안됨.
async function asyncFunc() {
    await a();
    await b();
    await c();
    await d();
    console.log('done');
}

function a() {
    return new Promise((resolve, reject) => {
        if (isError) {
            reject(Error);
        }
        setTimeout(() => {
            console.log('a');
            resolve('done');
        }, 1000);
    });
}

a()
    .then( res => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
        alert(error.message);
    })
    .finally(() => {
        console.log('Final!');
    });

async function asyncFunc() {
    try {
        const res = await a();
        console.log(res);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('done!!');
    }
}    
asyncFunc();