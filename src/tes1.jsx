import React from "react";

const siswa = ["mart", "setepen", "sinaga", "jhon", "doe"];

const TampilSiswa = () => {
  return (
    <div>
      <h2>Daftar Siswa:</h2>
      <ul>
        {siswa.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default TampilSiswa;
