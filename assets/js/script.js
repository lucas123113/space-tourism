const controls = document.querySelectorAll('.control');

controls.forEach(function(control) {
  control.addEventListener('click', function(event) {
    if (!this.classList.contains('open')) {
      event.preventDefault();
      event.stopPropagation();

      const activeControl = document.querySelector('.control.open');
      activeControl.classList.remove('open');

      this.classList.add('open');
    }
  });
});
function trocaClasse(id1, id2) {
  const elementosAtivos = document.querySelectorAll('.active');
  
  for (let i = 0; i < elementosAtivos.length; i++) {
    elementosAtivos[i].classList.remove('active');
  }
  
  const elemento1 = document.getElementById(id1);
  const elemento2 = document.getElementById(id2);
  
  setTimeout(function() {
    elemento1.style.opacity = 0;
    elemento2.style.opacity = 0;
    
    setTimeout(function() {
      elemento1.classList.add('active');
      elemento2.classList.add('active');
      
      setTimeout(function() {
        elemento1.style.opacity = 1;
        elemento2.style.opacity = 1;
      }, 20);
    }, 200);
  }, 20);
}

const control2 = document.querySelectorAll('.crew-item')
control2.forEach(function(control) {
  control.addEventListener('click', function(event) {
    if (!this.classList.contains('open2')) {
      event.preventDefault();
      event.stopPropagation();

      const activeControl2 = document.querySelector('.crew-item.open2');
      activeControl2.classList.remove('open2');

      this.classList.add('open2');
    }
  });
});
const control3 = document.querySelectorAll('.teccontrol-item')
control3.forEach(function(control) {
  control.addEventListener('click', function(event) {
    if (!this.classList.contains('open3')) {
      event.preventDefault();
      event.stopPropagation();

      const activeControl3 = document.querySelector('.teccontrol-item.open3');
      activeControl3.classList.remove('open3');

      this.classList.add('open3');
    }
  });
});

