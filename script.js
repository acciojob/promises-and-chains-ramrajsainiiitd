//your JS code here. If required.
let submit = document.getElementById('btn');
submit.addEventListener('click',()=>{
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  //console.log(name, age);
  
  let promise = new Promise(function(resolve, reject){
    if (age >= 18){
      resolve(`Welcome, ${name} You can vote.`);
    }
    else{
      reject(`Oh sorry ${name}. You aren't old enough.`);
    }
  });

  promise.then(message => {
    window.alert(message);
  }).catch(error => {
    window.alert(error);
  });
});