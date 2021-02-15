let fruckt = ["Apple", "Banana", "Tomato", "Batad"];
let ul = document.createElement('ul');


for(let i = 0; i < fruckt.length; i++){
    let li = document.createElement('li');
    li.innerText = fruckt[i];
    
    let btn = document.createElement('button');
    btn.innerText = '-';

    btn.addEventListener('click', function(){
        li.remove()
    })
    li.append(btn);
    ul.append(li);

}
document.body.append(ul);