# CobaAja Dashboard

Dashboard sederhana berbasis **Next.js** dan **React**, tanpa sistem login. Saat ini hanya memiliki satu menu: **Beranda**, dengan area konten yang masih kosong.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Perintah lainnya

```bash
npm run build   # build produksi
npm run start   # jalankan hasil build
npm run lint    # cek lint
```

## Struktur utama

- `src/app/layout.tsx` — layout akar dan metadata halaman
- `src/app/page.tsx` — halaman Beranda berisi sidebar/menu dan area konten
- `src/app/globals.css` — impor Tailwind CSS
