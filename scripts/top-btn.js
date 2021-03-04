let btn = document.getElementById('topBtn');
window.onscroll = () => {scrollTop()};

const scrollTop = () => 
document.body.scrollTop > 500 || 
document.documentElement.scrollTop > 500 ?
btn.style.display = "block" : btn.style.display= "none";

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
