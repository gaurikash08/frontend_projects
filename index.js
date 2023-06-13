let input= document.getElementsByClassName("input")[0]
let container=document.querySelector(".container")

let generateWord=(n)=>{

    let word="";
    let letters= "abcdefghijklmnopqrstuvwxyz";

    for(let i=0;i<n;++i){
        const random= (Math.random() *25).toFixed(0);
        word+=letters[random]
    }

    return word;

}
// console.log(generateWord(19))

let numofwords;
const generatePara=()=>{
    numofwords=Number(input.value)
    const para =document.createElement("p")
    

    let data = "";

    for (let i = 0; i < numofwords; ++i) {
        const randnum = (Math.random() * 15).toFixed(0);
        data += generateWord(randnum);
        data += "  ";
    }
    
   
   para.innerText= data;
    para.setAttribute("class", "paras");
    container.append(para)
}