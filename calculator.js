// let i = document.querySelector(".seven").textContent;
// console.log(i);
 
function display(num){
    document.querySelector("#result").value 
    += num;
}

function evaluation(fn) {
    return new Function('return ' + fn)();
  }

document.querySelector(".result").addEventListener("click", function(){
    let input = document.querySelector("#result").value ;
    let result = evaluation(input);
    document.querySelector("#result").value = result;
})