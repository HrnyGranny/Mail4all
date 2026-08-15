<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Dashboard',
  },
})

const emit = defineEmits(['toggle-sidebar', 'theme-change'])

const isDarkTheme = ref(false)

const applyTheme = () => {
  const theme = isDarkTheme.value ? 'dark' : 'light'

  document.documentElement.dataset.theme = theme
  localStorage.setItem('mailtester-theme', theme)

  emit('theme-change', theme)
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  applyTheme()
}

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('mailtester-theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    isDarkTheme.value = savedTheme === 'dark'
  } else {
    isDarkTheme.value = false
  }

  applyTheme()
}

onMounted(() => {
  initializeTheme()
})
</script>

<template>
  <header class="bc-navbar">
    <div class="container-fluid h-100 px-3 px-md-4">
      <div class="bc-navbar__inner">
        <!-- Sidebar toggle -->
        <button
          type="button"
          class="bc-navbar__icon-button bc-navbar__sidebar-toggle me-3"
          aria-label="Open or close sidebar"
          @click="emit('toggle-sidebar')"
        >
          <span
            class="material-symbols-rounded is-bold"
            aria-hidden="true"
          >
            menu
          </span>
        </button>

        <!-- Right actions -->
        <div class="bc-navbar__actions">
          <!-- Theme switch -->
          <label
            class="bc-switch"
            title="Change color theme"
          >
            <input
              class="bc-switch__input"
              type="checkbox"
              :checked="isDarkTheme"
              aria-label="Enable dark theme"
              @change="toggleTheme"
            />

            <span
              class="bc-switch__track"
              aria-hidden="true"
            >
              <span
                class="bc-switch__icon bc-switch__icon--sun material-symbols-rounded"
              >
                light_mode
              </span>

              <span
                class="bc-switch__icon bc-switch__icon--moon material-symbols-rounded"
              >
                dark_mode
              </span>

              <span class="bc-switch__thumb"></span>
            </span>
          </label>

          <!-- Notifications -->
          <div class="dropdown">
            <button
              type="button"
              class="bc-navbar__icon-button position-relative"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              aria-label="Open notifications"
            >
              <span
                class="material-symbols-rounded"
                aria-hidden="true"
              >
                notifications
              </span>

              <span class="bc-navbar__badge">
                3
              </span>
            </button>

            <div
              class="dropdown-menu dropdown-menu-end bc-dropdown bc-notifications"
            >
              <header class="bc-dropdown__header">
                <div class="bc-dropdown__heading">
                  <span class="bc-dropdown__eyebrow">
                    Live feed
                  </span>

                  <strong class="bc-dropdown__title">
                    Notifications
                  </strong>
                </div>

                <span class="bc-dropdown__counter">
                  03
                </span>
              </header>

              <div class="bc-dropdown__rule"></div>

              <div class="bc-dropdown__content">
                <button
                  type="button"
                  class="dropdown-item bc-notification"
                >
                  <span class="bc-notification__icon">
                    <span
                      class="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      mail
                    </span>
                  </span>

                  <span class="bc-notification__content">
                    <strong>New email received</strong>
                    <small>5 minutes ago</small>
                  </span>

                  <span
                    class="material-symbols-rounded bc-notification__arrow"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </button>

                <button
                  type="button"
                  class="dropdown-item bc-notification"
                >
                  <span
                    class="bc-notification__icon bc-notification__icon--orange"
                  >
                    <span
                      class="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      add
                    </span>
                  </span>

                  <span class="bc-notification__content">
                    <strong>New inbox created</strong>
                    <small>2 hours ago</small>
                  </span>

                  <span
                    class="material-symbols-rounded bc-notification__arrow"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </button>

                <button
                  type="button"
                  class="dropdown-item bc-notification"
                >
                  <span
                    class="bc-notification__icon bc-notification__icon--paper"
                  >
                    <span
                      class="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      schedule
                    </span>
                  </span>

                  <span class="bc-notification__content">
                    <strong>Inbox expires soon</strong>
                    <small>45 minutes remaining</small>
                  </span>

                  <span
                    class="material-symbols-rounded bc-notification__arrow"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </button>
              </div>

              <div class="bc-dropdown__rule"></div>

              <button
                type="button"
                class="bc-dropdown__action"
              >
                <span>View activity</span>

                <span
                  class="material-symbols-rounded"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.bc-navbar {
  position: relative;
  z-index: 1000;

  width: calc(100% - 32px);
  height: var(--navbar-height);
  flex: 0 0 var(--navbar-height);

  margin: 16px auto 0;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--color-ink);
  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-xs);

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    box-shadow var(--transition-normal);
}

