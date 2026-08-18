/**
 * Copies text using the legacy document.execCommand method.
 * This is used when the modern Clipboard API is unavailable or fails.
 *
 * @param {string} text - Text to copy to the clipboard.
 * @returns {boolean} Whether the copy operation succeeded.
 */
const copyWithFallback = (text) => {
  // Create a temporary textarea so its content can be selected.
  const textarea = document.createElement('textarea')

  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.setAttribute('aria-hidden', 'true')

  // Keep the temporary element outside the visible interface.
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  textarea.style.left = '-9999px'
  textarea.style.opacity = '0'
  textarea.style.pointerEvents = 'none'

  // The element must be attached to the DOM before selecting its content.
  document.body.appendChild(textarea)

  // Focus and select the complete text.
  textarea.focus()
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)

  let copied = false

  try {
    // Execute the legacy browser copy command.
    copied = document.execCommand('copy')
  } finally {
    // Always remove the temporary element, even if copying fails.
    document.body.removeChild(textarea)
  }

  return copied
}

/**
 * Copies a value to the user's clipboard.
 * It uses the modern Clipboard API first and falls back to the legacy method.
 *
 * @param {*} value - Value to convert to text and copy.
 * @returns {Promise<boolean>} Whether the copy operation succeeded.
 */
export const copyToClipboard = async (value) => {
  // Convert the received value into a safe string.
  const text = String(value ?? '')

  // Do not attempt to copy an empty string.
  if (!text) {
    return false
  }

  try {
    // Prefer the modern asynchronous Clipboard API when available.
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      await navigator.clipboard.writeText(text)

      return true
    }

    // Use the legacy method when the modern API is unavailable.
    return copyWithFallback(text)
  } catch {
    try {
      // The modern API may exist but fail because of permissions
      // or browser security restrictions.
      return copyWithFallback(text)
    } catch {
      // Both clipboard methods failed.
      return false
    }
  }
}

export default copyToClipboard