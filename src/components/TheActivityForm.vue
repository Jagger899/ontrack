<script setup>
import BaseButton from '@/components/BaseButton.vue';
import { nextTick, ref } from 'vue';

import { isActivityValid } from '@/validators';
import { PlusIcon } from '@heroicons/vue/24/outline';

const activity = ref('');

const emit = defineEmits({
  submit:isActivityValid,

})

function submit() {
  emit('submit', activity.value);

  activity.value = '';

  nextTick().then(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })


}
</script>


<!-- :value="activity"
      @input="activity = $event.target.value"    ===   v-model="activity" -->


<template>
  <form
    @submit.prevent="submit"
      class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
    >
      <input
        type="text"
        class="w-full rounded border px-4 text-xl outline-none"
        placeholder="Activity name"
        v-model="activity"
      >
      <BaseButton :disabled="activity.trim() === ''">
        <PlusIcon class="h-8"/>
      </BaseButton>
    </form>
</template>
