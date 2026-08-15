<script setup>
import brandLogo from '@/assets/img/MailTester_Logo.png'

const brandLogoSrc = brandLogo

defineProps({
  isExpanded: {
    type: Boolean,
    default: true,
  },
  selectedView: {
    type: String,
    default: 'home',
  },
})

const emit = defineEmits(['toggle-sidebar', 'donate', 'select-view'])

const handleNavigation = () => {
  if (window.innerWidth < 768) {
    emit('toggle-sidebar')
  }
}

const handleSectionChange = (view) => {
  emit('select-view', view)
  handleNavigation()
}

const handleDonate = () => {
  emit('donate')
}
</script>

<template>
  <aside
    class="bc-sidebar"
    :class="{
      'bc-sidebar--collapsed': !isExpanded,
      'bc-sidebar--expanded': isExpanded,
    }"
  >
    <!-- Brand -->
    <button
      type="button"
      class="bc-sidebar__brand"
      aria-label="Go to home"
      @click="handleSectionChange('home')"
    >
      <span
        class="bc-sidebar__logo"
        aria-hidden="true"
      >
        <img
          :src="brandLogoSrc"
          alt="Mail4all logo"
          class="bc-sidebar__logo-image"
        >
      </span>

      <div
        v-if="isExpanded"
        class="bc-sidebar__brand-text"
      >
        <span class="bc-sidebar__eyebrow">
          One monthly send.<br>
          Unlimited 7-day inboxes.
        </span>

        <span class="bc-sidebar__name">
          Mail4all
        </span>
      </div>
    </button>

    <!-- Main navigation -->
    <nav
      class="bc-sidebar__navigation"
      aria-label="Main navigation"
    >
      <span
        v-if="isExpanded"
        class="bc-sidebar__section-label"
      >
        Navigation
      </span>

      <ul class="bc-sidebar__menu">
        <!-- Home -->
        <li class="bc-sidebar__item">
          <button
            type="button"
            class="bc-sidebar__link"
            :class="{ 'bc-sidebar__link--active': selectedView === 'home' }"
            title="Home"
            aria-pressed="selectedView === 'home'"
            @click="handleSectionChange('home')"
          >
            <span
              class="bc-sidebar__icon material-symbols-rounded"
              aria-hidden="true"
            >
              home
            </span>

            <span
              v-if="isExpanded"
              class="bc-sidebar__link-text"
            >
              Home
            </span>

            <span
              v-if="isExpanded"
              class="bc-sidebar__link-index"
              aria-hidden="true"
            >
              01
            </span>
          </button>
        </li>

        <!-- Send -->
        <li class="bc-sidebar__item">
          <button
            type="button"
            class="bc-sidebar__link"
            :class="{ 'bc-sidebar__link--active': selectedView === 'send' }"
            title="Send"
            aria-pressed="selectedView === 'send'"
            @click="handleSectionChange('send')"
          >
            <span
              class="bc-sidebar__icon material-symbols-rounded"
              aria-hidden="true"
            >
              send
            </span>

            <span
              v-if="isExpanded"
              class="bc-sidebar__link-text"
            >
              Send
            </span>

            <span
              v-if="isExpanded"
              class="bc-sidebar__link-index"
              aria-hidden="true"
            >
              02
            </span>
          </button>
        </li>

        <!-- Receive -->
        <li class="bc-sidebar__item">
          <button
            type="button"
            class="bc-sidebar__link"
            :class="{ 'bc-sidebar__link--active': selectedView === 'receive' }"
            title="Receive"
            aria-pressed="selectedView === 'receive'"
            @click="handleSectionChange('receive')"
          >
            <span
              class="bc-sidebar__icon material-symbols-rounded"
              aria-hidden="true"
            >
              inbox
            </span>

            <span
              v-if="isExpanded"
              class="bc-sidebar__link-text"
            >
              Receive
            </span>

            <span
              v-if="isExpanded"
              class="bc-sidebar__link-index"
              aria-hidden="true"
            >
              03
            </span>
          </button>
        </li>

        <!-- About us -->
        <li class="bc-sidebar__item">
          <button
            type="button"
            class="bc-sidebar__link"
            :class="{ 'bc-sidebar__link--active': selectedView === 'about' }"
            title="About us"
            aria-pressed="selectedView === 'about'"
            @click="handleSectionChange('about')"
          >
            <span
              class="bc-sidebar__icon material-symbols-rounded"
              aria-hidden="true"
            >
              groups
            </span>

            <span
              v-if="isExpanded"
              class="bc-sidebar__link-text"
            >
              About us
            </span>

            <span
              v-if="isExpanded"
              class="bc-sidebar__link-index"
              aria-hidden="true"
            >
              04
            </span>
          </button>
        </li>
      </ul>
    </nav>

    <!-- Expanded support card -->
    <footer
      v-if="isExpanded"
      class="bc-sidebar__footer"
    >
      <section class="bc-sidebar__support">
        <div class="bc-sidebar__support-header">
          <span
            class="bc-sidebar__support-icon material-symbols-rounded"
            aria-hidden="true"
          >
            favorite
          </span>

          <div class="bc-sidebar__support-heading">
            <span class="bc-sidebar__support-label">
              Support me
            </span>

            <strong class="bc-sidebar__support-title">
              Keep Mail4all alive
            </strong>
          </div>
        </div>

        <p class="bc-sidebar__support-description">
          Help me maintain and improve the project.
        </p>

        <button
          type="button"
          class="bc-sidebar__donate"
          aria-label="Donate to support MailTester"
          @click="handleDonate"
        >
          <span class="bc-sidebar__donate-label">
            Donate
          </span>

          <span
            class="bc-sidebar__donate-icon material-symbols-rounded"
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </button>
      </section>
    </footer>

    <!-- Collapsed support button -->
    <footer
      v-else
      class="bc-sidebar__collapsed-footer"
    >
      <button
        type="button"
        class="bc-sidebar__collapsed-support"
        aria-label="Support MailTester"
        title="Support us"
        @click="handleDonate"
      >
        <span
          class="material-symbols-rounded"
          aria-hidden="true"
        >
          favorite
        </span>
      </button>
    </footer>

  </aside>
