<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constans';
import { isActivityValid, isUndefined } from '@/validators';
import { TrashIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator:isActivityValid
  },
})



const secondsToComplete = ref(null);

const emit = defineEmits({
  delete:isUndefined
})
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>

      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="h:mm"
        :selected="secondsToComplete"
        :options="PERIOD_SELECT_OPTIONS"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>
