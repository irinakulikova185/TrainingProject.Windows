import calcScroll from './calcScroll';

const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, checkInputsFill = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();
        
        const needToChoose = {
            formSize: 'Выберите форму и размер окна',
            typeProfile: 'Выберите тип и профиль окна'
        }
        
        const openModal = () => {
            windows.forEach(item => {
                item.style.display = 'none'
            })
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'
            document.body.style.marginRight = `${scroll}px`
            // clearInterval(modalTimerId);
        }
       
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                    if(checkInputsFill == true) {
                        let needToChosseMessage = document.createElement('div');
                            needToChosseMessage.classList.add('status');
                            item.after(needToChosseMessage);
                        if(!(state.form && state.height && state.width)) {
                            needToChosseMessage.textContent = needToChoose.formSize
                            setTimeout(function(){
                                needToChosseMessage.remove()
                            }, 2000)    
                        } else if(item.classList.contains('popup_calc_profile_button') && (!(state.type && state.profile))) {
                            console.log(item)
                            needToChosseMessage.textContent = needToChoose.typeProfile
                            setTimeout(function(){
                                needToChosseMessage.remove()
                            }, 2000) 
                        }
                        else {
                            openModal();
                        }
                    }
                    else {
                        openModal();
                    }
                }
                 
                
            })
        })
        
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none'
            })
            modal.style.display = 'none';
            document.body.style.overflow = ''
            document.body.style.marginRight = '0px'
        })

        modal.addEventListener('click', (e) => {
         
            if(e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none'
                })
                modal.style.display = 'none';
                document.body.style.overflow = ''
                document.body.style.marginRight = '0px'
            }   
        })

    }

    // const modalTimerId = setTimeout(function() {
    //     const modal = document.querySelector('.popup');
    //     modal.style.display = 'block';
    //     document.body.style.overflow = 'hidden'
    // }, 10000)

   

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, true);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, true)
    
    
}

export default modals;
