const URL="https://api.github.com/users";
const template=document.getElementById("div")

async function getApi(){
 let connectServer=await window.fetch(URL);
 let convertJSON = await connectServer.json();
 let output = ""

 for(let user of convertJSON){
 output +=`
 <div class="userBlock">
 <img src=${user.avatar_url} alt=${user.login}/>
 <h2>${user.login}</h2>
 <button>
 <a href=${user.html_url} target="_blank">Go to Profile </a>
 </button>
 </div>`
 }
 template.innerHTML=output;
}
getApi();