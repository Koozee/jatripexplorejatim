import ListTermsIcon from "@/components/UI/ListTermsIcon";

const terms = [
    "Reservasi mobil harus dilakukan secara tertulis dan pembayaran harus dilakukan sebelum waktu peminjaman yang ditentukan.",
    "Pembatalan reservasi harus dilakukan dalam waktu yang ditentukan dan dapat dikenakan biaya pembatalan.",
    "Penyewa harus memiliki usia minimum 21 tahun dan izin mengemudi yang sah dan berlaku.",
    "Mobil harus dikembalikan dalam kondisi yang sama dengan saat penyerahan, kecuali adanya kerusakan karena penggunaan normal.",
    "Penyewa bertanggung jawab atas kerusakan atau kehilangan yang terjadi pada mobil, kecuali jika dilindungi oleh asuransi.",
    "Mobil hanya boleh digunakan untuk keperluan pribadi atau non-komersial dan tidak boleh digunakan untuk tujuan ilegal.",
    "Perjanjian penyewaan dapat memerlukan persetujuan tambahan terkait dengan kondisi khusus.",
];

export default function TermList() {
    return (
        <ul className="py-5">
            {terms.map((term, index) => (
                <li key={index} className="py-1 flex gap-3">
                    <ListTermsIcon />
                    <p>{term}</p>
                </li>
            ))}
        </ul>
    )
}