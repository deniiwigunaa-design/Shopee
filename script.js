document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whatsappForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah halaman reload saat form disubmit

        const nama = document.getElementById('nama').value;
        const pertanyaan = document.getElementById('pertanyaan').value;

        // Nomor WhatsApp Anda (ganti dengan nomor WhatsApp bisnis Anda, termasuk kode negara tanpa + atau 00)
        // Contoh: Jika nomor Anda +6281234567890, maka tulis '6281234567890'
        const nomorWhatsApp = '6285179864726'; // <-- GANTI DENGAN NOMOR WHATSAPP ANDA!

        // Pesan yang akan dikirim
        const pesan = `Halo CS Shopee, saya ${nama}. Saya ingin bertanya: ${pertanyaan}.`; // Menyesuaikan pesan
        // Anda juga bisa menambahkan informasi lain, misal:
        // const pesan = `Halo, saya ${nama} dari Layanan Konsultasi CS. Saya ingin bertanya: ${pertanyaan}.`;


        // Mengkodekan pesan agar aman untuk URL
        const encodedPesan = encodeURIComponent(pesan);

        // Membuat URL WhatsApp
        const whatsappURL = `https://wa.me/+6285179864726`;

        // Membuka tab baru dengan URL WhatsApp
        window.open(whatsappURL, '_blank');

        // Opsional: Reset formulir setelah pengiriman
        form.reset();
    });
});


