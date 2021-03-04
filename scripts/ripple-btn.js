let buttons = document.querySelectorAll('button');
    buttons.forEach( btn => {
        btn.addEventListener('click' , function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetLeft;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            btn.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            },1000);
        })
    })