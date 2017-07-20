<template>
  <div class="layout">

  </div>
</template>

<script>
  import {
    MessageBox
  } from 'mint-ui';
  import Api from '@/common/api';

  export default {
    name: 'app',
    components: {},
    mounted(){
      MessageBox('提示', '操作成功');
      console.log(Api.getList());
    }
  }

</script>

<style lang="scss">
  @import './assets/css/base.scss';
  .layout {
    width:100%;
  }

</style>
