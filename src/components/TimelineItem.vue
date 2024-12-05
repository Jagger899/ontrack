<script setup>
import { isTimeLineItemValid, validateSelectOptions } from '@/validators'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import TimelineHour from './TimelineHour.vue'

// const props = defineProps(['timelineItem']);

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator:validateSelectOptions
  },
})

// const options = [
//   { value: 1, label: 'Coding' },
//   { value: 2, label: 'Reading' },
//   { value: 3, label: 'Training' },
// ]

const selectActivityId = ref(0)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />

    <BaseSelect
      :selected="selectActivityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectActivityId = $event"
    />
  </li>
</template>
