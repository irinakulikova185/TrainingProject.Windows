/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_changeModalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/changeModalState */ "./src/js/modules/changeModalState.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/images */ "./src/js/modules/images.js");








window.addEventListener('DOMContentLoaded', () => {
  let modalState = {};
  const deadline = '2021-12-12';
  Object(_modules_changeModalState__WEBPACK_IMPORTED_MODULE_3__["default"])(modalState);
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])(modalState);
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.glazing_slider', '.glazing_block > a', '.glazing_content', 'active');
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.decoration_slider', '.no_click > a', '.decoration_content > div > div', 'after_click');
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(modalState);
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_4__["default"])('.container1', deadline);
  Object(_modules_images__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/js/modules/calcScroll.js":
/*!**************************************!*\
  !*** ./src/js/modules/calcScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calcScroll = () => {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

/* harmony default export */ __webpack_exports__["default"] = (calcScroll);

/***/ }),

/***/ "./src/js/modules/changeModalState.js":
/*!********************************************!*\
  !*** ./src/js/modules/changeModalState.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chechNumInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chechNumInputs */ "./src/js/modules/chechNumInputs.js");


const changeModalState = state => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        width = document.querySelectorAll('#width'),
        height = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
  Object(_chechNumInputs__WEBPACK_IMPORTED_MODULE_0__["default"])('#width');
  Object(_chechNumInputs__WEBPACK_IMPORTED_MODULE_0__["default"])('#height');

  function transferPropToState(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i + 1;
            break;

          case 'SELECT':
            state[prop] = item.value;
            break;

          case 'INPUT':
            if (item.getAttribute('type') == 'checkbox') {
              i == 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elem.forEach((checkbox, j) => {
                checkbox.checked = false;

                if (j === i) {
                  checkbox.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }

            break;
        }

        console.log(state);
      });
    });
  }

  transferPropToState('click', windowForm, 'form');
  transferPropToState('input', width, 'width');
  transferPropToState('input', height, 'height');
  transferPropToState('change', windowType, 'type');
  transferPropToState('change', windowProfile, 'profile');
};

/* harmony default export */ __webpack_exports__["default"] = (changeModalState);

/***/ }),

/***/ "./src/js/modules/chechNumInputs.js":
/*!******************************************!*\
  !*** ./src/js/modules/chechNumInputs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const chechNumInputs = selector => {
  const numInputs = document.querySelectorAll(selector);
  numInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (chechNumInputs);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chechNumInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chechNumInputs */ "./src/js/modules/chechNumInputs.js");


const forms = state => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        checkbox = document.querySelectorAll('.checkbox'),
        modals = document.querySelectorAll('.close_by_time'),
        select = document.querySelector('#view_type');
  Object(_chechNumInputs__WEBPACK_IMPORTED_MODULE_0__["default"])('input[name="user_phone"]');
  const message = {
    loading: 'Загрузка...',
    sucsess: 'Спасибо! В ближайшее время мы свяжемся с Вами!',
    failure: 'Что-то пошло не так...Повторите попытку позднее'
  };

  const postData = async (url, data) => {
    // document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };

  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.append(statusMessage);
      let formData = new FormData(item);

      if (item.getAttribute('data-calc') == 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData).then(res => {
        console.log(res);
        statusMessage.textContent = message.sucsess;
      }).catch(() => {
        statusMessage.textContent = message.failure;
      }).finally(() => {
        Object.keys(state).forEach(key => delete state[key]);
        checkbox.forEach(item => {
          item.checked = false;
        });
        select.value = '';
        setTimeout(function () {
          clearInputs();
          modals.forEach(modal => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
          });
          statusMessage.remove();
        }, 3000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/images.js":
/*!**********************************!*\
  !*** ./src/js/modules/images.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll */ "./src/js/modules/calcScroll.js");


const images = () => {
  const imagesGroup = document.querySelector('.works'),
        popup_image = document.createElement('div'),
        bigImage = document.createElement('img'),
        scroll = Object(_calcScroll__WEBPACK_IMPORTED_MODULE_0__["default"])();
  popup_image.style.cssText = `
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.5);`;
  popup_image.style.display = 'none';
  popup_image.classList.add('faded');
  imagesGroup.append(popup_image);
  popup_image.append(bigImage);
  bigImage.style.maxWidth = '80%';
  bigImage.style.maxHeight = '80%';
  imagesGroup.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains('preview')) {
      popup_image.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (target && target.tagName === 'DIV') {
      popup_image.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll */ "./src/js/modules/calcScroll.js");


const modals = state => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, checkInputsFill = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = Object(_calcScroll__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const needToChoose = {
      formSize: 'Выберите форму и размер окна',
      typeProfile: 'Выберите тип и профиль окна'
    };

    const openModal = () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`; // clearInterval(modalTimerId);
    };

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();

          if (checkInputsFill == true) {
            let needToChosseMessage = document.createElement('div');
            needToChosseMessage.classList.add('status');
            item.after(needToChosseMessage);

            if (!(state.form && state.height && state.width)) {
              needToChosseMessage.textContent = needToChoose.formSize;
              setTimeout(function () {
                needToChosseMessage.remove();
              }, 2000);
            } else if (item.classList.contains('popup_calc_profile_button') && !(state.type && state.profile)) {
              console.log(item);
              needToChosseMessage.textContent = needToChoose.typeProfile;
              setTimeout(function () {
                needToChosseMessage.remove();
              }, 2000);
            } else {
              openModal();
            }
          } else {
            openModal();
          }
        }
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
    });
    modal.addEventListener('click', e => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      }
    });
  } // const modalTimerId = setTimeout(function() {
  //     const modal = document.querySelector('.popup');
  //     modal.style.display = 'block';
  //     document.body.style.overflow = 'hidden'
  // }, 10000)


  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, true);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, true);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tabs = function (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
    content.forEach(item => {
      item.style.display = 'none';
    });
  }

  function showTabContent(i = 0) {
    tab[i].classList.add(activeClass);
    content[i].style.display = display;
  }

  header.addEventListener('click', e => {
    const target = e.target;

    if (target && target.parentNode.classList.contains(tabSelector.replace(/\./, '').replace(/ > a/, '')) || target.classList.contains(tabSelector.replace(/\./, '').replace(/ > a/, ''))) {
      tab.forEach((item, i) => {
        if (item == target || item.firstElementChild == target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  hideTabContent();
  showTabContent();
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const timer = (selector, deadline) => {
  const addZero = num => {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  const getTimeRemaining = endtime => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / 1000 / 60 / 60 % 24),
          days = Math.floor(t / 1000 / 60 / 60 / 24);
    return {
      total: t,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days
    };
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
          seconds = timer.querySelector('#seconds'),
          minutes = timer.querySelector('#minutes'),
          hours = timer.querySelector('#hours'),
          days = timer.querySelector('#days'),
          timeInterval = setInterval(updateTimer, 1000);
    updateTimer();

    function updateTimer() {
      const t = getTimeRemaining(endtime);
      seconds.textContent = addZero(t.seconds);
      minutes.textContent = addZero(t.minutes);
      hours.textContent = addZero(t.hours);
      days.textContent = addZero(t.days);

      if (t.total <= 0) {
        seconds.textContent = '00';
        minutes.textContent = '00';
        hours.textContent = '00';
        days.textContent = '00';
        clearInterval(timeInterval);
      }
    }
  };

  setClock(selector, deadline);
};

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map