document.addEventListener('DOMContentLoaded', function() {
    const tombolSapaan = document.getElementById('btnSapaan');
    
    if (tombolSapaan) {
        tombolSapaan.addEventListener('click', function() {
            alert('Salam Pramuka! ✋\nTerima kasih telah mengunjungi Portofolio Pramuka Gugus Depan SMPN 1 Bumi Agung.');
        });
    }

    // Mengubah transparansi menu aktif pada navbar saat di-scroll
    const links = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('fw-bold', 'text-warning');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('fw-bold');
            }
        });
    });
});
