<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  watch,
} from 'vue'

import BaseButton from '@/components/ui/BaseButton.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  currentEmail: {
    type: String,
    default: '',
  },
})

const emit = defineEmits([
  'update:modelValue',
  'generate',
])

const availableDomains = [
  '@m4il.tech'
]

const emailName = ref('')
const selectedDomain = ref(availableDomains[0])
const isGenerating = ref(false)
const nameInput = ref(null)

const normalizedName = computed(() => {
  return emailName.value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9._-]/g, '')
    .replace(/^[._-]+|[._-]+$/g, '')
})

const generatedEmail = computed(() => {
  if (!normalizedName.value) {
    return ''
  }

  return `${normalizedName.value}${selectedDomain.value}`
})

const canGenerate = computed(() => {
  return Boolean(normalizedName.value) && !isGenerating.value
})

const splitCurrentEmail = () => {
  const currentEmail = props.currentEmail.trim()
  const separatorPosition = currentEmail.lastIndexOf('@')

  if (separatorPosition <= 0) {
    emailName.value = ''
    selectedDomain.value = availableDomains[0]

    return
  }

  const currentName = currentEmail.slice(0, separatorPosition)
  const currentDomain = currentEmail.slice(separatorPosition)

  emailName.value = currentName

  selectedDomain.value = availableDomains.includes(currentDomain)
    ? currentDomain
    : availableDomains[0]
}

const closeModal = () => {
  if (isGenerating.value) {
    return
  }

  emit('update:modelValue', false)
}

const focusNameInput = async () => {
  await nextTick()

  nameInput.value?.focus()
  nameInput.value?.select()
}

const generateRandomName = () => {
  const adjectives = [
    'silent',
    'rapid',
    'hidden',
    'bright',
    'private',
    'swift',
    'lucky',
    'secure',
  ]

  const nouns = [
    'falcon',
    'forest',
    'river',
    'orbit',
    'cloud',
    'pixel',
    'comet',
    'signal',
  ]

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)]

  const randomNoun =
    nouns[Math.floor(Math.random() * nouns.length)]

  const randomNumber = Math.floor(100 + Math.random() * 900)

  emailName.value =
    `${randomAdjective}_${randomNoun}_${randomNumber}`

  focusNameInput()
}

