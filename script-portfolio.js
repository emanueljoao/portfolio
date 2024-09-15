// FILTRO MEU PORTFOLIO

const options = document.querySelectorAll('.section-option')
 
function activeSections(index) {
  options.forEach((opcao) => {
    opcao.classList.add('d-none')
  })
  options[index].classList.remove('d-none')
  
}

let activeOption = document.querySelectorAll('.options')

activeOption.forEach((option, index) => {
  option.addEventListener('click', function() {
    activeOption.forEach(option => option.classList.remove('active'))
    option.classList.add('active')
    console.log(option)
    activeSections(index)
  })})