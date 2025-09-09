document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre, code').forEach(el => {
    el.className = el.className.replace(/language-language-/g, 'language-');
  });
  Prism.highlightAll();
});
