<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'

import BaseButton from '@/components/ui/BaseButton.vue'
import { copyToClipboard } from '@/assets/js/copyToClipboard.js'

const props = defineProps({
  email: {
    type: String,
    default: 'demo@mail4all.app',
  },

  backendActive: {
    type: Boolean,
    default: true,
  },

  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['edit', 'share', 'copy'])

const emailValue = ref(props.email)
const copyState = ref('idle')

let copyStateTimeout = null

const hasEmail = computed(() => {
  return Boolean(emailValue.value.trim())
})

const copyButtonLabel = computed(() => {
  if (copyState.value === 'copied') {
    return 'Copied'
  }

  if (copyState.value === 'error') {
    return 'Copy failed'
  }

  return 'Copy email address'
})

const copyButtonIcon = computed(() => {
  if (copyState.value === 'copied') {
    return 'check'
  }

  if (copyState.value === 'error') {
    return 'error'
  }

  return 'content_copy'
})

const statusLabel = computed(() => {
  if (props.loading) {
    return 'Loading'
  }

  return props.backendActive ? 'Active' : 'Offline'
})

watch(
  () => props.email,
  (value) => {
    emailValue.value = value
  },
)

const clearCopyStateTimeout = () => {
  if (copyStateTimeout) {
    window.clearTimeout(copyStateTimeout)
    copyStateTimeout = null
  }
}

const resetCopyStateLater = () => {
  clearCopyStateTimeout()

  copyStateTimeout = window.setTimeout(() => {
    copyState.value = 'idle'
    copyStateTimeout = null
  }, 1800)
}

const handleCopy = async () => {
  if (!hasEmail.value) {
    return
  }

  const copied = await copyToClipboard(emailValue.value)

  copyState.value = copied ? 'copied' : 'error'

  if (copied) {
    emit('copy', emailValue.value)
  }

  resetCopyStateLater()
}

const handleEdit = () => {
  /*
   * TODO:
   * Open the email customization modal.
   * The modal will handle validation and the backend update later.
   */
  emit('edit', emailValue.value)
}

const handleShare = () => {
  /*
   * TODO:
   * Open the inbox sharing modal.
   * Share links and permissions will be implemented later.
   */
  emit('share', emailValue.value)
}

/*
 * TODO: backend integration
 *
 * 1. Check whether the backend is available.
 * 2. Generate the temporary email address through the API.
 * 3. Replace the email prop placeholder with the generated address.
 * 4. Disable actions while generation is in progress.
 * 5. Show the appropriate active, loading or offline status.
 */

onBeforeUnmount(() => {
  clearCopyStateTimeout()
})
</script>

<template>
  <article class="receive-email">
    <header class="receive-email__header">
      <div class="receive-email__heading">
        <h2 class="receive-email__title">
          Your email
        </h2>

        <span class="receive-email__helper">
          Temporary inbox address
        </span>
      </div>

      <span
        class="receive-email__status"
        :class="{
          'receive-email__status--loading': loading,
          'receive-email__status--offline': !backendActive && !loading,
        }"
        :aria-label="`Inbox status: ${statusLabel}`"
      >
        <span
          class="receive-email__status-dot"
          aria-hidden="true"
        ></span>

        {{ statusLabel }}
      </span>
    </header>

    <div class="receive-email__body">
      <label
        class="visually-hidden-custom"
        for="temporary-email"
      >
        Temporary email address
      </label>

      <div class="receive-email__field">
        <span
          class="receive-email__field-icon material-symbols-rounded"
          aria-hidden="true"
        >
          alternate_email
        </span>

        <input
          id="temporary-email"
          v-model="emailValue"
          class="receive-email__input"
          type="email"
          readonly
          autocomplete="off"
          spellcheck="false"
          aria-describedby="temporary-email-copy-status"
        >

        <button
          type="button"
          class="receive-email__copy"
          :class="{
            'receive-email__copy--copied': copyState === 'copied',
            'receive-email__copy--error': copyState === 'error',
          }"
          :disabled="!hasEmail"
          :aria-label="copyButtonLabel"
          :title="copyButtonLabel"
          @click="handleCopy"
        >
          <span
            class="material-symbols-rounded"
            aria-hidden="true"
          >
            {{ copyButtonIcon }}
          </span>
        </button>
      </div>

      <span
        id="temporary-email-copy-status"
        class="visually-hidden-custom"
        aria-live="polite"
      >
        {{
          copyState === 'copied'
            ? 'Email address copied to clipboard'
            : copyState === 'error'
              ? 'Email address could not be copied'
              : ''
        }}
      </span>
    </div>

    <footer class="receive-email__actions">
      <BaseButton
        class="receive-email__button"
        type="button"
        variant="primary"
        size="small"
        :arrow="false"
        :block="true"
        :disabled="!hasEmail || loading"
        aria-label="Edit temporary email address"
        @click="handleEdit"
      >
        <span
          class="receive-email__button-content"
          aria-hidden="true"
        >
          <span class="material-symbols-rounded">
            edit
          </span>

          <span>Edit</span>
        </span>
      </BaseButton>

      <BaseButton
        class="receive-email__button"
        type="button"
        variant="primary"
        size="small"
        :arrow="false"
        :block="true"
        :disabled="!hasEmail || loading"
        aria-label="Share temporary inbox"
        @click="handleShare"
      >
        <span
          class="receive-email__button-content"
          aria-hidden="true"
        >
          <span class="material-symbols-rounded">
            share
          </span>

          <span>Share</span>
        </span>
      </BaseButton>
    </footer>
  </article>
</template>

