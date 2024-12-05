<script setup>
import NavItem from './NavItem.vue'

import { NAV_ITEMS } from '@/constans'
import { isPageValid } from '@/validators';

// import { ref } from 'vue'

// defineProps(['currentPage']);

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator:isPageValid
  },
})

// const emit = defineEmits(['navigate'])

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @:click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
      <!-- <li class="flex-1">
        <a class="flex flex-col items-center p-2 text-xs capitalize" href="#activities">
         <ListBulletIcon class="h-6 w-6"/> Activities
        </a>
      </li>
      <li class="flex-1">
        <a class="flex flex-col items-center p-2 text-xs capitalize" href="#progress">
         <ChartBarIcon class="h-6 w-6"/> Progress
        </a>
      </li> -->
    </ul>
  </nav>
</template>
