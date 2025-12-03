document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------
   * 修复 Hexo 生成的错误 class
   * language-language-xxx → language-xxx
   * --------------------------- */
  document.querySelectorAll('pre, code').forEach(el => {
    el.className = el.className.replace(/language-language-/g, 'language-');
  });

  /* ---------------------------
   * 修复 Prism 行号被错误插入到 <code> 内的问题
   * 应该插入到 <pre> 内
   * --------------------------- */
  document.querySelectorAll('pre.line-numbers code').forEach(code => {
    const parentPre = code.parentElement;

    // 找出 line-numbers-rows 错误插入的位置
    const rows = code.querySelector('.line-numbers-rows');
    if (rows) {
      code.removeChild(rows);      // 从 code 中移除
      parentPre.appendChild(rows); // 移回 pre 内
    }
  });

  /* ---------------------------
   * 重新执行 Prism（安全、不会重复破坏结构）
   * --------------------------- */
  Prism.highlightAll();

});
