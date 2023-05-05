console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('husband: we should go in');
    console.log('wife: no i am hungry')
    console.log('husband: got popcorn');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: we should go in');
    console.log('wife: no i need butter')
    console.log('husband: got butter');
    return new Promise((resolve,reject) => resolve(`${t} butter`)
)})

const getColdDrink = getButter.then((t) => {
    console.log('husband: we should go in');
    console.log('wife: no i need cold drink');
    console.log('husband: got cold drink')
})

getColdDrink.then((value) => console.log(value));
console.log('person4: shows ticket')
console.log('person5: shows ticket')
