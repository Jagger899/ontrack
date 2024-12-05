<script setup>

import { isActivityValid, validateActivities } from '@/validators';
import ActivityItem from '../components/ActivityItem.vue'

import TheActivityForm from '@/components/TheActivityForm.vue';
import TheActivityEmptyState from '@/components/TheActivityEmptyState.vue';

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  createActivity:isActivityValid,
  deleteActivity:isActivityValid,
})




</script>

<template>
  <div class="flex flex-col grow">
    <ul
      class="divide-y grow"
      v-if="activities.length > 0"
    >
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity',activity)"
      />
    </ul>

    <TheActivityEmptyState v-else/>

    <TheActivityForm @submit="emit('createActivity',$event)"/>
  </div>
</template>