<style scoped>
.receive-email {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: clamp(11px, 1.2vw, 14px);

  display: grid;
  grid-template-rows: auto minmax(40px, 1fr) auto;
  gap: 9px;

  color: var(--color-ink);
  background-color: var(--color-paper);

  border: var(--border-width) dashed var(--border-color);
  border-radius: var(--radius-lg);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.receive-email:hover {
  transform: translateY(-2px);

  box-shadow: 4px 4px 0 var(--color-ink);
}

/* =========================================================
   HEADER
   ========================================================= */

.receive-email__header {
  min-width: 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.receive-email__heading {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 3px;
}

.receive-email__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(0.95rem, 1.4vw, 1.15rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.receive-email__helper {
  color: var(--color-graphite);

  font-size: 0.58rem;
  line-height: 1.3;
}

.receive-email__status {
  flex: 0 0 auto;
  padding: 4px 7px;

  display: inline-flex;
  align-items: center;
  gap: 5px;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: var(--radius-pill);

  font-family: var(--font-mono);
  font-size: 0.44rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.receive-email__status--loading {
  background-color: var(--color-warning);
}

.receive-email__status--offline {
  color: #ffffff;
  background-color: var(--color-danger);
}

.receive-email__status-dot {
  width: 6px;
  height: 6px;
  flex: 0 0 6px;

  background-color: var(--color-success);

  border: 1px solid var(--color-on-accent);
  border-radius: 50%;
}

.receive-email__status--loading .receive-email__status-dot {
  background-color: var(--color-on-accent);
}

.receive-email__status--offline .receive-email__status-dot {
  background-color: #ffffff;
}

/* =========================================================
   EMAIL FIELD
   ========================================================= */

.receive-email__body {
  min-width: 0;
  min-height: 0;

  display: flex;
  align-items: center;
}

.receive-email__field {
  width: 100%;
  min-width: 0;
  height: 42px;
  padding: 4px 4px 4px 10px;

  display: grid;
  grid-template-columns: 19px minmax(0, 1fr) 32px;
  align-items: center;
  gap: 8px;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-md);
}

.receive-email__field-icon {
  width: 19px;
  height: 19px;

  color: var(--color-graphite);

  font-size: 19px;
}

.receive-email__input {
  width: 100%;
  min-width: 0;
  padding: 0;

  color: var(--color-ink);
  background-color: transparent;

  border: none;
  outline: none;

  font-family: var(--font-mono);
  font-size: clamp(0.6rem, 0.85vw, 0.7rem);
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  cursor: text;
}

/* =========================================================
   COPY BUTTON
   ========================================================= */

.receive-email__copy {
  width: 32px;
  height: 32px;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: 10px;

  appearance: none;
  cursor: pointer;

  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.receive-email__copy:hover:not(:disabled) {
  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  transform: translateY(-1px);

  box-shadow: 2px 2px 0 var(--color-on-accent);
}

.receive-email__copy:active:not(:disabled) {
  transform: translateY(0);

  box-shadow: none;
}

.receive-email__copy--copied {
  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);
}

.receive-email__copy--error {
  color: #ffffff;
  background-color: var(--color-danger);
}

.receive-email__copy:disabled {
  opacity: 0.45;

  cursor: not-allowed;
}

.receive-email__copy .material-symbols-rounded {
  width: 17px;
  height: 17px;

  font-size: 17px;
}

/* =========================================================
   ACTIONS
   ========================================================= */

.receive-email__actions {
  min-width: 0;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.receive-email__button {
  min-width: 0;
}

.receive-email__actions :deep(.bc-button) {
  width: 100%;
  min-width: 0;
  height: 34px;
  padding: 0 10px;
}

.receive-email__actions :deep(.bc-button__label) {
  width: 100%;

  text-align: center;
}

.receive-email__button-content {
  min-width: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.receive-email__button-content .material-symbols-rounded {
  width: 17px;
  height: 17px;
  flex: 0 0 17px;

  font-size: 17px;
}

/* =========================================================
   LOW HEIGHT
   ========================================================= */

@media (max-height: 650px) and (min-width: 768px) {
  .receive-email {
    padding: 9px;

    gap: 7px;
  }

  .receive-email__helper {
    display: none;
  }

  .receive-email__field {
    height: 38px;

    grid-template-columns: 18px minmax(0, 1fr) 28px;
  }

  .receive-email__copy {
    width: 28px;
    height: 28px;

    border-radius: 8px;
  }

  .receive-email__actions :deep(.bc-button) {
    height: 30px;
    padding: 0 8px;
  }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767.98px) {
  .receive-email {
    height: auto;
    min-height: 170px;
    flex: 0 0 auto;
  }

  .receive-email__field {
    height: 44px;

    grid-template-columns: 19px minmax(0, 1fr) 34px;
  }

  .receive-email__copy {
    width: 34px;
    height: 34px;
  }

  .receive-email__actions :deep(.bc-button) {
    height: 38px;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .receive-email {
    min-height: 165px;
    padding: 12px;
  }

  .receive-email__helper {
    font-size: 0.55rem;
  }

  .receive-email__input {
    font-size: 0.66rem;
  }

  .receive-email__actions {
    gap: 6px;
  }

  .receive-email__actions :deep(.bc-button) {
    height: 36px;
    padding: 0 8px;

    font-size: 0.72rem;
  }

  .receive-email__button-content {
    gap: 5px;
  }

  .receive-email__button-content .material-symbols-rounded {
    width: 16px;
    height: 16px;
    flex-basis: 16px;

    font-size: 16px;
  }
}
</style>