# 🎨 Creative Media Student Portfolio

เว็บไซต์ Portfolio ส่วนตัวสำหรับนักศึกษาสาขาสื่อนฤมิต (Creative Media) ออกแบบในสไตล์ Modern, Creative, Premium, Glassmorphism ด้วยธีมสี **ฟ้า - เหลือง (Blue & Yellow)** รองรับการแสดงผลแบบ Responsive เต็มรูปแบบบนทุกอุปกรณ์

---

## ✨ จุดเด่นและคุณสมบัติ (Key Features)

- 📱 **Responsive Web Design:** แสดงผลสวยงามบนสมาร์ตโฟน แท็บเล็ต และคอมพิวเตอร์
- 📑 **Multi-Page Navigation:** แยกหน้าตามเมนู Navigation ชัดเจน
  - `index.html`: หน้าแรก (Home & Hero Section)
  - `about.html`: ข้อมูลประวัติ การศึกษา และเป้าหมาย (About Me)
  - `skills.html`: ทักษะความเชี่ยวชาญ 10 ด้าน (Skills)
  - `portfolio.html`: แฟ้มสะสมผลงาน 6 ชิ้น พร้อม Modal ดูรายละเอียด (Portfolio)
  - `contact.html`: ข้อมูลโซเชียลมีเดียและแบบฟอร์มส่งข้อความ (Contact)
- 🌓 **Dark / Light Mode:** สลับโหมดกลางวัน-กลางคืน พร้อมระบบจดจำค่าผ่าน `localStorage`
- 💎 **Glassmorphism & Gradient:** บัตรการ์ดและปุ่มกดโปร่งแสง หรูหราทันสมัย
- ⚡ **Animations & Transitions:**
  - Preloader ตอนโหลดหน้าเว็บ
  - Floating Animated Gradient Blobs
  - Scroll Reveal แอนิเมชันเมื่อเลื่อนจอ
  - ปุ่ม Scroll to Top
- 🖼️ **SVG Vector Assets:** รูปภาพเวกเตอร์คมชัดทุกความละเอียดหน้าจอ โหลดเร็ว ไม่ต้องพึ่งพาเซิร์ฟเวอร์ภายนอก

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework:** [Bootstrap 5.3.3](https://getbootstrap.com/)
- **Typography:** [Google Fonts](https://fonts.google.com/) (Plus Jakarta Sans & Prompt)
- **Icons:** [Font Awesome 6.6.0](https://fontawesome.com/)

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
webportfolio/
├── index.html              # หน้าแรก (Home)
├── about.html              # หน้าเกี่ยวกับฉัน (About)
├── skills.html             # หน้าทักษะความสามารถ (Skills)
├── portfolio.html          # หน้าผลงาน (Portfolio)
├── contact.html            # หน้าติดต่อ (Contact)
├── index.php               # ไฟล์สำหรับรันบน Apache/XAMPP
├── README.md               # คู่มือโปรเจกต์
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css       # สไตล์หลัก Dark/Light, Grid, Glassmorphism
│   ├── js/
│   │   └── main.js         # ควบคุม Interactions, Modal, Theme, Navigation
│   └── images/             # ภาพเวกเตอร์ SVG สำหรับโปรไฟล์และผลงาน
│       ├── profile-placeholder.svg
│       ├── work-1.svg ถึง work-6.svg
└── sections/               # ไฟล์ Component แยกย่อย
```

---

## 🌐 วิธีเปิดใช้งานเว็บไซต์บน GitHub Pages (Online)

หลังจาก Push โค้ดขึ้น GitHub แล้ว คุณสามารถเปิดให้เว็บไซต์ออนไลน์ได้ฟรีทันที:
1. ไปที่ Repository ของคุณบน GitHub
2. คลิกแท็บ **Settings** > เมนูด้านซ้ายเลือก **Pages**
3. ที่หัวข้อ **Build and deployment**:
   - Source: เลือก **Deploy from a branch**
   - Branch: เลือก **main** (หรือ `master`) และโฟลเดอร์ **/ (root)**
4. คลิก **Save**
5. รอประมาณ 1-2 นาที คุณจะได้ URL เว็บไซต์ เช่น:  
   `https://<your-username>.github.io/<repository-name>/`
