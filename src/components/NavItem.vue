<script>
export default {
    inheritAttrs:false
  }
</script>

<template>
  <li  class="flex-1">
    <a :="$attrs" class="flex flex-col items-center p-2 text-xs capitalize">


      <!-- <ClockIcon v-if="page==='timeline'" class="h-6 w-6"/>
         <ListBulletIcon v-else-if="page==='activities'" class="h-6 w-6"/>
         <ChartBarIcon v-else class="h-6 w-6"/> {{page}} -->
      <slot></slot>

    </a>
  </li>
</template>