const handleGenerate = async () => {
  if (!canGenerate.value) {
    return
  }

  isGenerating.value = true

  try {
    /*
     * TODO: backend integration
     *
     * Sustituir la generación local por la llamada a la API:
     *
     * const response = await receiveService.generateEmail({
     *   name: normalizedName.value,
     *   domain: selectedDomain.value,
     * })
     *
     * const newEmail = response.email
     */

    const newEmail = generatedEmail.value

    emit('generate', newEmail)
    emit('update:modelValue', false)
  } catch (error) {
    console.error('Unable to generate email:', error)
  } finally {
    isGenerating.value = false
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

watch(
  () => props.modelValue,
  async (isOpen) => {
    if (!isOpen) {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeydown)

      return
    }

    splitCurrentEmail()

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeydown)

    await focusNameInput()
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="edit-modal">
      <div
        v-if="modelValue"
        class="edit-modal"
        role="presentation"
        @mousedown.self="closeModal"
      >
        <section
          class="edit-modal__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-email-title"
        >
          <header class="edit-modal__header">
            <div class="edit-modal__heading">
              <span class="edit-modal__eyebrow">
                Customize address
              </span>

              <h2
                id="edit-email-title"
                class="edit-modal__title"
              >
                Edit your email
              </h2>

              <p class="edit-modal__description">
                Configure your new address. This action will permanently delete your current inbox.
              </p>
            </div>

            <button
              type="button"
              class="edit-modal__close"
              aria-label="Close email editor"
              @click="closeModal"
            >
              <span
                class="material-symbols-rounded"
                aria-hidden="true"
              >
                close
              </span>
            </button>
          </header>

          <div class="edit-modal__body">
            <!-- Name card -->
            <div class="edit-modal__group">
              <label
                class="edit-modal__label"
                for="edit-email-name"
              >
                Name
              </label>

              <div class="edit-modal__name-field">
                <input
                  id="edit-email-name"
                  ref="nameInput"
                  v-model="emailName"
                  class="edit-modal__input"
                  type="text"
                  autocomplete="off"
                  spellcheck="false"
                  maxlength="64"
                  placeholder="your_email"
                  @keyup.enter="handleGenerate"
                >

                <button
                  type="button"
                  class="edit-modal__random"
                  aria-label="Generate a random email name"
                  title="Generate random name"
                  @click="generateRandomName"
                >
                  <span
                    class="material-symbols-rounded"
                    aria-hidden="true"
                  >
                    sync
                  </span>
                </button>
              </div>

              <span
                v-if="emailName && !normalizedName"
                class="edit-modal__validation"
              >
                Enter at least one valid letter or number.
              </span>
            </div>

            <!-- Domain card -->
            <div class="edit-modal__group">
              <label
                class="edit-modal__label"
                for="edit-email-domain"
              >
                Domain
              </label>

              <div class="edit-modal__select-field">
                <select
                  id="edit-email-domain"
                  v-model="selectedDomain"
                  class="edit-modal__select"
                >
                  <option
                    v-for="domain in availableDomains"
                    :key="domain"
                    :value="domain"
                  >
                    {{ domain }}
                  </option>
                </select>

                <span
                  class="edit-modal__select-icon material-symbols-rounded"
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </div>
            </div>
          </div>

          <footer class="edit-modal__footer">
            <BaseButton
              type="button"
              variant="primary"
              size="small"
              :block="true"
              :disabled="!canGenerate"
              :loading="isGenerating"
              aria-label="Generate temporary email"
              @click="handleGenerate"
            >
              Generate email
            </BaseButton>
          </footer>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.edit-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(var(--color-ink-rgb), 0.48);

  overflow-y: auto;
}

.edit-modal__dialog {
  width: min(100%, 340px);
  max-height: calc(100dvh - 40px);

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-lg);

  box-shadow: 6px 6px 0 var(--color-ink);

  overflow-y: auto;
}

/* =========================================================
   HEADER
   ========================================================= */

.edit-modal__header {
  padding: 18px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;

  border-bottom: var(--border-width) solid var(--border-color);
}

.edit-modal__heading {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
}

.edit-modal__eyebrow {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.54rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.edit-modal__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.25rem, 3vw, 1.65rem);
  line-height: 1;
  letter-spacing: -0.045em;
}

.edit-modal__description {
  max-width: 235px;
  margin: 3px 0 0;

  color: var(--color-graphite);

  font-size: 0.68rem;
  line-height: 1.45;
}

