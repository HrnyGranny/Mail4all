<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits([
  'back',
  'download',
  'delete',
])

const subject = computed(() => {
  return props.message.subject?.trim() || 'No subject'
})

const sender = computed(() => {
  return (
    props.message.senderEmail?.trim() ||
    props.message.senderName?.trim() ||
    'Unknown sender'
  )
})

const receivedDate = computed(() => {
  return (
    props.message.receivedDate?.trim() ||
    props.message.receivedTime?.trim() ||
    ''
  )
})

const messageBody = computed(() => {
  return (
    props.message.body?.trim() ||
    props.message.preview?.trim() ||
    'This message has no text content.'
  )
})

const senderInitial = computed(() => {
  const source =
    props.message.senderName?.trim() ||
    props.message.senderEmail?.trim() ||
    '?'

  return source.charAt(0).toUpperCase()
})

const handleBack = () => {
  emit('back')
}

const handleDownload = () => {
  emit('download', props.message)
}

const handleDelete = () => {
  emit('delete', props.message)
}
</script>

<template>
  <article class="inbox-opened">
    <header class="inbox-opened__header">
      <div class="inbox-opened__identity">
        <span
          class="inbox-opened__avatar"
          aria-hidden="true"
        >
          {{ senderInitial }}
        </span>

        <div class="inbox-opened__heading">
          <h2 class="inbox-opened__subject">
            {{ subject }}
          </h2>

          <div class="inbox-opened__metadata">
            <span
              class="inbox-opened__metadata-icon material-symbols-rounded"
              aria-hidden="true"
            >
              mail
            </span>

            <span class="inbox-opened__sender">
              {{ sender }}
            </span>

            <span
              v-if="receivedDate"
              class="inbox-opened__separator"
              aria-hidden="true"
            >
              /
            </span>

            <span
              v-if="receivedDate"
              class="inbox-opened__metadata-icon material-symbols-rounded"
              aria-hidden="true"
            >
              schedule
            </span>

            <time
              v-if="receivedDate"
              class="inbox-opened__date"
              :datetime="message.receivedAt || undefined"
            >
              {{ receivedDate }}
            </time>
          </div>
        </div>
      </div>

      <div
        class="inbox-opened__actions"
        aria-label="Message actions"
      >
        <button
          type="button"
          class="inbox-opened__action inbox-opened__action--back"
          aria-label="Return to inbox"
          title="Back to inbox"
          @click="handleBack"
        >
          <span
            class="material-symbols-rounded"
            aria-hidden="true"
          >
            arrow_back
          </span>
        </button>

        <button
          type="button"
          class="inbox-opened__action inbox-opened__action--download"
          aria-label="Download email"
          title="Download email"
          @click="handleDownload"
        >
          <span
            class="material-symbols-rounded"
            aria-hidden="true"
          >
            download
          </span>
        </button>

        <button
          type="button"
          class="inbox-opened__action inbox-opened__action--delete"
          aria-label="Delete email"
          title="Delete email"
          @click="handleDelete"
        >
          <span
            class="material-symbols-rounded"
            aria-hidden="true"
          >
            delete
          </span>
        </button>
      </div>
    </header>

    <div class="inbox-opened__body">
      <div class="inbox-opened__message">
        <p class="inbox-opened__text">
          {{ messageBody }}
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.inbox-opened {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-lg);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.inbox-opened:hover {
  transform: translateY(-2px);

  box-shadow: 4px 4px 0 var(--color-ink);
}

/* =========================================================
   HEADER
   ========================================================= */

.inbox-opened__header {
  width: 100%;
  min-width: 0;
  padding: 14px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--border-color);
}

.inbox-opened__identity {
  min-width: 0;
  flex: 1 1 auto;

  display: flex;
  align-items: center;
  gap: 12px;
}

.inbox-opened__avatar {
  width: 44px;
  height: 44px;
  flex: 0 0 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: 13px;

  font-size: 1rem;
  font-weight: 800;
  line-height: 1;
}

.inbox-opened__heading {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 5px;
}

