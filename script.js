let btnadd=document.querySelector('#btn1');
let table=document.querySelector('table');

let firstnameinput=document.querySelector('#first');
let lastnameinput=document.querySelector('#last');
let cityinput=document.querySelector('#city');
let countryinput=document.querySelector('#country');

btnadd.addEventListener('click',()=>{
        let first=firstnameinput.value;
        let last=lastnameinput.value;
        let city=cityinput.value;
        let country=countryinput.value;

        let template=`
                   <tr>
                       <td>${table.rows.length}</td>
                       <td>${first}</td>
                       <td>${last}</td>
                       <td>${city}</td>
                       <td>${country}</td>
                       </tr> `;
        table.innerHTML += template;

});
let btnadd2=document.querySelector('#btn2');
let table2=document.querySelector('table');

let firstnameinput2=document.querySelector('#first');
let lastnameinput2=document.querySelector('#last');
let cityinput2=document.querySelector('#city');
let countryinput2=document.querySelector('#country');

btnadd2.addEventListener('click',()=>{
        let first=firstnameinput2.value;
        let last=lastnameinput2.value;
        let city=cityinput2.value;
        let country=countryinput2.value;

      
        var newrow=table2.insertRow(1);


        var cell1=newrow.insertCell(0);
        var cell2=newrow.insertCell(1);
        var cell3=newrow.insertCell(2);
        var cell4=newrow.insertCell(3);
        var cell5=newrow.insertCell(4);


        cell1.innerHTML() += 1;
        cell2.innerHTML() += firstnameinput2;
        cell3.innerHTML() += lastnameinput2;
        cell4.innerHTML() += cityinput2;
        cell5.innerHTML() += countryinput2;

});
