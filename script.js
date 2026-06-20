let b=document.querySelector("#b1");
let p=document.getElementById("p1");

b.addEventListener("click",async ()=>{
    let text= await hello();
    p.innerText=text;
})

let url="https://catfact.ninja/fact";
async function hello(){
    try{
      let res=await fetch(url);
      let data=await res.json();
      return data.fact ; 
    }
    catch(err){
        console.log(`error is ${err}`);
    }
};