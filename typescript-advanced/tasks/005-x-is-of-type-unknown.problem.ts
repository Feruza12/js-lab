// workaround #1 : set the return value to either never or void
function somethingDangerous(): never | void {
    if (Math.random() > 0.5) {
        throw new Error("Oh dear!");
    }
}

try {
    somethingDangerous();
} catch (error) {
    console.log(error.message);
}

