
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { 
    navbar.style.backgroundColor = 'yellow'; 
  } else {
    navbar.style.backgroundColor = '#90ee90'; //Navigation Bar - Light Green color
  }
});
