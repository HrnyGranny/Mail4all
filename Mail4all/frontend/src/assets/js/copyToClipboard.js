const copyWithFallback = (text) => {
  const textarea = document.createElement('textarea')

  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.setAttribute('aria-hidden', 'true')

  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  textarea.style.left = '-9999px'
  textarea.style.opacity = '0'
  textarea.style.pointerEvents = 'none'

  document.body.appendChild(textarea)

  textarea.focus()
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)

  let copied = false

  try {
    copied = document.execCommand('copy')
  } finally {
    document.body.removeChild(textarea)
  }

  return copied
}

export const copyToClipboard = async (value) => {
  const text = String(value ?? '')

  if (!text) {
    return false
  }

  try {
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      await navigator.clipboard.writeText(text)

      return true
    }

    return copyWithFallback(text)
  } catch {
    try {
      return copyWithFallback(text)
    } catch {
      return false
    }
  }
}

export default copyToClipboard