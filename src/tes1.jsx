import React from "react";

const siswa = ["mart", "setepen", "sinaga", "jhon", "doe"];
const angka = [1, 2, 3];
const TampilSiswa = () => {
  const kali = angka.map((n) => n * 2);
  console.log(kali);
  return (
    <div>
      {/* <h2>Daftar Siswa:</h2>
      <ul>
        {siswa.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default TampilSiswa;
