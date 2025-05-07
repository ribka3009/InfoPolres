// === TAMPILKAN JADWAL KEGIATAN ===
const jadwalContainer = document.getElementById("jadwalContainer");

if (jadwalContainer) {
  fetch('data/jadwal.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.tanggal}</td>
          <td>${item.kegiatan}</td>
          <td>${item.lokasi}</td>
        `;
        jadwalContainer.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Gagal mengambil data jadwal:', error);
    });
}

// === TAMPILKAN BERITA TERKINI ===
const beritaContainer = document.getElementById("beritaContainer");

if (beritaContainer) {
  fetch('data/berita.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${item.judul}</h3>
          <p><strong>Tanggal:</strong> ${item.tanggal}</p>
          <p>${item.isi}</p>
          <p><a href="${item.link}" target="_blank">Baca Selengkapnya</a></p>
          <hr>
        `;
        beritaContainer.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Gagal mengambil data berita:', error);
    });
}
