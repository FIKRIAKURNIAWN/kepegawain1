// Data pegawai default
const dataDefault = [
  // {
  //   nama: "Andi Pratama",
  //   tgl: "12 Maret 1990",
  //   alamat: "Jakarta",
  //   jabatan: "Manager IT",
  // },
  // {
  //   nama: "Siti Lestari",
  //   tgl: "7 Juni 1991",
  //   alamat: "Bandung",
  //   jabatan: "HRD",
  // },
  // {
  //   nama: "Dedi Firmansyah",
  //   tgl: "22 Oktober 1987",
  //   alamat: "Surabaya",
  //   jabatan: "Supervisor",
  // },
  // {
  //   nama: "Rina Wulandari",
  //   tgl: "4 Januari 1993",
  //   alamat: "Semarang",
  //   jabatan: "Akuntan",
  // },
  // {
  //   nama: "Budi Santoso",
  //   tgl: "15 Mei 1989",
  //   alamat: "Depok",
  //   jabatan: "Staff IT",
  // },
];

// Ambil lokal
const dataTambah = JSON.parse(localStorage.getItem("dataPegawai")) || [];
console.log(dataTambah);
// Gabungkan
const semuaData = [...dataDefault, ...dataTambah];

const tabel = document.getElementById("tabelPegawai");

tabel.innerHTML = ""; // pastikan tabel kosong

semuaData.forEach((p, index) => {
  tabel.innerHTML += `
    <tr>
      <td>${p.nama}</td>
      <td>${p.tgl}</td>
      <td>${p.alamat}</td>
      <td>${p.jabatan}</td>
      <td><a href="edit-pegawai.html?id=${index}" class="action-link">Edit</a></td>
    </tr>
  `;
});
