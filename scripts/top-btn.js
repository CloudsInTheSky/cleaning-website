let btn = document.getElementById('topBtn');
window.onscroll = () => {scrollTop()};

const scrollTop = () => 
document.body.scrollTop > 100 || 
document.documentElement.scrollTop > 100 ?
btn.style.display = "block" : btn.style.display= "none";

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
