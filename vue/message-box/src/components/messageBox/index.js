import Vue from 'vue'
import messageBoxComponent from './messageBox'

const messageBoxConstructor = Vue.extend(messageBoxComponent)

const defaultData = {
  title:'提示',
  content:'内容',
  cancel_text:''
}

function showMessageBox(options){
  return new Promise((resolve,reject)=>{
    const messageBox = new messageBoxConstructor({
      el:document.createElement('div'),
      data(){
        return {
          ...defaultData,
          ...options,
          handleConfirm(){
            document.body.removeChild(messageBox.$el)
            resolve('confirm')
          },
          handleCancel(){
            document.body.removeChild(messageBox.$el)
            reject('cancel')
          }
        }
      }
    })
    document.body.appendChild(messageBox.$el)
  })
}

export default {
  install(){
    Vue.prototype.$message = showMessageBox
  }
}