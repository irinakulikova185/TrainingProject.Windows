import chechNumInputs from './chechNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          checkbox = document.querySelectorAll('.checkbox'),
          modals = document.querySelectorAll('.close_by_time'),
          select = document.querySelector('#view_type');

    chechNumInputs('input[name="user_phone"]');
    const message = {
        loading: 'Загрузка...',
        sucsess: 'Спасибо! В ближайшее время мы свяжемся с Вами!',
        failure: 'Что-то пошло не так...Повторите попытку позднее'
    }  
    
    const postData = async(url, data) => {
        // document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text()
    }

    const clearInputs = () => {
        input.forEach(item => {
            item.value = ''
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);

            let formData = new FormData(item);
            if(item.getAttribute('data-calc') == 'end') {
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.sucsess;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    Object.keys(state).forEach( key => delete state[key]);
                    checkbox.forEach(item => {
                        item.checked = false
                    })
                    select.value = ''
                    setTimeout(function() {
                        clearInputs();
                        modals.forEach(modal => {
                            modal.style.display = 'none';
                            document.body.style.overflow = ''
                            document.body.style.marginRight = '0px'
                        })
                        statusMessage.remove();
                    }, 3000)
                    
                })
        })
    })
}

export default forms;