.bc-navbar__inner {
  width: 100%;
  height: 100%;
  min-width: 0;

  display: flex;
  align-items: center;
}

.bc-navbar__actions {
  min-width: 0;
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 10px;
}

/* =========================================================
   ICON BUTTONS
   ========================================================= */

.bc-navbar__icon-button,
.bc-navbar__external-icon {
  --bc-accent-ink: #0e0e0c;
  --bc-accent-chartreuse: #d8ff3d;
  --bc-accent-tangerine: #ff5a1f;

  position: relative;

  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  /*
   * Fixed accent colors.
   * They do not depend on the active theme.
   */
  color: var(--bc-accent-ink);
  background-color: var(--bc-accent-chartreuse);

  border: var(--border-width) solid var(--bc-accent-ink);
  border-radius: 50%;

  text-decoration: none;

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.bc-navbar__icon-button:hover,
.bc-navbar__external-icon:hover {
  color: var(--bc-accent-chartreuse);
  background-color: var(--bc-accent-ink);

  transform: translateY(-2px);

  box-shadow: 3px 3px 0 var(--bc-accent-tangerine);
}

.bc-navbar__icon-button:active,
.bc-navbar__external-icon:active {
  transform: translateY(0);
  box-shadow: none;
}

.bc-navbar__icon-button .material-symbols-rounded,
.bc-navbar__external-icon .material-symbols-rounded {
  width: 22px;
  height: 22px;

  font-size: 22px;
}

/* =========================================================
   EXTERNAL SERVICE BUTTON
   ========================================================= */

.bc-navbar__external-wrapper {
  flex: 0 0 auto;
}

.bc-navbar__external-wrapper :deep(.bc-button) {
  /*
   * These variables use fixed colors instead of theme tokens.
   * Therefore the button never changes in dark mode.
   */
  --bc-button-bg: #d8ff3d;
  --bc-button-color: #0e0e0c;
  --bc-button-icon-bg: #0e0e0c;
  --bc-button-icon-color: #d8ff3d;

  width: auto;
  max-width: 190px;

  color: #0e0e0c;
  background-color: #d8ff3d;

  border-color: #0e0e0c;
}

.bc-navbar__external-wrapper :deep(.bc-button__label) {
  max-width: 120px;
}

.bc-navbar__external-wrapper :deep(.bc-button__icon) {
  color: #d8ff3d;
  background-color: #0e0e0c;
}

/* Fixed hover colors */

.bc-navbar__external-wrapper
  :deep(.bc-button:hover:not(.bc-button--disabled):not(.bc-button--loading)) {
  color: #d8ff3d;
  background-color: #0e0e0c;
  border-color: #0e0e0c;
}

.bc-navbar__external-wrapper
  :deep(.bc-button:hover:not(.bc-button--disabled):not(.bc-button--loading) .bc-button__icon) {
  color: #0e0e0c;
  background-color: #d8ff3d;
}

/* =========================================================
   PAGE TITLE
   ========================================================= */

.bc-navbar__title-group {
  min-width: 0;

  display: flex;
  flex-direction: column;
}

.bc-navbar__eyebrow,
.bc-dropdown__eyebrow {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.11em;
}

.bc-navbar__eyebrow {
  color: var(--color-graphite);

  font-size: 0.53rem;
  font-weight: 600;
  line-height: 1.2;
}

.bc-navbar__title {
  max-width: 260px;
  margin: 0;

  color: var(--color-ink);

  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.04em;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* =========================================================
   THEME SWITCH
   ========================================================= */

.bc-switch {
  position: relative;

  flex: 0 0 auto;

  display: inline-flex;
  align-items: center;

  cursor: pointer;
  user-select: none;
}

.bc-switch__input {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;

  opacity: 0;
  overflow: hidden;
}

.bc-switch__track {
  position: relative;

  width: 70px;
  height: 36px;
  padding: 0 8px;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-paper);

  border: var(--border-width) solid var(--color-ink);
  border-radius: var(--radius-pill);

  transition:
    background-color var(--transition-normal),
    border-color var(--transition-normal);
}

.bc-switch__icon {
  position: relative;
  z-index: 2;

  width: 16px;
  height: 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-ink);

  font-size: 16px;
  font-variation-settings:
    "FILL" 0,
    "wght" 500,
    "GRAD" 0,
    "opsz" 20;

  transition:
    color var(--transition-fast),
    opacity var(--transition-fast);
}

