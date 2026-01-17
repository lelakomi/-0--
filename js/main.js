document.querySelectorAll('.card h2').forEach(header => {
  header.addEventListener('click', () => {
    const def = header.nextElementSibling;

    document.querySelectorAll('.definition').forEach(d => {
      if (d !== def) d.style.display = 'none';
    });

    def.style.display =
      def.style.display === 'block' ? 'none' : 'block';
  });
});

