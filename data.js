document.addEventListener("DOMContentLoaded", function () {
  let pegawai = JSON.parse(localStorage.getItem("pegawai")) || [];
  const tbody = document.getElementById("tabelPegawai");

  pegawai.forEach((data) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${data.nama}</td>
            <td>${data.tgl}</td>
            <td>${data.alamat}</td>
            <td>${data.jabatan}</td>
            <td><a href="edit-pegawai.html" class="action-link">Edit</a></td>
        `;

    tbody.appendChild(tr);
  });
});