</template>

<style scoped>
.bc-sidebar {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1010;

  width: var(--sidebar-width);
  height: calc(100vh - 32px);
  height: calc(100dvh - 32px);

  display: flex;
  flex-direction: column;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--color-ink);
  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-sm);
  overflow: hidden;

  transition:
    width var(--transition-normal),
    left var(--transition-normal),
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    box-shadow var(--transition-normal);
}

.bc-sidebar--collapsed {
  width: var(--sidebar-collapsed-width);
}

/* =========================================================
   BRAND
   ========================================================= */

.bc-sidebar__brand {
  position: relative;

  min-height: 84px;
  padding: 14px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  color: var(--color-ink);
  background: transparent;
  text-decoration: none;
  text-align: left;

  border: none;
  border-bottom: var(--border-width) solid var(--color-ink);

  overflow: hidden;
  cursor: pointer;

  transition:
    color var(--transition-normal),
    border-color var(--transition-normal);
}

.bc-sidebar__brand:hover,
.bc-sidebar__brand:focus {
  color: var(--color-ink);
}

.bc-sidebar__brand::after {
  content: "";

  position: absolute;
  top: -48px;
  right: -55px;
  z-index: 0;

  width: 130px;
  height: 130px;

  background-color: #d8ff3d;
  border-radius: 50%;

  opacity: 0.8;
  pointer-events: none;
}

.bc-sidebar__logo {
  position: relative;
  z-index: 1;

  width: 54px;
  height: 54px;
  flex: 0 0 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.bc-sidebar__logo-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;
}

.bc-sidebar__brand-text {
  position: relative;
  z-index: 1;

  min-width: 0;

  display: flex;
  flex-direction: column;
}

.bc-sidebar__eyebrow,
.bc-sidebar__section-label,
.bc-sidebar__link-index,
.bc-sidebar__support-label {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.11em;
}

