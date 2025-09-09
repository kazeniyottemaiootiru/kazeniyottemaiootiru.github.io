document.addEventListener('DOMContentLoaded', function() {
  Prism.highlightAll();

  // 给所有代码块添加 MacOS 窗口外壳
  document.querySelectorAll('pre[class*="language-"]').forEach(pre => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';
    
    const header = document.createElement('div');
    header.className = 'code-header';
    
    const dots = document.createElement('div');
    dots.className = 'dots';
    ['red','yellow','green'].forEach(color => {
      const dot = document.createElement('span');
      dot.className = 'dot ' + color;
      dots.appendChild(dot);
    });
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerText = '复制';
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(pre.innerText);
      copyBtn.innerText = '已复制';
      setTimeout(()=>copyBtn.innerText='复制',1000);
    };

    header.appendChild(dots);
    header.appendChild(copyBtn);
    
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(header);
    wrapper.appendChild(pre);
    pre.classList.add('line-numbers'); // 确保行号
  });
});