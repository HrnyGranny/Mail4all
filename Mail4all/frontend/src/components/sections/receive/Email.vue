<script setup>
import { nextTick, ref, watch } from 'vue'

const props = defineProps({
  email: {
    type: String,
    default: 'demo@mail4all.app',
  },
})

const emit = defineEmits(['edit', 'share'])

const emailValue = ref(props.email)
const emailInput = ref(null)
const isEditing = ref(false)

watch(
  () => props.email,
  (value) => {
    if (!isEditing.value) {
      emailValue.value = value
    }
  },
)

const handleEdit = async () => {
  if (isEditing.value) {
    isEditing.value = false
    emit('edit', emailValue.value)

    return
  }

  isEditing.value = true

  await nextTick()

  emailInput.value?.focus()
  emailInput.value?.select()
}

const handleShare = () => {
  emit('share', emailValue.value)
}
</script>

<template>
  <article class="receive-email">
    <header class="receive-email__header">
      <div class="receive-email__heading">
        <h2 class="receive-email__title">
          Your email
        </h2>
      </div>

      <span
        class="receive-email__status"
        aria-label="Inbox active"
      >
        <span
          class="receive-email__status-dot"
          aria-hidden="true"
        ></span>

        Active
      </span>
    </header>

    <div class="receive-email__body">
      <label
        class="visually-hidden-custom"
        for="temporary-email"
      >
        Temporary email address
      </label>

      <div
        class="receive-email__field"
        :class="{
          'receive-email__field--editing': isEditing,
        }"
      >
        <span
          class="receive-email__field-icon material-symbols-rounded"
          aria-hidden="true"
        >
          alternate_email
        </span>

        <input
          id="temporary-email"
          ref="emailInput"
          v-model="emailValue"
          class="receive-email__input"
          type="email"
          :readonly="!isEditing"
          autocomplete="off"
          spellcheck="false"
          @keyup.enter="isEditing && handleEdit()"
        >
      </div>
    </div>

    <footer class="receive-email__actions">
      <button
        type="button"
        class="receive-email__action"
        :class="{
          'receive-email__action--editing': isEditing,
        }"
        @click="handleEdit"
      >
        <span
          class="material-symbols-rounded"
          aria-hidden="true"
        >
          {{ isEditing ? 'check' : 'edit' }}
        </span>

        <span>
          {{ isEditing ? 'Save' : 'Edit' }}
        </span>
      </button>

      <button
        type="button"
        class="receive-email__action receive-email__action--primary"
        @click="handleShare"
      >
        <span
          class="material-symbols-rounded"
          aria-hidden="true"
        >
          share
        </span>

        <span>Share</span>
      </button>
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

  display: flex;
  flex-direction: column;
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

.receive-email__header {
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.receive-email__heading {
  min-width: 0;
}

.receive-email__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(0.95rem, 1.4vw, 1.15rem);
  line-height: 1;
  letter-spacing: -0.04em;
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
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.receive-email__status-dot {
  width: 6px;
  height: 6px;
  flex: 0 0 6px;

  background-color: var(--color-success);

  border: 1px solid var(--color-on-accent);
  border-radius: 50%;
}

.receive-email__body {
  min-width: 0;
  flex: 1 1 auto;

  display: flex;
  align-items: center;
}

.receive-email__field {
  width: 100%;
  min-width: 0;
  height: 40px;
  padding: 0 10px;

  display: flex;
  align-items: center;
  gap: 8px;

  background-color: var(--color-bone);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-md);

  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.receive-email__field--editing {
  border-color: var(--color-tangerine);

  box-shadow: 3px 3px 0 var(--color-tangerine);
}

.receive-email__field-icon {
  width: 19px;
  height: 19px;
  flex: 0 0 19px;

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
}

.receive-email__input[readonly] {
  cursor: default;
}

.receive-email__actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.receive-email__action {
  min-width: 0;
  height: 32px;
  padding: 0 10px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-pill);

  font-size: 0.65rem;
  font-weight: 700;

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.receive-email__action:hover {
  transform: translateY(-1px);

  box-shadow: 2px 2px 0 var(--color-ink);
}

.receive-email__action:active {
  transform: translateY(0);

  box-shadow: none;
}

.receive-email__action--primary,
.receive-email__action--editing {
  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border-color: var(--color-on-accent);
}

.receive-email__action .material-symbols-rounded {
  width: 17px;
  height: 17px;
  flex: 0 0 17px;

  font-size: 17px;
}

@media (max-height: 650px) and (min-width: 768px) {
  .receive-email {
    padding: 9px;

    gap: 7px;
  }

  .receive-email__field {
    height: 36px;
  }

  .receive-email__action {
    height: 29px;
  }
}

@media (max-width: 767.98px) {
  .receive-email {
    height: auto;
    min-height: 170px;
    flex: 0 0 auto;
  }
}

@media (max-width: 575.98px) {
  .receive-email {
    min-height: 165px;
    padding: 12px;
  }

  .receive-email__input {
    font-size: 0.66rem;
  }
}
</style>