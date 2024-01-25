const button = document.querySelector('.btn');
button.addEventListener('click', function(){

const inputText = document.getElementById('textarea').value;
const arr = inputText.split(' ');

const set = new Set();
const map = new Map();

arr.forEach(element => {
    if(element.trim() !== ""){
        element = element.toLowerCase();
        set.add(element);
            if(map.has(element)){
                let count = map.get(element);
                count +=1;
                map.set(element, count)
            } else {
                map.set(element, 1)
    }} 
});

const size = set.size;
const newArray = [];
for (const entry of map) {
    const str = entry.toString().split(',').join(': ')
    newArray.push(str);
  }

console.log(map);
const root = document.getElementById('root');
root.insertAdjacentHTML('beforeend', `<p>Количество уникальный слов: ${size}</p>`);
root.insertAdjacentHTML('beforeend', `<ul>${
    newArray.map(item => (
        `<li>${item}</li>`
    )).join('')
}</ul>`)
})
