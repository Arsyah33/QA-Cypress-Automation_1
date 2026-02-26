# QA Cypress Automation Project

Halo! 
Ini adalah project latihan sekaligus portfolio saya dalam mempelajari **QA Automation menggunakan Cypress**.

Project ini dibuat untuk mensimulasikan bagaimana automation testing dilakukan di dunia kerja — bukan cuma menjalankan script, tapi juga menyusun struktur testing yang rapi, reusable, dan mudah di-maintain.

---

## Website yang Diuji

Automation dijalankan pada demo website berikut:

 https://demo.codenbox.com/

Website ini adalah **public demo site** yang memang disediakan untuk latihan testing dan memiliki fitur seperti:
- Login user
- Browse produk
- Add to cart
- Checkout process
- Interaksi UI (dropdown, table, dll.)

Jadi cocok untuk simulasi real-world testing scenario.

---

##  Tujuan Project

Project ini dibuat untuk:
- Belajar automation testing dengan Cypress
- Memahami struktur framework automation
- Menerapkan Page Object Model (POM)
- Mengurangi penulisan script yang berulang
- Mencoba berbagai tipe test case (UI interaction, data-driven, dll.)
- Generate report + screenshot + video hasil testing

---

## Tools & Tech yang Dipakai

- Cypress
- JavaScript (ES6)
- Node.js
- Mocha (test structure bawaan Cypress)
- Page Object Model (POM)
- HTML Report
- CSV Data Testing

---

## Struktur Project

cypress/
┣ e2e/ → Spec test utama
┣ fixtures/ → Data JSON
┣ support/ → Custom command & config
┣ PageObjects/
┃ ┣ pages/ → Class tiap halaman (LoginPage, HomePage, dll.)
┃ ┣ components/ → Reusable component (Navbar)
┃ ┗ BasePage.js → Method dasar yang dipakai ulang
┣ integration/examples/ → Kumpulan skenario testing
┣ reports/html/ → Hasil report automation
┣ screenshots/ → Screenshot saat test gagal
┗ videos/ → Rekaman test run


---

## Skenario yang Di-Automation

Beberapa test yang sudah dibuat di project ini:

- Login test  
- Dropdown & checkbox handling  
- File upload test  
- Table validation  
- Mouse hover  
- Multi window handling  
- Page scrolling  
- Assertion validation  
- End-to-End flow  
- Data-driven testing pakai CSV  
- Download file validation  

---

## Cara Menjalankan Project

Clone repo ini:
>git clone https://github.com/Arsyah33/QA-Cypress-Automation_1.git


Masuk ke folder project:


> cd QA-Cypress-Automation_1


Install dependency:


> npm install


Buka Cypress UI:


> npx cypress open


Atau run headless:


> npx cypress run


---

##  Hasil Testing

Setelah test dijalankan, report akan otomatis dibuat di:


cypress/reports/html/index.html


Di dalamnya ada:
- Summary hasil test
- Screenshot jika gagal
- Video recording test run

---

##  Data Testing

Project ini juga menggunakan data external dari:


Untuk simulasi **data-driven testing** seperti di environment real project

---

##  Yang Saya Pelajari dari Project Ini

Melalui project ini saya belajar:

- Menyusun automation framework dari awal
- Menggunakan Page Object Model supaya test lebih clean
- Membuat reusable function agar tidak duplicate code
- Handling berbagai tipe element di UI
- Mengelola test data external
- Generate reporting automation
- Struktur project QA seperti di industri

---

##  Next Improvement (Planned)

Ke depannya akan ditambahkan:
- CI/CD integration (GitHub Actions)
- Cross browser testing
- API testing integration
- Environment config (dev/staging)
- Custom reporting yang lebih advanced

---

##  Penutup

Project ini adalah bagian dari perjalanan saya belajar menjadi **QA Automation Engineer**.  
Masih terus dikembangkan seiring bertambahnya pengalaman.

Terima kasih
