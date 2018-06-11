<template>
  <div class="message-box">
    <div class="message-main">
      <header>
        <div class="title">{{title}}</div>
        <div class="close" @click="handleCancel">X</div>
      </header>
      <div class="content">
        {{content}}
      </div>
      <footer>
        <div 
          v-if="cancel_text !== ''"
          @click="handleCancel"
        >{{cancel_text}}</div>
        <div @click="handleConfirm">{{confirm_text}}</div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped>
  .message-box {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .message-main {
      position: absolute;
      left: 50%;
      top: 20%;
      background-color: #fff;
      padding: 10px;
      min-width: 300px;
      transform: translateX(-50%);
  }
  .message-main header {
      display: flex;
      justify-content: space-between;
  }
  .message-main header .close {
      cursor: pointer;
  }
  .message-main footer {
      display: flex;
      justify-content: flex-end;
  }
  .message-main footer > div {
      cursor: pointer;
      padding: 5px 10px;
      margin-left: 10px;
      border: 1px solid #000;
  }
  .message-main .content {
      padding: 20px 0;
  }
</style>