.edit-modal__close {
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: var(--border-width) solid var(--color-on-accent);
  border-radius: 50%;

  appearance: none;
  cursor: pointer;

  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.edit-modal__close:hover {
  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  transform: translateY(-1px);

  box-shadow: 2px 2px 0 var(--color-on-accent);
}

.edit-modal__close:active {
  transform: translateY(0);

  box-shadow: none;
}

.edit-modal__close .material-symbols-rounded {
  width: 19px;
  height: 19px;

  font-size: 19px;
}

/* =========================================================
   BODY
   ========================================================= */

.edit-modal__body {
  padding: 16px 16px 8px;

  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* =========================================================
   FIELD CARDS
   ========================================================= */

.edit-modal__group {
  min-width: 0;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 7px;

  color: var(--color-ink);
  background-color: var(--color-paper);

  border: var(--border-width) dashed var(--border-color);
  border-radius: var(--radius-md);

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.edit-modal__group:hover,
.edit-modal__group:focus-within {
  transform: translateY(-2px);

  box-shadow: 3px 3px 0 var(--color-ink);
}

.edit-modal__label {
  color: var(--color-ink);

  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.3;
}

/* =========================================================
   TEXT FIELDS
   ========================================================= */

.edit-modal__name-field,
.edit-modal__select-field {
  position: relative;

  width: 100%;
  min-width: 0;
  height: 44px;
  padding: 4px;

  display: grid;
  align-items: center;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-md);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal);
}

.edit-modal__name-field {
  grid-template-columns: minmax(0, 1fr) 34px;
}

.edit-modal__select-field {
  grid-template-columns: minmax(0, 1fr) 28px;
}

/* =========================================================
   NAME INPUT
   ========================================================= */

.edit-modal__input {
  width: 100%;
  min-width: 0;
  height: 100%;
  padding: 0 9px;

  color: var(--color-ink);
  background-color: transparent;

  border: none;
  outline: none;

  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.edit-modal__input::placeholder {
  color: var(--color-graphite-soft);
}

/* =========================================================
   RANDOM NAME BUTTON
   ========================================================= */

.edit-modal__random {
  width: 34px;
  height: 34px;
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

.edit-modal__random:hover {
  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  transform: translateY(-1px);

  box-shadow: 2px 2px 0 var(--color-on-accent);
}

.edit-modal__random:active {
  transform: translateY(0);

  box-shadow: none;
}

.edit-modal__random .material-symbols-rounded {
  width: 18px;
  height: 18px;

  font-size: 18px;

  transition: transform 300ms var(--ease-boldcase);
}

.edit-modal__random:hover .material-symbols-rounded {
  transform: rotate(180deg);
}

/* =========================================================
   DOMAIN SELECT
   ========================================================= */

.edit-modal__select {
  position: relative;
  z-index: 1;

  grid-column: 1 / -1;
  grid-row: 1;

  width: 100%;
  min-width: 0;
  height: 100%;
  padding: 0 38px 0 8px;

  color: var(--color-ink);
  background-color: transparent;

  border: none;
  outline: none;

  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;

  appearance: none;
  cursor: pointer;
}

.edit-modal__select-icon {
  position: relative;
  z-index: 2;

  grid-column: 2;
  grid-row: 1;
  justify-self: center;

  width: 20px;
  height: 20px;

  color: var(--color-graphite);

  font-size: 20px;

  pointer-events: none;
}

.edit-modal__validation {
  color: var(--color-danger);

  font-size: 0.6rem;
  line-height: 1.4;
}

/* =========================================================
   FOOTER
   ========================================================= */

.edit-modal__footer {
  padding: 12px 16px 16px;

  display: flex;
  align-items: center;

  border: none;
}

.edit-modal__footer :deep(.bc-button) {
  width: 100%;
}

/* =========================================================
   TRANSITION
   ========================================================= */

.edit-modal-enter-active,
.edit-modal-leave-active {
  transition: opacity var(--transition-normal);
}

.edit-modal-enter-active .edit-modal__dialog,
.edit-modal-leave-active .edit-modal__dialog {
  transition:
    opacity var(--transition-normal),
    transform var(--transition-normal);
}

.edit-modal-enter-from,
.edit-modal-leave-to {
  opacity: 0;
}

.edit-modal-enter-from .edit-modal__dialog {
  opacity: 0;

  transform: translateY(14px) scale(0.98);
}

.edit-modal-leave-to .edit-modal__dialog {
  opacity: 0;

  transform: translateY(8px) scale(0.99);
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .edit-modal {
    padding: 12px;
  }

  .edit-modal__dialog {
    width: min(100%, 340px);
    max-height: calc(100dvh - 24px);

    box-shadow: 5px 5px 0 var(--color-ink);
  }

  .edit-modal__header {
    padding: 16px;
  }

  .edit-modal__body {
    padding: 14px 14px 7px;

    gap: 10px;
  }

  .edit-modal__group {
    padding: 11px;
  }

  .edit-modal__footer {
    padding: 11px 14px 14px;
  }

  .edit-modal__name-field,
  .edit-modal__select-field {
    height: 42px;
  }

  .edit-modal__name-field {
    grid-template-columns: minmax(0, 1fr) 32px;
  }

  .edit-modal__select-field {
    grid-template-columns: minmax(0, 1fr) 26px;
  }

  .edit-modal__random {
    width: 32px;
    height: 32px;

    border-radius: 9px;
  }
}
</style>