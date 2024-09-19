<script>
  const menuIcon = document.querySelector('.nav-icon');
  const menu = document.querySelector('.nav');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active'); // Lägg till eller ta bort klassen "active" för att visa/gömma menyn
  });
</script>