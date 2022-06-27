window.onload = () => {

document.querySelector('.excuse').innerHTML = excuseGenerator ();
console.log('Hello Anna from the console');

}


let excuseGenerator = () => {

    let who = ['My dog','My baby brother','Her fish','My bird'];
    let action = ['ate','swallowed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car', 'my money'];
    let when = ['before the class.','right before I came.','when I finished.','during my lunch.','while I was sleeping.'];
    
    let whoIndx = Math.floor(Math.random() * who.length);
    let actIndx = Math.floor(Math.random() * action.length);
    let whtIndx = Math.floor(Math.random() * what.length);
    let whnIndx = Math.floor(Math.random() * when.length);
    
    return who[whoIndx] +' '+ action[actIndx] +' '+ what[whtIndx] +' '+ when[whnIndx];
    }
