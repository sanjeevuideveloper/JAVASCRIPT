let Ename=document.querySelector('#name');
let Eage=document.querySelector('#age');
let Edesignation=document.querySelector('#designation');
let AddEmployee=document.querySelector('#AddEmployee');
let tbody=document.querySelector('#tbody');
let sno=0;
let tempStr='';
AddEmployee.addEventListener('click',function () {
    sno++;
    let name=Ename.value;
    let age=Eage.value;
    let designation=Edesignation.value;
    tempStr+=`<tr><td>${sno}</td><td>${name}</td><td>${age}</td><td>${designation}</td></tr>`;
    tbody.innerHTML=tempStr;
})