.inbox-opened__subject {
  min-width: 0;
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(0.92rem, 1.4vw, 1.16rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.035em;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.inbox-opened__metadata {
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 5px;

  color: var(--color-graphite);
}

.inbox-opened__metadata-icon {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;

  color: var(--color-graphite);

  font-size: 15px;
}

.inbox-opened__sender {
  min-width: 0;

  font-size: 0.62rem;
  line-height: 1.3;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.inbox-opened__separator {
  flex: 0 0 auto;

  color: var(--color-graphite-soft);

  font-family: var(--font-mono);
  font-size: 0.55rem;
}

.inbox-opened__date {
  flex: 0 0 auto;

  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.56rem;
  font-weight: 600;
  line-height: 1.3;
  white-space: nowrap;
}

/* =========================================================
   ACTIONS
   ========================================================= */

.inbox-opened__actions {
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  gap: 8px;
}

.inbox-opened__action {
  width: 38px;
  height: 38px;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: 11px;

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.inbox-opened__action:hover {
  transform: translateY(-2px);

  box-shadow: 2px 2px 0 var(--color-ink);
}

.inbox-opened__action:active {
  transform: translateY(0);

  box-shadow: none;
}

.inbox-opened__action--delete {
  color: var(--color-white);
  background-color: var(--color-danger);
}

.inbox-opened__action .material-symbols-rounded {
  width: 20px;
  height: 20px;

  font-size: 20px;
}

/* =========================================================
   BODY
   ========================================================= */

.inbox-opened__body {
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 0;
  padding: clamp(14px, 1.5vw, 18px);

  background-color: var(--color-bone);

  overflow: auto;
}

.inbox-opened__message {
  width: 100%;
  min-width: 0;
  min-height: 100%;
  padding: clamp(16px, 2vw, 24px);

  color: var(--color-ink);
  background-color: var(--color-paper);

  border: var(--border-width) dashed var(--border-color);
  border-radius: var(--radius-lg);
}

.inbox-opened__text {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(0.72rem, 0.85vw, 0.84rem);
  line-height: 1.7;

  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

/* =========================================================
   LOW HEIGHT
   ========================================================= */

@media (max-height: 650px) and (min-width: 768px) {
  .inbox-opened__header {
    padding: 9px 14px;
  }

  .inbox-opened__avatar {
    width: 38px;
    height: 38px;
    flex-basis: 38px;

    border-radius: 11px;
  }

  .inbox-opened__heading {
    gap: 3px;
  }

  .inbox-opened__action {
    width: 34px;
    height: 34px;

    border-radius: 10px;
  }

  .inbox-opened__body {
    padding: 10px;
  }

  .inbox-opened__message {
    padding: 14px;
  }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767.98px) {
  .inbox-opened {
    height: auto;
    min-height: 480px;
    flex: 0 0 auto;
  }

  .inbox-opened__header {
    align-items: flex-start;
    flex-direction: column;
  }

  .inbox-opened__identity {
    width: 100%;
  }

  .inbox-opened__actions {
    width: 100%;

    justify-content: flex-end;
  }

  .inbox-opened__body {
    min-height: 360px;

    overflow: visible;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .inbox-opened {
    min-height: 460px;
  }

  .inbox-opened__header {
    padding: 13px 14px;

    gap: 12px;
  }

  .inbox-opened__identity {
    align-items: flex-start;

    gap: 10px;
  }

  .inbox-opened__avatar {
    width: 40px;
    height: 40px;
    flex-basis: 40px;

    border-radius: 12px;
  }

  .inbox-opened__metadata {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .inbox-opened__separator {
    display: none;
  }

  .inbox-opened__actions {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .inbox-opened__action {
    width: 100%;
    height: 38px;
  }

  .inbox-opened__body {
    min-height: 340px;
    padding: 12px;
  }

  .inbox-opened__message {
    padding: 16px;
  }
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .inbox-opened,
  .inbox-opened__action {
    transition: none;
  }

  .inbox-opened:hover,
  .inbox-opened__action:hover,
  .inbox-opened__action:active {
    transform: none;
  }
}
</style>