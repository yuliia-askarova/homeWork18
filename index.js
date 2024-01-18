const button = document.querySelector('.btn');
button.addEventListener('click', function(){

const inputText = document.getElementById('textarea').value;
const arr = inputText.split(' ');
let set = new Set(arr);
let size = set.size;
console.log(size);

let map = new Map();
arr.forEach(element => {
    if(map.has(element)){
        let count = map.get(element);
        count +=1;
        map.set(element, count)
    } else {
        map.set(element, 1)
    }
});
const newArray = [];
for (let entry of map) {
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