.bc-switch__icon--moon {
  opacity: 0.4;
}

.bc-switch__thumb {
  position: absolute;
  top: 50%;
  left: 3px;
  z-index: 1;

  width: 28px;
  height: 28px;

  background-color: #d8ff3d;

  border: var(--border-width) solid #0e0e0c;
  border-radius: 50%;

  transform: translateY(-50%);

  transition:
    left 260ms var(--ease-boldcase),
    background-color var(--transition-normal);
}

.bc-switch__input:checked + .bc-switch__track {
  background-color: #0e0e0c;
}

.bc-switch__input:checked + .bc-switch__track .bc-switch__thumb {
  left: 37px;
  background-color: #f2eee5;
}

.bc-switch__input:checked
  + .bc-switch__track
  .bc-switch__icon--sun {
  color: #f2eee5;
  opacity: 0.4;
}

.bc-switch__input:checked
  + .bc-switch__track
  .bc-switch__icon--moon {
  color: #f2eee5;
  opacity: 1;
}

.bc-switch__input:focus-visible + .bc-switch__track {
  outline: 2px solid #ff5a1f;
  outline-offset: 3px;
}

/* =========================================================
   NOTIFICATION BADGE
   ========================================================= */

.bc-navbar__badge {
  position: absolute;
  top: -4px;
  right: -3px;

  min-width: 18px;
  height: 18px;
  padding: 0 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #0e0e0c;
  background-color: #ff5a1f;

  border: 1px solid #0e0e0c;
  border-radius: var(--radius-pill);

  font-family: var(--font-mono);
  font-size: 0.57rem;
  font-weight: 700;
  line-height: 1;
}

/* =========================================================
   DROPDOWN
   ========================================================= */

.bc-dropdown {
  margin-top: 12px !important;
  padding: 0;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--color-ink);
  border-radius: var(--radius-lg);

  box-shadow: 6px 6px 0 var(--color-ink);

  overflow: hidden;
}

.bc-notifications {
  width: min(340px, calc(100vw - 24px));
}

