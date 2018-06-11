<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  async mounted(){
    await this.$message({
      title:'这是标题',
      content:'这是内容',
      cancel_text:'取消文本',
      confirm_text:'确定文本'
    })
    .then(_=>{
      console.log('ok')
    })
    .catch(_=>{
      console.error('fail')
    })
    console.log(1)
  }
}
</script>
