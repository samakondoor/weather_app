console.log('starting app');
setTimeout(()=>{
    console.log('inside the callback');

}, 3000);
setTimeout(()=>{
    console.log('i am second callback');

}, 0);

setTimeout(()=>{
    console.log('i am third callback');

}, 1000);

setTimeout(()=>{
    console.log('i am forth callback');

}, 2000);


console.log('hello sama');



console.log('finish');