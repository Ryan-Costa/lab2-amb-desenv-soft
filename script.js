// Evento barra de navegação lateral

function toggleMenu(){
  let navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
  let toggle = document.querySelector('.toggle');
  toggle.classList.toggle('active')
}

// Evento iframes

let videos = [
    "https://flowpodcast.com.br",
    "https://www.youtube.com/embed/FgqKjlfNEAE", 
    "https://www.youtube.com/embed/fJFHAIQUG2c", 
    "https://www.youtube.com/embed/A2tQUZAkSxk", 
    "https://www.youtube.com/embed/KFPli-_27Wc", 
    "https://www.youtube.com/embed/Tw0gOgXwbas", 
    "https://www.youtube.com/embed/KdtDpFkNX-k"
  ];

let iframe = document.querySelector("#iframe");
let btns = document.querySelectorAll("a");

btns.forEach((a, index) => {
  a.addEventListener("click", () => {

    iframe.setAttribute(
      "src", 
      videos[index]
    );
  });
});



// btns.forEach(a => {
//   a.addEventListener("click",() => {
//     let url = a.getAttribute('data-url');
//     iframe.setAttribute('src', url);
//   });
// });