.bc-sidebar__eyebrow {
  font-size: 0.55rem;
  font-weight: 600;
  line-height: 1.2;
}

.bc-sidebar__name {
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.04em;
}

.bc-sidebar--collapsed .bc-sidebar__brand {
  padding: 12px;
  justify-content: center;
}

/* =========================================================
   NAVIGATION
   ========================================================= */

.bc-sidebar__navigation {
  flex: 1;
  min-height: 0;
  padding: 18px 10px;

  overflow: hidden;
}

.bc-sidebar__section-label {
  display: block;
  margin: 0 8px 12px;

  color: var(--color-graphite);

  font-size: 0.6rem;
  font-weight: 600;
}

.bc-sidebar__menu {
  margin: 0;
  padding: 0;

  list-style: none;
}

.bc-sidebar__item {
  margin-bottom: 6px;
}

.bc-sidebar__link {
  position: relative;

  width: 100%;
  min-height: 48px;
  padding: 8px 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 11px;

  color: var(--color-ink);
  background-color: transparent;

  border: var(--border-width) solid transparent;
  border-radius: 14px;

  font-family: var(--font-body);
  text-align: left;
  text-decoration: none;
  appearance: none;

  cursor: pointer;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

/*
 * Inactive links use --color-ink:
 * black in light mode and white in dark mode.
 */
.bc-sidebar__link:hover,
.bc-sidebar__link:focus-visible {
  color: var(--color-ink);
  background-color: var(--color-paper);

  border-color: var(--color-ink);

  transform: translateX(2px);
}

/*
 * Active links always remain black over chartreuse.
 */
.bc-sidebar__link--active,
.bc-sidebar__link--active:hover,
.bc-sidebar__link--active:focus,
.bc-sidebar__link--active:focus-visible,
.bc-sidebar__link--active:active {
  color: #0e0e0c;
  background-color: #d8ff3d;

  border-color: #0e0e0c;

  box-shadow: 3px 3px 0 #0e0e0c;
}

.bc-sidebar__icon {
  width: 28px;
  height: 28px;
  flex: 0 0 28px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: currentColor;

  font-size: 22px;
  font-variation-settings:
    "FILL" 0,
    "wght" 500,
    "GRAD" 0,
    "opsz" 24;

  transition: color var(--transition-fast);
}

.bc-sidebar__link--active .bc-sidebar__icon {
  color: #0e0e0c;
}

.bc-sidebar__link-text {
  min-width: 0;
  flex: 1;

  color: currentColor;

  font-size: 0.84rem;
  font-weight: 650;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bc-sidebar__link-index {
  color: var(--color-graphite);

  font-size: 0.53rem;
  line-height: 1;

  transition: color var(--transition-fast);
}

.bc-sidebar__link--active .bc-sidebar__link-index {
  color: #0e0e0c;
  opacity: 0.7;
}

.bc-sidebar--collapsed .bc-sidebar__link {
  padding: 8px;
  justify-content: center;
}

/* =========================================================
   SUPPORT FOOTER
   ========================================================= */

.bc-sidebar__footer {
  flex: 0 0 auto;
  padding: 12px;

  display: flex;
  flex-direction: column;
}

.bc-sidebar__support {
  position: relative;

  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: var(--color-paper);

  border: 1px solid var(--color-ink);
  border-radius: 14px;

  overflow: hidden;

  transition:
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.bc-sidebar__support:hover {
transform: translateY(-2px);
box-shadow: 4px 4px 0 var(--color-ink);
}

.bc-sidebar__support::after {
  content: "";

  position: absolute;
  top: -50px;
  right: -52px;

  width: 105px;
  height: 105px;

  background-color: #d8ff3d;
  border-radius: 50%;

  opacity: 0.55;
  pointer-events: none;
}

.bc-sidebar__support-header {
  position: relative;
  z-index: 1;

  min-width: 0;

  display: flex;
  align-items: center;
  gap: 9px;
}

.bc-sidebar__support-icon {
  width: 34px;
  height: 34px;
  flex: 0 0 34px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #0e0e0c;
  background-color: #ff5a1f;

  border: 1px solid #0e0e0c;
  border-radius: 10px;

  font-size: 20px;
  font-variation-settings:
    "FILL" 1,
    "wght" 500,
    "GRAD" 0,
    "opsz" 24;
}

.bc-sidebar__support-heading {
  min-width: 0;

  display: flex;
  flex-direction: column;
}

.bc-sidebar__support-label {
  color: var(--color-graphite);

  font-size: 0.48rem;
  font-weight: 600;
  line-height: 1.2;
}

.bc-sidebar__support-title {
  color: var(--color-ink);

  font-size: 0.7rem;
  line-height: 1.3;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bc-sidebar__support-description {
  position: relative;
  z-index: 1;

  margin: 0;

  color: var(--color-graphite);

  font-size: 0.65rem;
  line-height: 1.45;
}

/* =========================================================
   DONATE BUTTON
   ========================================================= */

.bc-sidebar__donate {
  position: relative;
  z-index: 1;

  width: 100%;
  height: 36px;
  padding: 0 5px 0 13px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  color: #0e0e0c;
  background-color: #d8ff3d;

  border: 1px solid #0e0e0c;
  border-radius: var(--radius-pill);

  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 700;

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast);
}

.bc-sidebar__donate:hover {
  color: #d8ff3d;
  background-color: #0e0e0c;

  transform: translateY(-1px);
}

.bc-sidebar__donate:active {
  transform: translateY(0);
}

.bc-sidebar__donate-label {
  min-width: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bc-sidebar__donate-icon {
  width: 26px;
  height: 26px;
  flex: 0 0 26px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #d8ff3d;
  background-color: #0e0e0c;

  border-radius: 50%;

  font-size: 16px;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast);
}

.bc-sidebar__donate:hover .bc-sidebar__donate-icon {
  color: #0e0e0c;
  background-color: #d8ff3d;

  transform: translateX(2px);
}

/* =========================================================
   COLLAPSED SUPPORT
   ========================================================= */

.bc-sidebar__collapsed-footer {
  flex: 0 0 auto;
  padding: 0 8px 12px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.bc-sidebar__collapsed-support {
  width: 42px;
  height: 42px;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #0e0e0c;
  background-color: #ff5a1f;

  border: var(--border-width) solid #0e0e0c;
  border-radius: 13px;

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.bc-sidebar__collapsed-support:hover {
  color: #d8ff3d;
  background-color: #0e0e0c;

  transform: translateY(-2px);

  box-shadow: 3px 3px 0 #d8ff3d;
}

.bc-sidebar__collapsed-support:active {
  transform: translateY(0);
  box-shadow: none;
}

.bc-sidebar__collapsed-support .material-symbols-rounded {
  width: 22px;
  height: 22px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-variation-settings:
    "FILL" 1,
    "wght" 500,
    "GRAD" 0,
    "opsz" 24;
}

/* =========================================================
   LOW HEIGHT
   ========================================================= */

@media (max-height: 650px) and (min-width: 768px) {
  .bc-sidebar__footer {
    padding: 9px;
  }

  .bc-sidebar__support {
    padding: 9px;
    gap: 7px;
  }

  .bc-sidebar__support-description {
    display: none;
  }

  .bc-sidebar__donate {
    height: 32px;
  }

  .bc-sidebar__donate-icon {
    width: 23px;
    height: 23px;
    flex-basis: 23px;
  }
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 767.98px) {
  .bc-sidebar,
  .bc-sidebar--collapsed {
    top: var(--navbar-height);
    left: -292px;
    z-index: 1010;

    width: 280px;
    height: calc(100vh - var(--navbar-height));
    height: calc(100dvh - var(--navbar-height));

    border-radius: 0 var(--radius-lg) var(--radius-lg) 0;

    transition:
      left var(--transition-normal),
      color var(--transition-normal),
      background-color var(--transition-normal),
      border-color var(--transition-normal);
  }

  .bc-sidebar--expanded {
    left: 0;
  }

}
</style>