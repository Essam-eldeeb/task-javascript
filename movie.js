let addmovie = document.getElementById("addmovie");
let form = document.getElementById("formdata");
let body = document.getElementsByName("body");
let database = document.getElementById("database");
let cancel = document.getElementById("cancel");
let input = document.querySelectorAll("input");
let add = document.getElementById("add");
let cardata = document.getElementById("carddata");
let deletcard = document.getElementById("deletcard")
console.log(deletcard);
let a = input[0].value;
let b = input[1].value;
let c = input[2].value;

let removeform = () => {
  form.style.display = "none";
  database.style.display = "block";
};
let dataform = () => {
  form.style.display = "block";
  database.style.display = "none";
};
addmovie.addEventListener("click", dataform);
cancel.addEventListener("click", removeform);

// ****************************

let button=document.createElement("button");
// button.classList.add("deletcard","btn","btn-danger", "w-100","mt-2","addmovie");
// button.classList = "btn btn-danger w-100  mt-2 "
button.innerHTML="<button class= 'deletcard   btn btn-danger   mt-5 ' >delete</button>";
// button.innerText("delet");
button.setAttribute("class","deletcard");
console.log(button);

// 

adddata = () => {
    if(input[0].value.trim()=="" ||input[1].value.trim()==""||input[2].value.trim()==""){
        alert("please inter your data")
    }if(input[0].value.length<3 ||input[1].value.length<3 ||input[2].value.trim()=="" ){
       alert("inter data bigger than 3 letter")
   }    else{  cardata.innerHTML += `<div class="deletmain  col-lg-3 rounded bg-info text-center p-3 "> title movie :${input[0].value} <br> image url:${input[1].value} <br> your rate :${input[2].value}  <br><button class="buttonremove">delete</button>`;
              for(let i=0; i<input.length;i++){
                  input[i].value=""
              }


}

   
};

add.addEventListener("click", adddata);


cardata.addEventListener("click",function(e){
    
    
    if(e.target.classList.contains("buttonremove")){
    
        e.target.parentElement.remove();
       
    }
    
    
    })
// document.addEventListener("click",function(e){
//     if(e.target.classlist.contains("deletcard")){
//         e.target.parentElement.remove();
//     }
// })
// document.addEventListener("click",function(e){
//     e.target.parentElement.remove();
// }
    
// )
//  

// removecard= ()=>{
//     // if(cardata.innerHTML += `<div class="deletmain  col-lg-3 rounded bg-info text-center m-1 p-3 "> title movie :${input[0].value} <br> image url:${input[1].value} <br> your rate :${input[2].value}  <br> `)
//     {cardata.innerHTML=""}
// }
// button.E