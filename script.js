// function toggleInputs() {
//     const calculationType = document.getElementById('calculationType').value;
//     const gradientInputs = document.getElementById('gradientInputs');
//     const uniformInputs = document.getElementById('uniformInputs');
//     const percentageInputs = document.getElementById('percentageInputs');

//     // Menampilkan atau menyembunyikan input berdasarkan pilihan pengguna
//     if (calculationType === 'gradient') {
//         gradientInputs.style.display = 'block';
//         uniformInputs.style.display = 'none';
//         percentageInputs.style.display = 'none';
//     } else if (calculationType === 'uniform') {
//         uniformInputs.style.display = 'block';
//         gradientInputs.style.display = 'none';
//         percentageInputs.style.display = 'none';
//     } else {
//         gradientInputs.style.display = 'none';
//         uniformInputs.style.display = 'none';
//         percentageInputs.style.display = 'none';
//     }
// }

// function calculateGradient() {
//     const A = parseFloat(document.getElementById('A').value);
//     const G = parseFloat(document.getElementById('G').value);
//     const i = parseFloat(document.getElementById('i').value) / 100; // Konversi persen ke desimal
//     const percentageGoal = parseFloat(document.getElementById('percentageGoal').value) / 100; // Persentase tujuan

//     // Menghitung nilai sekarang dari deret gradien aritmetika
//     const presentValue = (A / i).toFixed(2);
//     const futureValue = (A * ((1 + i) / i)).toFixed(2);
    
//     // Menghitung total berdasarkan persentase tujuan
//     const targetValue = (futureValue * percentageGoal).toFixed(2);

//     document.getElementById('gradientResult').innerText = 
//         `Nilai Sekarang: ${presentValue} (Rp)\n` +
//         `Nilai Masa Depan: ${futureValue} (Rp)\n` +
//         `Nilai Berdasarkan Persentase Tujuan: ${targetValue} (Rp)`;
// }

// function calculateUniform() {
//     const A = parseFloat(document.getElementById('AUniform').value);
//     const N = parseFloat(document.getElementById('NUniform').value);
//     const i = parseFloat(document.getElementById('iUniform').value) / 100; // Konversi persen ke desimal
//     const percentageGoal = parseFloat(document.getElementById('percentageUniform').value) / 100; // Persentase tujuan

//     // Menghitung nilai sekarang dari deret pembayaran uniform
//     const presentValue = (A * (1 - Math.pow((1 + i), -N)) / i).toFixed(2);
//     const futureValue = (A * ((Math.pow((1 + i), N) - 1) / i)).toFixed(2);
    
//     // Menghitung total berdasarkan persentase tujuan
//     const targetValue = (futureValue * percentageGoal).toFixed(2);

//     document.getElementById('uniformResult').innerText = 
//         `Nilai Sekarang: ${presentValue} (Rp)\n` +
//         `Nilai Masa Depan: ${futureValue} (Rp)\n` +
//         `Nilai Berdasarkan Persentase Tujuan: ${targetValue} (Rp)`;
// }

// function calculatePercentage() {
//     const totalValue = parseFloat(document.getElementById('totalValue').value);
//     const percentage = parseFloat(document.getElementById('percentage').value) / 100; // Konversi persen ke desimal

//     // Menghitung nilai berdasarkan persentase
//     const result = (totalValue * percentage).toFixed(2);
    
//     document.getElementById('percentageResult').innerText = 
//         `Nilai ${percentage * 100}% dari ${totalValue} (Rp) adalah: ${result} (Rp)`;
// }
