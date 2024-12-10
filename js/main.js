document.addEventListener('DOMContentLoaded', function() {
    // 定义资源数据
    const resources = [
        {
            title: "我们是机器人",
            url: "wmsjqr.html",
            keywords: ["机器人", "我们", "wmsjqr"]
        },
        {
            title: "画线格斗",
            url: "hxgd.html",
            keywords: ["画线", "格斗", "hxgd"]
        },
        {
            title: "刺客",
            url: "ck.html",
            keywords: ["刺客", "ck"]
        },
        {
            title: "末世僵尸战场",
            url: "msjszc.html",
            keywords: ["末世", "僵尸", "战场", "msjszc"]
        }
    ];

    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    const resourceGrid = document.querySelector('.resource-grid');
    
    // 保存原始HTML以便恢复
    const originalGrid = resourceGrid.innerHTML;

    function performSearch(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        
        // 过滤资源
        const results = resources.filter(resource => {
            return resource.title.toLowerCase().includes(searchTerm) ||
                   resource.keywords.some(keyword => 
                       keyword.toLowerCase().includes(searchTerm)
                   );
        });

        // 更新显示
        updateResults(results);
    }

    function updateResults(results) {
        if (results.length === 0) {
            resourceGrid.innerHTML = `
                <div class="no-results">
                    <p>未找到相关资源</p>
                </div>
            `;
            return;
        }

        // 直接在原始grid中更新内容
        resourceGrid.innerHTML = results.map(resource => {
            // 完全复制原始HTML结构
            return `
                <a href="${resource.url}" class="resource-card">
                    <img src="images/${resource.url.replace('.html', '')}.${resource.url.includes('ck') || resource.url.includes('msjszc') ? 'png' : 'jpg'}" 
                         alt="${resource.title}">
                    <h3>${resource.title}</h3>
                </a>
            `;
        }).join('');
    }

    // 点击搜索按钮
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            performSearch(searchTerm);
        }
    });

    // 回车搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                performSearch(searchTerm);
            }
        }
    });

    // 清空搜索框时恢复原始内容
    searchInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            resourceGrid.innerHTML = originalGrid;
        }
    });
}); 