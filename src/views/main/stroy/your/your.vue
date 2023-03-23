<template>
  <div class="your">
    <h2>测试使用svg绘制</h2>
    <div>
      <svg class="svg-content">
        <!-- 绘制图形 -->
        <rect width="100" height="100" y="20" x="20" style="fill:blue;stroke:pink;stroke-width:5;
    fill-opacity:0.1;stroke-opacity:0.9"></rect>
    <rect width="100" height="100" y="140" x="20" fill="blue" stroke="red" stroke-width="5" 
    opacity="0.5" ry="20" rx="20"></rect>
    <circle cx="70" cy="310" r="50" fill="red" stroke="black" opacity="0.3" stroke-width="5"></circle>
      <!-- 绘制线条 -->
      <line x1="5" y1="5" x2="220" y2="5" stroke="red" stroke-width="2"></line>
      <!-- 绘制多边形，需要三组以上的坐标 -->
      <polygon points="200,30 250,100, 160,200" fill="pink" stroke="blue" stroke-width="2"></polygon>
      <!-- 绘制多线条 -->
      <polyline points="210,20 220,40 300,30 310,40" stroke="black" stroke-width="3" fill="none"></polyline>
      <!-- 绘制文本 里面支持使用tspan标签 -->
      <text x="350" y="20" >svg 初体验</text>
      <!-- 绘制 大写是绝对定位，小写是相对定位-->
      <!-- M为绘制的起点坐标 L用于绘制直线 -->
      <path d="M550 0 L675 200 L425 200"></path>
      <!-- g标签用于包裹定义公共的属性 -->
    </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.svg-content {
  width: 100%;
  height: 700px;
  background-color: aliceblue;
}
</style>
