let numbers = [5, 2, 10, 20, 2, 1, 6, 2, 100, 15];

function solution(array){
    return array.sort((a,b) => a-b);
}

let response = solution(numbers);

response.forEach(element => {
    console.log(element)
});