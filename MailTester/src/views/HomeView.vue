<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AppFooter from '@/components/Footer.vue'
import Home from '@/components/sections/Home.vue'
import AboutUs from '@/components/sections/AboutUs.vue'

const MOBILE_BREAKPOINT = 768

const isMobile = ref(window.innerWidth < MOBILE_BREAKPOINT)
const sidebarExpanded = ref(!isMobile.value)
const selectedSection = ref('home')

const currentView = computed(() => {
  return selectedSection.value === 'about' ? AboutUs : Home
})

const toggleSidebar = () => {
  sidebarExpanded.value = !sidebarExpanded.value
}

const handleResize = () => {
  const mobile = window.innerWidth < MOBILE_BREAKPOINT
  const changedToMobile = !isMobile.value && mobile
  const changedToDesktop = isMobile.value && !mobile

  isMobile.value = mobile

  if (changedToMobile) {
    sidebarExpanded.value = false
  }

  if (changedToDesktop) {
    sidebarExpanded.value = true
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="dashboard-container">
    <Sidebar
      :is-expanded="sidebarExpanded"
      :selected-view="selectedSection"
      @toggle-sidebar="toggleSidebar"
      @select-view="selectedSection = $event"
    />

    <Transition name="overlay">
      <div
        v-if="isMobile && sidebarExpanded"
        class="sidebar-overlay"
        aria-hidden="true"
        @click="toggleSidebar"
      ></div>
    </Transition>

    <div
      class="main-content"
      :class="{
        'sidebar-expanded': sidebarExpanded,
        'sidebar-collapsed': !sidebarExpanded,
      }"
    >
      <Navbar
        title="MailTester"
        @toggle-sidebar="toggleSidebar"
      />

      <main class="content-wrapper container-fluid">
        <div class="content-area">
          <component :is="currentView" />
        </div>
      </main>

      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  position: relative;

  width: 100%;
  height: 100vh;
  height: 100dvh;

  display: flex;

  background-color: var(--color-paper);

  overflow: hidden;
}

.main-content {
  flex: 1;
  min-width: 0;
  height: 100%;

  margin-left: calc(var(--sidebar-collapsed-width) + 16px);

  display: flex;
  flex-direction: column;

  background-color: var(--color-paper);

  overflow: hidden;

  transition: margin-left var(--transition-normal);
}

.main-content.sidebar-expanded {
  margin-left: calc(var(--sidebar-width) + 16px);
}

.main-content.sidebar-collapsed {
  margin-left: calc(var(--sidebar-collapsed-width) + 16px);
}

.content-wrapper {
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 0;

  padding: 20px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
}

.content-area {
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  overflow: hidden;
}

.sidebar-overlay {
  position: fixed;
  inset: 0;
  z-index: 1005;

  background-color: rgba(var(--color-ink-rgb), 0.58);
  backdrop-filter: blur(2px);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity var(--transition-fast);
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

@media (max-width: 767.98px) {
  .main-content,
  .main-content.sidebar-expanded,
  .main-content.sidebar-collapsed {
    width: 100%;
    height: 100%;

    margin-left: 0;
    padding-top: var(--navbar-height);

    overflow: hidden;
  }

  .content-wrapper {
    flex: 1 1 auto;

    min-height: 0;
    padding: 12px;

    overflow: hidden;
  }

  .content-area {
    flex: 1 1 auto;

    width: 100%;
    height: 100%;
    min-height: 0;

    overflow: hidden;
  }
}
</style>
``