<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>数组方法</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div class="text item">compact</div>
    </el-card>
  </div>
</template>
<script setup>
import _ from 'lodash';
import { onMounted } from 'vue';


</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
