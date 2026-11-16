window.HELP_IMPROVE_VIDEOJS = false;

// Copy BibTeX to clipboard
function copyBibTeX() {
  const bibtexElement = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
  const copyText = button ? button.querySelector('.copy-text') : null;

  if (bibtexElement && button && copyText) {
    navigator.clipboard.writeText(bibtexElement.textContent).then(function () {
      button.classList.add('copied');
      copyText.textContent = 'Cop';
      setTimeout(function () {
        button.classList.remove('copied');
        copyText.textContent = 'Copy';
      }, 2000);
    }).catch(function () {
      const textArea = document.createElement('textarea');
      textArea.value = bibtexElement.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      button.classList.add('copied');
      copyText.textContent = 'Cop';
      setTimeout(function () {
        button.classList.remove('copied');
        copyText.textContent = 'Copy';
      }, 2000);
    });
  }
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (!scrollButton) return;
  if (window.pageYOffset > 300) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
}, { passive: true });

// Dataset switcher for ME-LVQA Tables V-VIII
function switchLvqaDataset(targetKey, btnEl) {
  const buttons = document.querySelectorAll('.dataset-tab-btn');
  const panels = document.querySelectorAll('.lvqa-tab-panel');

  buttons.forEach(function (b) {
    b.classList.toggle('active', b === btnEl);
  });

  panels.forEach(function (p) {
    if (targetKey === 'all') {
      p.classList.add('active');
    } else {
      p.classList.toggle('active', p.dataset.dataset === targetKey);
    }
  });
}

// Click-to-zoom lightbox & TOC initialization
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('img-lightbox');
  const lightboxImg = document.getElementById('img-lightbox-target');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.paper-figure img, .teaser-card img, .zoomable-img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Zoomed figure';
        lightbox.classList.add('open');
      });
    });

    lightbox.addEventListener('click', function () {
      lightbox.classList.remove('open');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        lightbox.classList.remove('open');
      }
    });
  }
});
