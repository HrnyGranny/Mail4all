<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value),
  },

  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'dark', 'paper', 'danger'].includes(value),
  },

  size: {
    type: String,
    default: 'medium',
    validator: (value) =>
      ['small', 'medium', 'large'].includes(value),
  },

  arrow: {
    type: Boolean,
    default: true,
  },

  loading: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  block: {
    type: Boolean,
    default: false,
  },

  to: {
    type: [String, Object],
    default: null,
  },

  href: {
    type: String,
    default: null,
  },

  target: {
    type: String,
    default: null,
  },

  ariaLabel: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['click'])

const componentType = computed(() => {
  if (props.to) {
    return 'RouterLink'
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const componentAttributes = computed(() => {
  const isUnavailable = props.disabled || props.loading

  if (props.to) {
    return {
      to: props.to,
      'aria-label': props.ariaLabel,
      'aria-disabled': isUnavailable ? 'true' : undefined,
      tabindex: isUnavailable ? -1 : undefined,
    }
  }

  if (props.href) {
    return {
      href: isUnavailable ? undefined : props.href,
      target: props.target,
      rel: props.target === '_blank' ? 'noopener noreferrer' : undefined,
      'aria-label': props.ariaLabel,
      'aria-disabled': isUnavailable ? 'true' : undefined,
      tabindex: isUnavailable ? -1 : undefined,
    }
  }

  return {
    type: props.type,
    disabled: isUnavailable,
    'aria-label': props.ariaLabel,
  }
})

const buttonClasses = computed(() => [
  `bc-button--${props.variant}`,
  `bc-button--${props.size}`,
  {
    'bc-button--block': props.block,
    'bc-button--loading': props.loading,
    'bc-button--disabled': props.disabled,
  },
])

const handleClick = (event) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    event.stopPropagation()
    return
  }

  emit('click', event)
}
</script>

<template>
  <component
    :is="componentType"
    class="bc-button"
    :class="buttonClasses"
    v-bind="componentAttributes"
    @click="handleClick"
  >
    <span class="bc-button__label">
      <slot>Button</slot>
    </span>

    <span
      v-if="arrow"
      class="bc-button__icon"
      aria-hidden="true"
    >
      <svg
        v-if="!loading"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>

      <span
        v-else
        class="bc-button__spinner"
      ></span>
    </span>
  </component>
</template>

<style scoped>
.bc-button {
  --bc-button-bg: var(--color-chartreuse, #d8ff3d);
  --bc-button-color: var(--color-ink, #0e0e0c);
  --bc-button-icon-bg: var(--color-ink, #0e0e0c);
  --bc-button-icon-color: var(--color-chartreuse, #d8ff3d);

  box-sizing: border-box;

  width: fit-content;
  max-width: 100%;
  min-width: 0;
  height: 56px;
  padding: 0 10px 0 28px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  flex-shrink: 0;
  overflow: hidden;
  vertical-align: middle;

  background-color: var(--bc-button-bg);
  color: var(--bc-button-color);

  border: var(--border-width, 1.5px) solid var(--color-ink, #0e0e0c);
  border-radius: var(--radius-pill, 999px);

  font-family: var(--font-body, "Inter", system-ui, sans-serif);
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.005em;
  text-decoration: none;
  white-space: nowrap;

  appearance: none;
  cursor: pointer;
  user-select: none;

  transition:
    background-color var(--transition-fast, 160ms ease),
    color var(--transition-fast, 160ms ease),
    border-color var(--transition-fast, 160ms ease),
    transform 180ms var(--ease-boldcase, ease),
    box-shadow var(--transition-normal, 220ms ease);
}

.bc-button__label {
  min-width: 0;
  max-width: 100%;
  padding-bottom: 1px;

  display: block;
  flex-shrink: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bc-button__icon {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background-color: var(--bc-button-icon-bg);
  color: var(--bc-button-icon-color);

  border-radius: var(--radius-pill, 999px);

  transition:
    background-color var(--transition-fast, 160ms ease),
    color var(--transition-fast, 160ms ease),
    transform 200ms var(--ease-boldcase, ease);
}

.bc-button__icon svg {
  width: 18px;
  height: 18px;
  display: block;
  flex-shrink: 0;
}

/* Hover */

.bc-button:hover:not(.bc-button--disabled):not(.bc-button--loading) {
  background-color: var(--color-ink, #0e0e0c);
  color: var(--color-chartreuse, #d8ff3d);

  transform: translateY(-2px);

  box-shadow: var(
    --shadow-md,
    0 10px 22px -14px rgba(14, 14, 12, 0.45)
  );
}

.bc-button:hover:not(.bc-button--disabled):not(.bc-button--loading)
  .bc-button__icon {
  background-color: var(--color-chartreuse, #d8ff3d);
  color: var(--color-ink, #0e0e0c);

  transform: translateX(4px);
}

.bc-button:active:not(.bc-button--disabled):not(.bc-button--loading) {
  transform: translateY(0);
  box-shadow: none;
}

.bc-button:focus-visible {
  outline: 2px solid var(--color-tangerine, #ff5a1f);
  outline-offset: 3px;
}

/* Primary */

.bc-button--primary {
  --bc-button-bg: var(--color-chartreuse, #d8ff3d);
  --bc-button-color: var(--color-ink, #0e0e0c);
  --bc-button-icon-bg: var(--color-ink, #0e0e0c);
  --bc-button-icon-color: var(--color-chartreuse, #d8ff3d);
}

/* Dark */

.bc-button--dark {
  --bc-button-bg: var(--color-ink, #0e0e0c);
  --bc-button-color: var(--color-chartreuse, #d8ff3d);
  --bc-button-icon-bg: var(--color-chartreuse, #d8ff3d);
  --bc-button-icon-color: var(--color-ink, #0e0e0c);
}

.bc-button--dark:hover:not(.bc-button--disabled):not(.bc-button--loading) {
  background-color: var(--color-chartreuse, #d8ff3d);
  color: var(--color-ink, #0e0e0c);
}

.bc-button--dark:hover:not(.bc-button--disabled):not(.bc-button--loading)
  .bc-button__icon {
  background-color: var(--color-ink, #0e0e0c);
  color: var(--color-chartreuse, #d8ff3d);
}

/* Paper */

.bc-button--paper {
  --bc-button-bg: var(--color-bone, #fbf8f1);
  --bc-button-color: var(--color-ink, #0e0e0c);
  --bc-button-icon-bg: var(--color-ink, #0e0e0c);
  --bc-button-icon-color: var(--color-bone, #fbf8f1);
}

/* Danger */

.bc-button--danger {
  --bc-button-bg: var(--color-danger, #e5483f);
  --bc-button-color: #ffffff;
  --bc-button-icon-bg: var(--color-ink, #0e0e0c);
  --bc-button-icon-color: #ffffff;
}

.bc-button--danger:hover:not(.bc-button--disabled):not(.bc-button--loading) {
  background-color: var(--color-ink, #0e0e0c);
  color: #ffffff;
}

.bc-button--danger:hover:not(.bc-button--disabled):not(.bc-button--loading)
  .bc-button__icon {
  background-color: var(--color-danger, #e5483f);
  color: #ffffff;
}

/* Small */

.bc-button--small {
  height: 44px;
  padding: 0 7px 0 20px;
  gap: 10px;

  font-size: 0.8125rem;
}

.bc-button--small .bc-button__icon {
  width: 32px;
  height: 32px;
  flex-basis: 32px;
}

.bc-button--small .bc-button__icon svg {
  width: 15px;
  height: 15px;
}

/* Large */

.bc-button--large {
  height: 64px;
  padding: 0 11px 0 32px;
  gap: 18px;

  font-size: 1rem;
}

.bc-button--large .bc-button__icon {
  width: 46px;
  height: 46px;
  flex-basis: 46px;
}

.bc-button--large .bc-button__icon svg {
  width: 20px;
  height: 20px;
}

/* Full width */

.bc-button--block {
  width: 100%;
}

.bc-button--block .bc-button__label {
  flex: 1;
  text-align: center;
}

/* Disabled and loading */

.bc-button--disabled,
.bc-button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}

.bc-button--loading {
  cursor: wait;
}

.bc-button__spinner {
  width: 17px;
  height: 17px;

  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;

  animation: bc-button-spin 700ms linear infinite;
}

@keyframes bc-button-spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive */

@media (max-width: 575.98px) {
  .bc-button {
    height: 50px;
    padding: 0 8px 0 20px;
    gap: 10px;

    font-size: 0.875rem;
  }

  .bc-button__icon {
    width: 36px;
    height: 36px;
    flex-basis: 36px;
  }

  .bc-button__icon svg {
    width: 16px;
    height: 16px;
  }

  .bc-button--small {
    height: 42px;
    padding-left: 17px;
    font-size: 0.8rem;
  }

  .bc-button--small .bc-button__icon {
    width: 30px;
    height: 30px;
    flex-basis: 30px;
  }

  .bc-button--large {
    height: 56px;
    padding-left: 24px;
    font-size: 0.9375rem;
  }

  .bc-button--large .bc-button__icon {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
  }
}
</style>