.bc-dropdown__header {
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.bc-dropdown__heading {
  min-width: 0;

  display: flex;
  flex-direction: column;
}

.bc-dropdown__title {
  color: var(--color-ink);

  font-size: 0.9rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.bc-dropdown__eyebrow {
  color: var(--color-graphite);

  font-size: 0.52rem;
  font-weight: 600;
  line-height: 1.3;
}

.bc-dropdown__counter {
  padding: 4px 8px;

  color: #0e0e0c;
  background-color: #ff5a1f;

  border: 1px solid #0e0e0c;
  border-radius: var(--radius-pill);

  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 600;
}

.bc-dropdown__rule {
  width: 100%;
  height: 1px;

  background-color: var(--color-ink);
}

.bc-dropdown__content {
  display: flex;
  flex-direction: column;
}

/* =========================================================
   NOTIFICATIONS
   ========================================================= */

.bc-notification {
  width: 100%;
  min-width: 0;
  padding: 12px 16px;

  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--color-ink);
  background-color: transparent;

  border: none;

  white-space: normal;
}

.bc-notification:hover,
.bc-notification:focus,
.bc-notification:active {
  color: #0e0e0c;
  background-color: #d8ff3d;
}

.bc-notification__icon {
  width: 38px;
  height: 38px;
  flex: 0 0 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #0e0e0c;
  background-color: #d8ff3d;

  border: 1px solid #0e0e0c;
  border-radius: 12px;
}

.bc-notification__icon--orange {
  color: #0e0e0c;
  background-color: #ff5a1f;
}

.bc-notification__icon--paper {
  color: var(--color-ink);
  background-color: var(--color-paper);
  border-color: var(--color-ink);
}

.bc-notification__icon .material-symbols-rounded {
  width: 19px;
  height: 19px;

  font-size: 19px;
}

.bc-notification__content {
  min-width: 0;
  flex: 1;

  display: flex;
  flex-direction: column;

  text-align: left;
}

.bc-notification__content strong {
  color: inherit;

  font-size: 0.76rem;
  line-height: 1.35;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bc-notification__content small {
  color: var(--color-graphite);

  font-size: 0.66rem;
  line-height: 1.4;
}

.bc-notification:hover .bc-notification__content small,
.bc-notification:focus .bc-notification__content small {
  color: rgba(14, 14, 12, 0.72);
}

.bc-notification__arrow {
  width: 18px;
  height: 18px;
  flex: 0 0 18px;

  font-size: 18px;

  opacity: 0;

  transform: translateX(-5px);

  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast);
}

.bc-notification:hover .bc-notification__arrow,
.bc-notification:focus .bc-notification__arrow {
  opacity: 1;
  transform: translateX(0);
}

/* =========================================================
   DROPDOWN ACTION
   ========================================================= */

.bc-dropdown__action {
  width: 100%;
  padding: 12px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--color-ink);
  background-color: transparent;

  border: none;

  font-size: 0.75rem;
  font-weight: 700;

  cursor: pointer;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
}

.bc-dropdown__action:hover {
  color: #d8ff3d;
  background-color: #0e0e0c;
}

.bc-dropdown__action .material-symbols-rounded {
  width: 18px;
  height: 18px;

  font-size: 18px;

  transition: transform var(--transition-fast);
}

.bc-dropdown__action:hover .material-symbols-rounded {
  transform: translateX(4px);
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 991.98px) {
  .bc-navbar__actions {
    gap: 8px;
  }
}

@media (max-width: 767.98px) {
  .bc-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1020;

    width: 100%;
    margin: 0;

    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;

    box-shadow: none;
  }

  .bc-navbar__title {
    max-width: 140px;
  }

  .bc-dropdown {
    box-shadow: 4px 4px 0 var(--color-ink);
  }

  .bc-switch__track {
    width: 64px;
  }

  .bc-switch__input:checked + .bc-switch__track .bc-switch__thumb {
    left: 31px;
  }
}

@media (max-width: 575.98px) {
  .bc-navbar__actions {
    gap: 6px;
  }

  .bc-navbar__icon-button {
    width: 38px;
    height: 38px;
    flex-basis: 38px;
  }

  .bc-navbar__title {
    max-width: 125px;
    font-size: 1rem;
  }

  .bc-navbar__eyebrow {
    font-size: 0.48rem;
  }

  .bc-switch__track {
    width: 60px;
    height: 34px;
    padding: 0 7px;
  }

  .bc-switch__thumb {
    width: 26px;
    height: 26px;
  }

  .bc-switch__input:checked + .bc-switch__track .bc-switch__thumb {
    left: 29px;
  }
}

@media (max-width: 420px) {
  .bc-navbar__eyebrow {
    display: none;
  }

  .bc-navbar__title {
    max-width: 100px;
  }

  .bc-navbar__sidebar-toggle {
    margin-right: 8px !important;
  }
}

@media (max-width: 360px) {
  .bc-navbar__title-group {
    display: none;
  }
}
</style>