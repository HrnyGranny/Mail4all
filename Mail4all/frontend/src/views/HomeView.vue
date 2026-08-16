<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AppFooter from '@/components/Footer.vue'
import Home from '@/components/sections/Home.vue'
import Send from '@/components/sections/send/Send.vue'
import Receive from '@/components/sections/receive/Receive.vue'
import AboutUs from '@/components/sections/AboutUs.vue'

const MOBILE_BREAKPOINT = 768

const isMobile = ref(window.innerWidth < MOBILE_BREAKPOINT)
const sidebarExpanded = ref(!isMobile.value)
const selectedSection = ref('home')

const sectionViews = {
  home: Home,
  send: Send,
  receive: Receive,
  about: AboutUs,
}

const currentView = computed(() => {
  return sectionViews[selectedSection.value] || Home
})

const toggleSidebar = () => {
  sidebarExpanded.value = !sidebarExpanded.value
}

const handleSectionChange = (view) => {
  if (!Object.prototype.hasOwnProperty.call(sectionViews, view)) {
    return
  }

  selectedSection.value = view

  if (isMobile.value) {
    requestAnimationFrame(() => {
      document.querySelector('.main-content')?.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }
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
      @select-view="handleSectionChange"
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
          <Transition
            name="section"
            mode="out-in"
          >
            <component
              :is="currentView"
              :key="selectedSection"
              @select-view="handleSectionChange"
            />
          </Transition>
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

/* =========================================================
   SIDEBAR OVERLAY
   ========================================================= */

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

/* =========================================================
   SECTION TRANSITION
   ========================================================= */

.section-enter-active,
.section-leave-active {
  transition:
    opacity var(--transition-normal),
    transform var(--transition-normal);
}

.section-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.995);
}

.section-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.995);
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 767.98px) {
  .main-content,
  .main-content.sidebar-expanded,
  .main-content.sidebar-collapsed {
    width: 100%;
    height: 100%;

    margin-left: 0;
    padding-top: var(--navbar-height);

    display: block;

    overflow-x: hidden;
    overflow-y: auto;

    overscroll-behavior-y: contain;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .content-wrapper {
    width: 100%;
    min-width: 0;
    min-height: calc(100dvh - var(--navbar-height));
    flex: 0 0 auto;

    padding: 12px;

    display: flex;
    flex-direction: column;

    overflow: visible;
  }

  .content-area {
    width: 100%;
    height: auto;
    min-width: 0;
    min-height: calc(100dvh - var(--navbar-height) - 24px);
    flex: 1 0 auto;

    display: flex;
    flex-direction: column;

    overflow: visible;
  }

  .section-enter-from {
    opacity: 0;
    transform: translateX(10px);
  }

  .section-leave-to {
    opacity: 0;
    transform: translateX(-6px);
  }
}
</style>