// ========== DROPDOWN DIVISI → JABATAN ==========
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("divisi").addEventListener("change", updateJabatan);

  function updateJabatan() {
    const divisi = document.getElementById("divisi").value;
    const jabatan = document.getElementById("jabatan");

    jabatan.innerHTML = '<option value="">-- Pilih Jabatan --</option>';

    const dataJabatan = {
      it: ["Manager IT", "Staff IT", "Teknisi IT"],
      keuangan: ["Manager Keuangan", "Staff Keuangan", "Akuntan"],
      pemasaran: ["Manager Pemasaran", "Staff Pemasaran", "Sales"],
    };

    if (divisi && dataJabatan[divisi]) {
      dataJabatan[divisi].forEach((item) => {
        let opt = document.createElement("option");
        opt.text = item;
        opt.value = item;
        jabatan.add(opt);
      });
    }
  }

  // ========== SIMPAN DATA KE LOCALSTORAGE ==========
  document
    .getElementById("formPegawai")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const tgl = document.getElementById("tgl").value;
      const alamat = document.getElementById("alamat").value;
      const jabatan = document.getElementById("jabatan").value;

      if (!nama || !tgl || !alamat || !jabatan) {
        alert("Data belum lengkap!");
        return;
      }

      const pegawaiBaru = { nama, tgl, alamat, jabatan };

      let data = JSON.parse(localStorage.getItem("dataPegawai")) || [];
      data.push(pegawaiBaru);

      localStorage.setItem("dataPegawai", JSON.stringify(data));

      alert("Data berhasil disimpan!");
      window.location.href = "tabeldatapegawai.html";
    });
});
