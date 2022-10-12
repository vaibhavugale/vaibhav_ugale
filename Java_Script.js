var tab_links=document.getElementsByClassName("tab-link");

var tab_contents=document.getElementsByClassName("tab-content");


function open_tab(tab_name){
    for(tablink of tab_links){
 
        tablink.classList.remove("active-link")
    }
    for(tab_content of tab_contents){
        tab_content.classList.remove("active-tabcontent")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tab_name).classList.add("active-tabcontent")
}
let side=document.getElementById("sidemenu");
const openmenu = ()=>{
    side.style.right="0";
}
const closemenu = ()=>{
    side.style.right="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzJQq-66XZ-9kvwF12-AMu6bhH3-6NX_Xqd5bAxnO9MtsbMLlIFJi1W1o7M0PYbjBN3/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },1000)
        form.reset();  
    })
    .catch(error => console.error('Error!', error.message))
})
