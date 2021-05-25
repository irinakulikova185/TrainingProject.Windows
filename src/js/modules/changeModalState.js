
import chechNumInputs from './chechNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          width = document.querySelectorAll('#width'),
          height = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');
    chechNumInputs('#width');
    chechNumInputs('#height');

    function transferPropToState (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                  switch (item.nodeName) {
                      case 'SPAN' :
                          state[prop] = i + 1;
                          break
                      
                      case 'SELECT' :
                          state[prop] = item.value;
                          break
                      
                      case 'INPUT' :
                          if(item.getAttribute('type') == 'checkbox') {
                              i == 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                              elem.forEach((checkbox,j) =>  {
                                  checkbox.checked = false;
                                  if(j === i) {
                                    checkbox.checked = true;
                                  }
                              })
                          } else {
                            state[prop] = item.value;
                          }
                          break
                  }
                  console.log(state)
                  
            })
        })
    }

     transferPropToState('click', windowForm, 'form');
     transferPropToState('input', width, 'width');
     transferPropToState('input', height, 'height'); 
     transferPropToState('change', windowType, 'type');
     transferPropToState('change', windowProfile, 'profile');     


}

export default changeModalState;