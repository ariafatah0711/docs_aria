"use strict";(self.webpackChunkdocs_aria=self.webpackChunkdocs_aria||[]).push([[8695],{278:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"introduction/instalasi-linux","title":"Instalasi Linux","description":"Linux dapat diinstal di berbagai lingkungan, termasuk bare metal (langsung ke hardware), virtual machine (VM), dan Windows Subsystem for Linux (WSL). Berikut adalah panduan lengkap untuk masing-masing metode.","source":"@site/docs/01-introduction/instalasi-linux.md","sourceDirName":"01-introduction","slug":"/introduction/instalasi-linux","permalink":"/linux_docs/docs/introduction/instalasi-linux","draft":false,"unlisted":false,"editUrl":"https://github.com/ariafatah0711/linux_docs/tree/main/docs/docs/01-introduction/instalasi-linux.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"default","previous":{"title":"Pengantar Tutorial Linux","permalink":"/linux_docs/docs/introduction/pengenalan-linux"},"next":{"title":"Distribusi Linux","permalink":"/linux_docs/docs/introduction/distribusi-linux"}}');var e=s(4848),l=s(8453);const r={sidebar_position:2},t="Instalasi Linux",d={},u=[{value:"1. Instalasi Linux di Bare Metal",id:"1-instalasi-linux-di-bare-metal",level:2},{value:"1.1 Persiapan Instalasi",id:"11-persiapan-instalasi",level:3},{value:"1.2 Proses Instalasi",id:"12-proses-instalasi",level:3},{value:"2. Instalasi Linux di Virtual Machine (VM)",id:"2-instalasi-linux-di-virtual-machine-vm",level:2},{value:"2.1 Persiapan",id:"21-persiapan",level:3},{value:"2.2 Pembuatan Mesin Virtual dengan VirtualBox",id:"22-pembuatan-mesin-virtual-dengan-virtualbox",level:3},{value:"3. Instalasi Linux di Windows Subsystem for Linux (WSL)",id:"3-instalasi-linux-di-windows-subsystem-for-linux-wsl",level:2},{value:"3.1 Mengaktifkan WSL",id:"31-mengaktifkan-wsl",level:3},{value:"3.2 Mengelola WSL",id:"32-mengelola-wsl",level:3},{value:"Kesimpulan",id:"kesimpulan",level:2}];function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.header,{children:(0,e.jsx)(i.h1,{id:"instalasi-linux",children:"Instalasi Linux"})}),"\n",(0,e.jsxs)(i.p,{children:["Linux dapat diinstal di berbagai lingkungan, termasuk ",(0,e.jsx)(i.strong,{children:"bare metal"})," (langsung ke hardware), ",(0,e.jsx)(i.strong,{children:"virtual machine (VM)"}),", dan ",(0,e.jsx)(i.strong,{children:"Windows Subsystem for Linux (WSL)"}),". Berikut adalah panduan lengkap untuk masing-masing metode."]}),"\n",(0,e.jsx)(i.hr,{}),"\n",(0,e.jsx)(i.h2,{id:"1-instalasi-linux-di-bare-metal",children:"1. Instalasi Linux di Bare Metal"}),"\n",(0,e.jsxs)(i.p,{children:["Instalasi ",(0,e.jsx)(i.strong,{children:"bare metal"})," berarti menginstal Linux langsung ke perangkat keras tanpa perantara seperti VM atau sistem operasi lain."]}),"\n",(0,e.jsx)(i.h3,{id:"11-persiapan-instalasi",children:"1.1 Persiapan Instalasi"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Unduh ISO Linux"}),": Kunjungi situs resmi distro yang diinginkan, misalnya:","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Ubuntu: ",(0,e.jsx)(i.a,{href:"https://ubuntu.com/download",children:"https://ubuntu.com/download"})]}),"\n",(0,e.jsxs)(i.li,{children:["Debian: ",(0,e.jsx)(i.a,{href:"https://www.debian.org/download",children:"https://www.debian.org/download"})]}),"\n",(0,e.jsxs)(i.li,{children:["Arch Linux: ",(0,e.jsx)(i.a,{href:"https://archlinux.org/download",children:"https://archlinux.org/download"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Buat Bootable USB"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Windows: Gunakan ",(0,e.jsx)(i.a,{href:"https://rufus.ie/",children:"Rufus"})]}),"\n",(0,e.jsxs)(i.li,{children:["Linux: Gunakan ",(0,e.jsx)(i.code,{children:"dd"})," atau ",(0,e.jsx)(i.code,{children:"balenaEtcher"})]}),"\n",(0,e.jsxs)(i.li,{children:["macOS: Gunakan ",(0,e.jsx)(i.code,{children:"dd"})," atau ",(0,e.jsx)(i.code,{children:"Etcher"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Persiapkan Partisi (Opsional)"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Jika ingin dual-boot dengan Windows, siapkan partisi kosong melalui ",(0,e.jsx)(i.strong,{children:"Disk Management"})," di Windows."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"12-proses-instalasi",children:"1.2 Proses Instalasi"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Boot dari USB"}),": Masuk ke BIOS/UEFI dan ubah boot order agar USB menjadi prioritas pertama."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Jalankan Installer"}),": Pilih opsi ",(0,e.jsx)(i.strong,{children:"Install Linux"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Pilih Bahasa dan Zona Waktu"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Partisi Disk"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Otomatis"}),": Biarkan sistem membuat partisi sendiri."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Manual"}),": Buat partisi seperti berikut:","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"/boot"})," (512MB)"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"/"})," (20GB atau lebih)"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"swap"})," (sesuai kebutuhan, biasanya 2x RAM)"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"/home"})," (sisanya)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Buat User dan Password"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Tunggu Instalasi Selesai"}),", lalu reboot."]}),"\n"]}),"\n",(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Referensi tambahan"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://ubuntu.com/tutorials/install-ubuntu-desktop",children:"Panduan Instalasi Ubuntu"})}),"\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://wiki.archlinux.org/title/installation_guide",children:"Instalasi Arch Linux (Lengkap)"})}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.hr,{}),"\n",(0,e.jsx)(i.h2,{id:"2-instalasi-linux-di-virtual-machine-vm",children:"2. Instalasi Linux di Virtual Machine (VM)"}),"\n",(0,e.jsxs)(i.p,{children:["Jika tidak ingin menginstal langsung di perangkat keras, Linux dapat dijalankan di VM menggunakan ",(0,e.jsx)(i.strong,{children:"VirtualBox"}),", ",(0,e.jsx)(i.strong,{children:"VMware"}),", atau ",(0,e.jsx)(i.strong,{children:"QEMU/KVM"}),". Berikut panduan lengkap untuk pembuatan dan konfigurasi VM menggunakan VirtualBox sebagai contoh."]}),"\n",(0,e.jsx)(i.h3,{id:"21-persiapan",children:"2.1 Persiapan"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Download VirtualBox"}),": ",(0,e.jsx)(i.a,{href:"https://www.virtualbox.org/",children:"https://www.virtualbox.org/"})]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Download VMware Workstation Player"})," (opsional): ",(0,e.jsx)(i.a,{href:"https://www.vmware.com/products/workstation-player.html",children:"https://www.vmware.com/products/workstation-player.html"})]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Unduh ISO Linux"})," dari situs resmi distro yang diinginkan."]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"22-pembuatan-mesin-virtual-dengan-virtualbox",children:"2.2 Pembuatan Mesin Virtual dengan VirtualBox"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Buka VirtualBox"})," dan klik tombol ",(0,e.jsx)(i.strong,{children:"New"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Beri Nama VM dan Pilih Tipe OS"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:'Beri nama VM (misalnya, "Ubuntu VM").'}),"\n",(0,e.jsxs)(i.li,{children:["Pilih ",(0,e.jsx)(i.strong,{children:"Type: Linux"})," dan ",(0,e.jsx)(i.strong,{children:"Version: Ubuntu (64-bit)"})," (atau sesuai distro yang dipilih)."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Atur Ukuran Memori"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Direkomendasikan minimal 2048 MB (2GB) untuk penggunaan dasar, 4096 MB (4GB) atau lebih untuk performa yang lebih baik."}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Buat Virtual Hard Disk"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Pilih ",(0,e.jsx)(i.strong,{children:"VDI (VirtualBox Disk Image)"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:["Pilih ",(0,e.jsx)(i.strong,{children:"Dynamically Allocated"})," agar ukuran disk dapat berkembang sesuai kebutuhan."]}),"\n",(0,e.jsx)(i.li,{children:"Tentukan ukuran disk minimal 20GB (disarankan lebih besar untuk penggunaan desktop)."}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Konfigurasi VM"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Setelah VM dibuat, klik ",(0,e.jsx)(i.strong,{children:"Settings"})," \u2192 ",(0,e.jsx)(i.strong,{children:"Storage"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:["Di bawah ",(0,e.jsx)(i.strong,{children:"Controller: IDE"}),", klik ",(0,e.jsx)(i.strong,{children:"Empty"}),". Klik ikon disk di sebelah kanan dan pilih ",(0,e.jsx)(i.strong,{children:"Choose a disk file..."})," untuk memilih file ISO Linux yang telah diunduh."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Atur Jaringan (Opsional)"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Di tab ",(0,e.jsx)(i.strong,{children:"Network"}),", pilih mode ",(0,e.jsx)(i.strong,{children:"NAT"})," untuk koneksi internet standar atau ",(0,e.jsx)(i.strong,{children:"Bridged Adapter"})," jika ingin VM berada di jaringan yang sama dengan host."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Mulai VM"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Klik ",(0,e.jsx)(i.strong,{children:"Start"})," untuk boot VM."]}),"\n",(0,e.jsx)(i.li,{children:"Ikuti wizard instalasi Linux yang muncul dalam VM."}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Pasang Guest Additions"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Setelah instalasi selesai dan sistem telah booting, di menu VirtualBox pilih ",(0,e.jsx)(i.strong,{children:"Devices > Insert Guest Additions CD image"}),"."]}),"\n",(0,e.jsx)(i.li,{children:"Ikuti instruksi untuk menginstal Guest Additions agar performa dan integrasi dengan host menjadi lebih baik."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Referensi tambahan"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://docs.oracle.com/en/virtualization/virtualbox/",children:"Panduan VirtualBox"})}),"\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://www.vmware.com/support.html",children:"Panduan VMware Workstation"})}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.hr,{}),"\n",(0,e.jsx)(i.h2,{id:"3-instalasi-linux-di-windows-subsystem-for-linux-wsl",children:"3. Instalasi Linux di Windows Subsystem for Linux (WSL)"}),"\n",(0,e.jsx)(i.p,{children:"WSL memungkinkan pengguna menjalankan Linux di dalam Windows tanpa perlu VM."}),"\n",(0,e.jsx)(i.h3,{id:"31-mengaktifkan-wsl",children:"3.1 Mengaktifkan WSL"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Aktifkan Fitur WSL dan Virtual Machine Platform"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Buka ",(0,e.jsx)(i.strong,{children:"Control Panel"})," \u2192 ",(0,e.jsx)(i.strong,{children:"Programs"})," \u2192 ",(0,e.jsx)(i.strong,{children:"Turn Windows features on or off"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:["Centang ",(0,e.jsx)(i.strong,{children:"Windows Subsystem for Linux"})," dan ",(0,e.jsx)(i.strong,{children:"Virtual Machine Platform"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:["Klik ",(0,e.jsx)(i.strong,{children:"OK"})," dan restart komputer Anda."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Instalasi Distro Linux melalui PowerShell"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Buka ",(0,e.jsx)(i.strong,{children:"PowerShell"})," sebagai Administrator."]}),"\n",(0,e.jsxs)(i.li,{children:["Jalankan perintah berikut untuk menginstal distro default (biasanya Ubuntu):","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-powershell",children:"wsl --install\n"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["Jika ingin menginstal distro lain, gunakan perintah:","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-powershell",children:"wsl --install -d <nama_distro>\n"})}),"\n","Contoh, untuk Debian:","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-powershell",children:"wsl --install -d Debian\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Restart Komputer"})," (jika belum dilakukan setelah mengaktifkan fitur)."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Set Up Distro Linux"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Buka aplikasi Linux (misalnya, Ubuntu) dari Start Menu."}),"\n",(0,e.jsx)(i.li,{children:"Ikuti wizard setup untuk membuat user dan password."}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Update & Upgrade"}),":","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["Buka terminal Linux dan jalankan:","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"32-mengelola-wsl",children:"3.2 Mengelola WSL"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Cek distro yang terinstal"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-powershell",children:"wsl --list --verbose\n"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Menghapus Distro"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-powershell",children:"wsl --unregister <nama_distro>\n"})}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Mengatur WSL2 sebagai default"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-powershell",children:"wsl --set-default-version 2\n"})}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Referensi tambahan"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"Dokumentasi Resmi WSL"})}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.hr,{}),"\n",(0,e.jsx)(i.h2,{id:"kesimpulan",children:"Kesimpulan"}),"\n",(0,e.jsx)(i.p,{children:"Anda sekarang memiliki beberapa metode untuk menginstal Linux:"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Bare Metal"})," untuk pengalaman penuh Linux."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Virtual Machine (VM)"})," untuk menjalankan Linux tanpa mengubah sistem utama."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"WSL"})," untuk menjalankan Linux di dalam Windows tanpa VM."]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"Sesuaikan pilihan Anda dengan kebutuhan dan eksplorasi lebih lanjut melalui referensi yang diberikan! \ud83d\ude80"})]})}function h(n={}){const{wrapper:i}={...(0,l.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(o,{...n})}):o(n)}},8453:(n,i,s)=>{s.d(i,{R:()=>r,x:()=>t});var a=s(6540);const e={},l=a.createContext(e);function r(n){const i=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function t(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:r(n.components),a.createElement(l.Provider,{value:i},n.children)}}}]);