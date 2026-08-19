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

const emit = defineEmits([
  'toggle-sidebar',
  'donate',
  'select-view',
])

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
            :class="{
              'bc-sidebar__link--active':
                selectedView === 'home',
            }"
            title="Home"
            :aria-pressed="selectedView === 'home'"
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
            :class="{
              'bc-sidebar__link--active':
                selectedView === 'send',
            }"
            title="Send"
            :aria-pressed="selectedView === 'send'"
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
            :class="{
              'bc-sidebar__link--active':
                selectedView === 'receive',
            }"
            title="Receive"
            :aria-pressed="selectedView === 'receive'"
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
            :class="{
              'bc-sidebar__link--active':
                selectedView === 'about',
            }"
            title="About us"
            :aria-pressed="selectedView === 'about'"
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
            <strong class="bc-sidebar__support-title">
              Support me
            </strong>

            <span class="bc-sidebar__support-subtitle">
              Help me maintain and improve the project.
            </span>
          </div>
        </div>

        <button
          type="button"
          class="bc-sidebar__donate"
          aria-label="Donate to support Mail4all"
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

        <div class="bc-sidebar__payment">
          <span
            class="bc-sidebar__payment-icon material-symbols-rounded"
            aria-hidden="true"
          >
            lock
          </span>

          <span class="bc-sidebar__payment-text">
            Secure payment via PayPal
          </span>
        </div>
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
        aria-label="Support Mail4all"
        title="Support Mail4all"
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

  border: var(--border-width) solid var(--border-color);
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
  background-color: transparent;

  border: none;
  border-bottom: var(--border-width) solid var(--border-color);

  text-align: left;
  text-decoration: none;

  overflow: hidden;

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-normal),
    border-color var(--transition-normal);
}

.bc-sidebar__brand:hover,
.bc-sidebar__brand:focus {
  color: var(--color-ink);
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
.bc-sidebar__link-index {
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
  flex: 1 1 auto;

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
  border-radius: var(--radius-md);

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

.bc-sidebar__link:hover,
.bc-sidebar__link:focus-visible {
  color: var(--color-ink);
  background-color: var(--color-paper);

  border-color: var(--border-color);

  transform: translateX(2px);
}

.bc-sidebar__link--active,
.bc-sidebar__link--active:hover,
.bc-sidebar__link--active:focus,
.bc-sidebar__link--active:focus-visible,
.bc-sidebar__link--active:active {
  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border-color: var(--color-on-accent);

  box-shadow: 3px 3px 0 var(--color-on-accent);
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
  color: var(--color-on-accent);
}

.bc-sidebar__link-text {
  min-width: 0;
  flex: 1 1 auto;

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

  transition:
    color var(--transition-fast),
    opacity var(--transition-fast);
}

.bc-sidebar__link--active .bc-sidebar__link-index {
  color: var(--color-on-accent);

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
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: var(--color-ink);
  background-color: var(--color-paper);

  border: var(--border-width) dashed var(--border-color);
  border-radius: var(--radius-md);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.bc-sidebar__support:hover {
  transform: translateY(-2px);

  box-shadow: 4px 4px 0 var(--color-ink);
}

.bc-sidebar__support-header {
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 10px;
}

.bc-sidebar__support-icon {
  width: 36px;
  height: 36px;
  flex: 0 0 36px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-on-accent);
  background-color: var(--color-tangerine);

  border: 1px solid var(--color-on-accent);
  border-radius: 10px;

  font-size: 20px;

  font-variation-settings:
    "FILL" 1,
    "wght" 500,
    "GRAD" 0,
    "opsz" 24;
}

.bc-sidebar__support:hover .bc-sidebar__support-icon {
  animation: support-heartbeat 650ms ease-in-out;
}

@keyframes support-heartbeat {
  0%,
  100% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.18);
  }

  45% {
    transform: scale(1);
  }

  65% {
    transform: scale(1.1);
  }

  85% {
    transform: scale(1);
  }
}

.bc-sidebar__support-heading {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 3px;
}

.bc-sidebar__support-title {
  min-width: 0;

  color: var(--color-ink);

  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bc-sidebar__support-subtitle {
  min-width: 0;

  color: var(--color-graphite);

  font-size: 0.58rem;
  line-height: 1.35;
}

/* =========================================================
   DONATE BUTTON
   ========================================================= */

.bc-sidebar__donate {
  width: 100%;
  height: 36px;
  padding: 0 5px 0 13px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
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
  color: var(--color-chartreuse);
  background-color: var(--color-on-accent);

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

  color: var(--color-chartreuse);
  background-color: var(--color-on-accent);

  border-radius: 50%;

  font-size: 16px;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast);
}

.bc-sidebar__donate:hover .bc-sidebar__donate-icon {
  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  transform: translateX(2px);
}

/* =========================================================
   SECURE PAYMENT
   ========================================================= */

.bc-sidebar__payment {
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

  color: var(--color-graphite-soft);
}

.bc-sidebar__payment-icon {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;

  color: currentColor;

  font-size: 16px;

  font-variation-settings:
    "FILL" 1,
    "wght" 500,
    "GRAD" 0,
    "opsz" 20;
}

.bc-sidebar__payment-text {
  min-width: 0;

  font-size: 0.70rem;
  font-weight: 500;
  line-height: 1.3;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

  color: var(--color-on-accent);
  background-color: var(--color-tangerine);

  border: var(--border-width) solid var(--color-on-accent);
  border-radius: var(--radius-md);

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.bc-sidebar__collapsed-support:hover {
  color: var(--color-on-accent);
  background-color: var(--color-tangerine);

  transform: translateY(-2px);

  box-shadow: 3px 3px 0 var(--color-ink);
}

.bc-sidebar__collapsed-support:hover .material-symbols-rounded {
animation: support-heartbeat 650ms ease-in-out;
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

  .bc-sidebar__support-icon {
    width: 32px;
    height: 32px;
    flex-basis: 32px;

    font-size: 18px;
  }

  .bc-sidebar__support-subtitle {
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

  .bc-sidebar__payment-text {
    font-size: 0.5rem;
  }
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .bc-sidebar__support:hover .bc-sidebar__support-icon {
    animation: none;
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