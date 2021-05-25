import calcScroll from './calcScroll';

const images = () => {
    const imagesGroup = document.querySelector('.works'),
          popup_image = document.createElement('div'),
          bigImage = document.createElement('img'),
          scroll = calcScroll();

    popup_image.style.cssText = `
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.5);`
    popup_image.style.display = 'none';
    popup_image.classList.add('faded')
    imagesGroup.append(popup_image);
    popup_image.append(bigImage);
    bigImage.style.maxWidth = '80%';
    bigImage.style.maxHeight = '80%';        
    imagesGroup.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if(target && target.classList.contains('preview')) {
            popup_image.style.display = 'flex'  
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            const path = target.parentNode.getAttribute('href')
            bigImage.setAttribute('src', path)
        }

        if(target && target.tagName === 'DIV') {
            popup_image.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px'
        }
    }) 
    
   
        
   
}

export default images;