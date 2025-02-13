---
sidebar_position: 3
---

# Manajemen Pengguna

## 1. Pengenalan
Manajemen pengguna di Linux sangat penting untuk mengontrol akses, hak istimewa, dan keamanan sistem. Linux menggunakan file sistem tertentu untuk menyimpan informasi pengguna, seperti `/etc/passwd`, `/etc/shadow`, dan `/etc/group`.

## 2. Jenis Pengguna di Linux
### 2.1. Pengguna Root
Root adalah pengguna dengan hak istimewa tertinggi di sistem Linux, dapat melakukan apa saja termasuk mengedit file sistem, menginstal perangkat lunak, dan mengubah konfigurasi sistem.

### 2.2. Pengguna Biasa
Pengguna biasa memiliki hak terbatas dan hanya dapat mengakses file serta menjalankan perintah yang diizinkan oleh administrator.

### 2.3. Pengguna Sistem
Pengguna sistem adalah akun yang dibuat secara otomatis oleh sistem untuk menjalankan layanan tertentu, seperti `www-data` untuk server web atau `mysql` untuk database.

## 3. Menambahkan Pengguna

### `adduser`
`adduser` adalah perintah yang lebih interaktif dan user-friendly untuk menambahkan pengguna.
```bash
sudo adduser nama_pengguna
```
Perintah ini akan meminta informasi tambahan seperti password, nama lengkap, dan informasi lainnya.

### `useradd`
`useradd` adalah perintah yang lebih minimalis dan tidak secara otomatis membuat direktori home pengguna kecuali dengan opsi `-m`.
```bash
sudo useradd -m nama_pengguna
```

#### Opsi tambahan pada `useradd`:
- `-m` : Membuat direktori home pengguna.
- `-d /path/home` : Menentukan direktori home pengguna.
- `-s /bin/bash` : Menentukan shell default pengguna.
- `-u UID` : Menentukan UID khusus untuk pengguna.
- `-g GID` : Menentukan grup utama pengguna.
- `-G grup1,grup2` : Menambahkan pengguna ke beberapa grup.

Untuk mengatur password setelahnya:
```bash
sudo passwd nama_pengguna
```

## 4. UID dan GID
- **UID (User ID):**
  - 0 : Root (superuser)
  - 1-999 : Pengguna sistem
  - 1000 ke atas : Pengguna biasa

- **GID (Group ID):**
  - Mirip dengan UID, tetapi untuk grup.
  - Grup root memiliki GID 0, sementara grup pengguna sistem biasanya memiliki GID di bawah 1000.

## 5. Menghapus Pengguna

### `deluser`
Untuk menghapus pengguna dan direktori home-nya:
```bash
sudo deluser --remove-home nama_pengguna
```

### `userdel`
Untuk menghapus pengguna tanpa menghapus direktori home:
```bash
sudo userdel nama_pengguna
```
Jika ingin menghapus pengguna beserta direktori home:
```bash
sudo userdel -r nama_pengguna
```

## 6. Mengubah Password
Mengubah password pengguna:
```bash
sudo passwd nama_pengguna
```
Untuk mengunci akun pengguna:
```bash
sudo passwd -l nama_pengguna
```
Untuk membuka kembali akun yang terkunci:
```bash
sudo passwd -u nama_pengguna
```

## 7. Manajemen Grup
Setiap pengguna di Linux terkait dengan satu atau lebih grup.

### Menambahkan Grup
```bash
sudo groupadd nama_grup
```

### Menambahkan Pengguna ke Grup
```bash
sudo usermod -aG nama_grup nama_pengguna
```

### Menghapus Pengguna dari Grup
```bash
sudo gpasswd -d nama_pengguna nama_grup
```

### Menghapus Grup
```bash
sudo groupdel nama_grup
```

## 8. File Konfigurasi Terkait Pengguna

### `/etc/passwd`
File ini menyimpan informasi dasar pengguna.
Format umum:
```
nama_pengguna:x:UID:GID:deskripsi:direktori_home:shell
```
- `x` menunjukkan bahwa password disimpan di `/etc/shadow`
- `UID` adalah User ID
- `GID` adalah Group ID
- `deskripsi` adalah informasi pengguna (opsional)
- `direktori_home` adalah lokasi home pengguna
- `shell` adalah shell default pengguna

### `/etc/shadow`
File ini menyimpan password pengguna dalam bentuk terenkripsi.
Format umum:
```
nama_pengguna:hashed_password:last_change:min:max:warn:inactive:expire
```
- `hashed_password`: Password yang telah dienkripsi
- `last_change`: Hari terakhir password diubah
- `min`: Minimal hari sebelum password bisa diubah
- `max`: Maksimal hari sebelum password harus diubah
- `warn`: Hari sebelum peringatan perubahan password diberikan
- `inactive`: Hari setelah masa tenggang berakhir sebelum akun dinonaktifkan
- `expire`: Hari akun akan kedaluwarsa

### `/etc/group`
File ini menyimpan informasi grup.
Format umum:
```
nama_grup:x:GID:anggota1,anggota2
```
- `x` menunjukkan bahwa password grup tidak digunakan
- `GID` adalah Group ID
- `anggota1, anggota2` adalah pengguna dalam grup

## 9. Grup Umum di Linux
- **root (GID 0)** : Grup superuser.
- **adm** : Memiliki akses ke log sistem.
- **sudo** : Grup untuk pengguna yang dapat menjalankan perintah sebagai root.
- **www-data** : Digunakan oleh server web seperti Apache dan Nginx.
- **nogroup** : Grup default untuk proses yang tidak memiliki grup khusus.
- **users** : Grup umum untuk pengguna biasa.

## 10. Mengecek Informasi Pengguna

### Mengecek Pengguna Saat Ini
```bash
echo $USER
```

### Mengecek Detail Pengguna
```bash
id nama_pengguna
```

### Mengecek Grup Pengguna
```bash
groups nama_pengguna
```

### Melihat Informasi dalam `/etc/passwd`
```bash
getent passwd nama_pengguna
```

### Melihat Informasi dalam `/etc/group`
```bash
getent group nama_grup
```

## 11. Menonaktifkan dan Menghapus Akun
Untuk menonaktifkan akun tanpa menghapusnya:
```bash
sudo usermod -L nama_pengguna
```

Untuk menghapus akun dan semua datanya:
```bash
sudo userdel -r nama_pengguna
```

## 12. Kesimpulan
Manajemen pengguna di Linux melibatkan berbagai perintah dan file sistem. Memahami konsep ini sangat penting untuk mengelola hak akses dan menjaga keamanan sistem.
