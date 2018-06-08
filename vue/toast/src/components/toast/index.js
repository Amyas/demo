import Vue from 'vue'

import toastComponent from './toast'

const ToastConstructor = Vue.extend(toastComponent)

function showToast(text,duration = 2000){
  const toastDom = new ToastConstructor({
    el:document.createElement('div'),
    data(){
      return {
        text,
        showWrap:true,
        showContent:true
      }
    }
  })

  document.body.appendChild(toastDom.$el)

  setTimeout(() => {
    toastDom.showContent = false
  }, duration-1250);

  setTimeout(() => {
    toastDom.showWrap = false
  }, duration);
}

export default {
  install(){
    Vue.prototype.$toast = showToast
  }
}