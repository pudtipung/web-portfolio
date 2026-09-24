<?php
/**
 * PORTFOLIO WEBSITE - CREATIVE MEDIA STUDENT
 * Modular Landing Page (PHP Template)
 */
?>
<!DOCTYPE html>
<html lang="th" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio ส่วนตัวสำหรับนักศึกษาสาขาสื่อนฤมิต (Creative Media) - Modern, Creative & Responsive Portfolio">
  <title>Creative Media Portfolio | แฟ้มสะสมผลงานสื่อนฤมิต</title>

  <!-- Google Fonts: Plus Jakarta Sans & Prompt -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Prompt:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Bootstrap 5 CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Font Awesome 6 CDN Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

  <!-- Custom CSS Stylesheet -->
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

  <!-- Preloader -->
  <div id="preloader">
    <div class="preloader-spinner"></div>
    <div class="preloader-text">Creative Media Studio</div>
  </div>

  <!-- 1. Navigation Bar (แยกไฟล์) -->
  <?php include 'sections/navbar.html'; ?>

  <!-- 2. Hero Section (แยกไฟล์) -->
  <?php include 'sections/home.html'; ?>

  <!-- 3. About Me Section (แยกไฟล์) -->
  <?php include 'sections/about.html'; ?>

  <!-- 4. Skills Section (แยกไฟล์) -->
  <?php include 'sections/skills.html'; ?>

  <!-- 5. Portfolio Section (แยกไฟล์) -->
  <?php include 'sections/portfolio.html'; ?>

  <!-- 6. Contact Section (แยกไฟล์) -->
  <?php include 'sections/contact.html'; ?>

  <!-- 7. Footer (แยกไฟล์) -->
  <?php include 'sections/footer.html'; ?>

  <!-- Scroll to Top Button -->
  <button id="scrollTopBtn" class="scroll-top-btn" type="button" aria-label="Scroll to top" title="เลื่อนกลับด้านบน">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

  <!-- Portfolio Detail Modal -->
  <div class="modal fade" id="portfolioModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center gap-2">
            <span id="modalCategory" class="badge rounded-pill bg-primary px-3 py-2">Category</span>
            <span class="text-muted small">&bull; ปี <span id="modalYear">2026</span></span>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="rounded-4 overflow-hidden mb-4 shadow-sm">
            <img id="modalImage" src="" alt="Project Preview" class="w-100">
          </div>
          <h3 id="modalTitle" class="fw-bold mb-3">Project Title</h3>
          <p id="modalDesc" class="text-muted leading-relaxed mb-4">Project Description</p>
          <div class="p-3 rounded-3 bg-body-tertiary border">
            <div class="fw-bold small text-uppercase text-muted mb-1"><i class="fa-solid fa-screwdriver-wrench me-1"></i> เครื่องมือที่ใช้:</div>
            <div id="modalTools" class="fw-semibold text-primary">Tools</div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary rounded-pill px-4" data-bs-dismiss="modal">ปิดหน้าต่าง</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap 5 JavaScript Bundle CDN -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

  <!-- Custom JavaScript File -->
  <script src="assets/js/main.js"></script>
</body>
</html>
