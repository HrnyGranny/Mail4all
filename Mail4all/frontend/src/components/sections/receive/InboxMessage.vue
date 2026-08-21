<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['open'])

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
  return props.message.receivedTime?.trim() || ''
})

const messageStatus = computed(() => {
  return props.message.read ? 'Opened' : 'Unread'
})

const handleOpen = () => {
  emit('open', props.message)
}
</script>

<template>
  <article
    class="inbox-message"
    :class="{
      'inbox-message--unread': !message.read,
      'inbox-message--read': message.read,
    }"
  >
    <button
      type="button"
      class="inbox-message__button"
      :aria-label="
        `Open email: ${subject}, from ${sender}. ${messageStatus}`
      "
      @click="handleOpen"
    >
      <span
        class="inbox-message__status-line"
        aria-hidden="true"
      ></span>

      <span class="inbox-message__content">
        <span class="inbox-message__subject-row">
          <strong class="inbox-message__subject">
            {{ subject }}
          </strong>
        </span>

        <span class="inbox-message__sender">
          {{ sender }}
        </span>
      </span>

      <time
        v-if="receivedDate"
        class="inbox-message__date"
        :datetime="message.receivedAt || undefined"
      >
        {{ receivedDate }}
      </time>
    </button>
  </article>
</template>

<style scoped>
.inbox-message {
  position: relative;

  width: 100%;
  min-width: 0;

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

.inbox-message--unread {
  background-color: var(--color-paper);
}

.inbox-message--read {
  background-color: var(--color-muted);
}

.inbox-message:hover,
.inbox-message:focus-within {
  transform: translateY(-2px);

  box-shadow: 3px 3px 0 var(--color-ink);
}

/* =========================================================
   BUTTON
   ========================================================= */

.inbox-message__button {
  position: relative;

  width: 100%;
  min-width: 0;
  min-height: 78px;
  padding: 17px 14px 17px 20px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 8px;

  color: inherit;
  background-color: transparent;

  border: none;

  text-align: left;

  appearance: none;
  cursor: pointer;
}

/* =========================================================
   READ STATUS LINE
   ========================================================= */

.inbox-message__status-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 5px;

  background-color: var(--color-graphite-soft);

  border-right: 1px solid var(--border-color);

  transition:
    background-color var(--transition-fast),
    width var(--transition-fast);
}

.inbox-message--unread .inbox-message__status-line {
  background-color: var(--color-tangerine);
}

.inbox-message--read .inbox-message__status-line {
  background-color: var(--color-graphite-soft);
}

.inbox-message:hover .inbox-message__status-line,
.inbox-message:focus-within .inbox-message__status-line {
  width: 7px;
}

/* =========================================================
   MESSAGE CONTENT
   ========================================================= */

.inbox-message__content {
  min-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1px;
}

.inbox-message__subject-row {
  min-width: 0;

  display: flex;
  align-items: flex-start;
}

/* =========================================================
   SUBJECT
   ========================================================= */

.inbox-message__subject {
  min-width: 0;

  color: var(--color-ink);

  font-size: clamp(0.82rem, 1vw, 0.94rem);
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.025em;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  transition:
    color var(--transition-normal),
    opacity var(--transition-normal);
}

.inbox-message--read .inbox-message__subject {
  color: var(--color-graphite);

  font-weight: 700;
}

/* =========================================================
   SENDER
   ========================================================= */

.inbox-message__sender {
  min-width: 0;
  padding-left: 0;

  color: var(--color-graphite);

  font-size: 0.66rem;
  font-weight: 500;
  line-height: 1.35;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  transition:
    color var(--transition-normal),
    opacity var(--transition-normal);
}

.inbox-message--read .inbox-message__sender {
  color: var(--color-graphite-soft);

  opacity: 0.82;
}

/* =========================================================
   DATE
   ========================================================= */

.inbox-message__date {
  align-self: start;

  margin-top: 1px;

  color: var(--color-ink);

  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;

  transition:
    color var(--transition-normal),
    opacity var(--transition-normal);
}

.inbox-message--read .inbox-message__date {
  color: var(--color-graphite);

  opacity: 0.72;
}

/* =========================================================
   DARK THEME
   ========================================================= */

:global(html[data-theme="dark"]) .inbox-message--unread {
  background-color: var(--color-paper);
}

:global(html[data-theme="dark"]) .inbox-message--read {
  background-color: #0b0b09;
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .inbox-message__button {
    min-height: 74px;
    padding: 15px 11px 15px 18px;

    gap: 7px;
  }

  .inbox-message__status-line {
    width: 4px;
  }

  .inbox-message:hover .inbox-message__status-line,
  .inbox-message:focus-within .inbox-message__status-line {
    width: 6px;
  }

  .inbox-message__content {
    gap: 1px;
  }

  .inbox-message__subject {
    font-size: 0.8rem;
  }

  .inbox-message__sender {
    padding-left: 0;

    font-size: 0.61rem;
  }

  .inbox-message__date {
    margin-top: 1px;

    font-size: 0.56rem;
  }
}

/* =========================================================
   VERY SMALL MOBILE
   ========================================================= */

@media (max-width: 380px) {
  .inbox-message__button {
    grid-template-columns: minmax(0, 1fr) auto;

    gap: 6px;
  }

  .inbox-message__subject {
    padding-right: 2px;
  }

  .inbox-message__date {
    font-size: 0.52rem;
  }
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .inbox-message,
  .inbox-message__status-line,
  .inbox-message__subject,
  .inbox-message__sender,
  .inbox-message__date {
    transition: none;
  }

  .inbox-message:hover,
  .inbox-message:focus-within {
    transform: none;
  }

  .inbox-message:hover .inbox-message__status-line,
  .inbox-message:focus-within .inbox-message__status-line {
    width: 5px;
  }
}
</style>