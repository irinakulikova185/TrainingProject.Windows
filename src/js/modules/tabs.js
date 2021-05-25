const tabs = function(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
        content.forEach(item => {
            item.style.display = 'none';
        })
    } 
    
    function showTabContent(i = 0) {
        tab[i].classList.add(activeClass);
        content[i].style.display = display;
    }
    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target && (target.parentNode.classList.contains(tabSelector.replace(/\./,'').replace(/ > a/, ''))) || target.classList.contains(tabSelector.replace(/\./,'').replace(/ > a/, ''))) {
            tab.forEach((item, i) => {
                if(item == target || item.firstElementChild == target) {
                    hideTabContent();
                    showTabContent(i)
                }
            })
        }
    })

    hideTabContent();
    showTabContent();


}

export default tabs;