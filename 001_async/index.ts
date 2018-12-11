/*
A function that build a Promise object that is resolved only after a ms seconds by the setTimeout
*/
const waitForMs = (ms: number, message: string) => new Promise(res => setTimeout(() => res(message), ms));

async function Call2() {
  return await waitForMs(2000, "Yayii!");
}

async function Call1() {
  return await Call2();
}

console.log("Start");
Call1().then(val => console.log("Result Value:", val))

/*Example of Promise with the specification of the Type that will be returned */
const typedPromise = new Promise<string>((resolve, reject) => { resolve('Hello'); });


/*
    Example of Promise that go in error
 */
const promiseInError = new Promise((resolve, reject) => { reject(new Error('On Reject return always an error object')) });

async function CallError() {
  return await promiseInError;
}

CallError().then(val => console.log("never happen, sorry!")).catch((reason) => console.log("Error:", reason));

/*
 */


/*Propagation of Rejection.*/

new Promise<string>((res, rej) => {
  res("First true");
})
  .then(res => {
    console.log(res);
    return "Second false";
  })
  .then(res => {
    //The use of an undeclared variable will cause a rejection
    //this will end to the first .Catch
    // @ts-ignore
    aa = 2;
    console.log(res);
    return "Third true";
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log('ERROR:', error.message);
  });

//--------------------------------

async function CallAnotherError(){
  await CallError();
}

async function CallTheCallError() {
  try {
    await CallAnotherError();
    return "4";
  } catch (e) {
    console.error("CallTheCallError Say error:", e);
  }
  return "3";
}
CallTheCallError().then((result) => console.log("CallTheCallError result:", result));

