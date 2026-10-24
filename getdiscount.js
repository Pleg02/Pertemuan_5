function hitungdiskon(harga, persen) {
    return harga - (harga * persen / 100);
}
module.exports = hitungdiskon;