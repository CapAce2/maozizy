function getRandomPass() {
    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    // 创建悬浮窗
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>获取卡密</h3>
            <p>请加入QQ群获取卡密：</p>
            <p class="qq-group">626789791</p>
            <button class="close-btn">关闭</button>
        </div>
    `;
    
    // 添加到页面
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    // 关闭函数
    function closeModal() {
        overlay.classList.add('fade-out');
        modal.classList.add('fade-out');
        
        // 等待动画完成后移除元素
        setTimeout(() => {
            document.body.removeChild(overlay);
            document.body.removeChild(modal);
        }, 300); // 与动画时长相同
    }
    
    // 添加关闭按钮事件
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeModal);
    
    // 点击遮罩层也可以关闭
    overlay.addEventListener('click', closeModal);
} 