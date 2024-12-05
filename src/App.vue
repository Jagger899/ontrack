<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import { ref } from 'vue'


import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constans'
import { normalizePageHash, generateTimelineItems, generateActivitySelectOptions, generateActivities,id } from './functions'

// import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const currentPage = ref(normalizePageHash())

// const navItems = {
//   [PAGE_TIMELINE]: ClockIcon,
//   [PAGE_ACTIVITIES]: ListBulletIcon,
//   [PAGE_PROGRESS]: ChartBarIcon,
// }
const timelineItems = generateTimelineItems();

const activities = ref(generateActivities())


function goTo(page) {
  currentPage.value = page;
}

const activitySelectOptions = generateActivitySelectOptions(activities.value)

console.log(currentPage.value);


function createActivity(name) {
  activities.value.push({
    id: id(),
    name,
    secondsToComplete:0
  })
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity),1)
}
</script>

<template>
  <!-- <TheHeader
    @go-to-timeline="goTo(PAGE_TIMELINE)"
    @go-to-progress="goTo(PAGE_PROGRESS)"
  /> -->

  <TheHeader @navigate="goTo($event)"/>


  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
      />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<style scoped></style>
