const fs = require('fs');

let siswa = [
      {
            nama : "lily",
            kelas : "web",
            nilai : [78,92,87]
      },
];

fs.writeFileSync("siswa.json", JSON.stringify(siswa, null, 2));
console.log("Data siswa berhasil ke file siswa json");
