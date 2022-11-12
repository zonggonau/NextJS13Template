import Price from "../../../components/price";

export default function Website() {
  const data = [
    {
      title: "Website Profile",
      desc: "Untuk: Perusahaan, Sekolah, Universitas, Rumah Sakit, Puskesmas, Klinik, Instansi Pemerintah, Sales Motor, Personal, Bisnis, Tour Travel, Sales Internet, dsb.",
      paket: [
        {
          title: "Basic",
          harga: "Rp. 1.000.000",
          desc: "Website Profile",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Standard",
          harga: "Rp. 2.000.000",
          desc: "Website Profile",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Premium",
          harga: "Rp. 3.000.000",
          desc: "Website Profile",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
      ],
    },
    {
      title: "Website Berita / Media Online",
      desc: "Untuk: Portal Berita dan Media Online",
      paket: [
        {
          title: "Basic",
          harga: "Rp. 1.000.000",
          desc: "Portal Berita/Media Online",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Standard",
          harga: "Rp. 2.000.000",
          desc: "Portal Berita/Media Online",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Premium",
          harga: "Rp. 3.000.000",
          desc: "Portal Berita/Media Online",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
      ],
    },
    // {
    //   title: "Website Toko Online",
    //   desc: "Untuk: Toko online jual Baju, Electronik dan Berbagai Barang",
    //   paket: [
    //     {
    //       title: "Basic",
    //       harga: "Rp. 1.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //     {
    //       title: "Standard",
    //       harga: "Rp. 2.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //     {
    //       title: "Premium",
    //       harga: "Rp. 3.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //   ],
    // },
    {
      title: "Website Iklan Baris",
      desc: "Untuk: Iklan Baris dan Iklan Premium Dimana Pengunjung Dapat Memasang Iklan di Web Anda",
      paket: [
        {
          title: "Basic",
          harga: "Rp. 1.000.000",
          desc: "Website Iklan Baris",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Standard",
          harga: "Rp. 2.000.000",
          desc: "Website Iklan Baris",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Premium",
          harga: "Rp. 3.000.000",
          desc: "Website Iklan Baris",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
      ],
    },
    {
      title: "Website E-Learning",
      desc: "Website ini berfungsi untuk media pembelajaran sekolah yang bisa digunkan untuk mengupload tugas, mengerjakan soal/tes/ujian dan mendownload materi pelajaran untuk media pembelajaran antara guru dan siswa",
      paket: [
        {
          title: "Basic",
          harga: "Rp. 1.000.000",
          desc: "Website E-Learning",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Standard",
          harga: "Rp. 2.000.000",
          desc: "Website E-Learning",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Premium",
          harga: "Rp. 3.000.000",
          desc: "Website E-Learning",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
      ],
    },
    // {
    //   title: "Website Sistem Informasi Akademik (SIA)",
    //   desc: "Web ini berfungsi untuk kampus/universitas yang bisa digunakan untuk KRS, KHS, Ambil Jadwal Kuliah, Cek Nilai, Cek Jadwal Kulia dan Ruangan",
    //   paket: [
    //     {
    //       title: "Basic",
    //       harga: "Rp. 1.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //     {
    //       title: "Standard",
    //       harga: "Rp. 2.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //     {
    //       title: "Premium",
    //       harga: "Rp. 3.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //   ],
    // },
    // {
    //   title: "Website Forum",
    //   desc: "Untuk: Website Forum diskusi semacam kaskus, forum komunikasi dan cocok untuk komunitas atau organisasi dimana setiap user bisa mendaftar dan memposting thread/artikel dan bisa saling mengomentari artikel/thread tersebut",
    //   paket: [
    //     {
    //       title: "Basic",
    //       harga: "Rp. 1.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //     {
    //       title: "Standard",
    //       harga: "Rp. 2.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //     {
    //       title: "Premium",
    //       harga: "Rp. 3.000.000",
    //       desc: "Website Profile",
    //       fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
    //     },
    //   ],
    // },
    {
      title: "Website Landingpage",
      desc: "Untuk: Website landingpage biasanya terdiri hanya 1 lembar tapi suda mencakup semua materi. Biasanya untuk jualan 1 macam produk saja, jadi cukup dijelaskan dalam 1 lembar halaman tapi sudah lengkap dan mencakup semua materi",
      paket: [
        {
          title: "Basic",
          harga: "Rp. 1.000.000",
          desc: "Website Landingpage",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Standard",
          harga: "Rp. 2.000.000",
          desc: "Website Landingpage",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
        {
          title: "Premium",
          harga: "Rp. 3.000.000",
          desc: "Website Landingpage",
          fitur: ["1 Domain", "1 Hosting", "1 Email", "1 Database"],
        },
      ],
    },
  ];

  return (
    <div>
      <Price data={data} />
    </div>
  );
}
