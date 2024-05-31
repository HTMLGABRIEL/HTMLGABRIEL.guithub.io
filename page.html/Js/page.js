let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

Window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav ul li a[href*=' + id + ']').classListadd('active');
                });
            };
        });
};

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});

function valid(){
    if(grecaptcha. getResponse() == ""){
        alert("Você precisa marcar a validação");
        return false;
    };
};

// const cadMsgCont = document.getElementById("cadMsgCont");
//     if(cadMsgCont){
//         cadMsgCont.addEventListener("submit", async (e) => {
//             e.preventDefault();

//             const dadosForm = new FormData(cadMsgCont);
//             const dados = await fetch("E-mail.php", {
//                 method: "POST",
//                 body: dadosForm
//             });
//             const resposta = await dados.json();
//             console.log(resposta);
//         });
//     }

