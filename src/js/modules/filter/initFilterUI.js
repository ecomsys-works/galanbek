export function initFilterUI({ formId }) {
  const form = document.getElementById(formId)
  if (!form) return

  const inputs = form.querySelectorAll('input[type="checkbox"]')
  const groups = {}

  inputs.forEach(input => {
    const groupName = input.name.replace('[]', '')
    if (!groups[groupName]) groups[groupName] = []
    groups[groupName].push(input)
  })

  Object.entries(groups).forEach(([groupName, groupInputs]) => {
    const uiContainers = document.querySelectorAll(
      `[data-filter-ui="${groupName}"]`
    )

    uiContainers.forEach(container => {
      container.innerHTML = groupInputs.map(input => {
        return `
          <div class="filter-check">
            <label class="filter-check__label">
              <input 
                type="checkbox"
                class="filter-check__input"
                data-ui-proxy
                data-name="${input.name}"
                data-value="${input.value}"
                ${input.checked ? 'checked' : ''}
              />
              <span class="filter-check__custom">
              <svg class="icon--checkmark-small">
										<use href="./icons/symbol/sprite.svg#checkmark-small"></use>
									</svg>
              </span>
              <span class="filter-check__text">${input.value}</span>
            </label>
          </div>
        `
      }).join('')
    })
  })
  initUIProxySync(form)
}

function initUIProxySync(form) {
  document.addEventListener('change', (e) => {
    if (!e.target.matches('[data-ui-proxy]')) return

    const name = e.target.dataset.name
    const value = e.target.dataset.value
    const checked = e.target.checked

    const realInput = form.querySelector(
      `input[name="${name}"][value="${value}"]`
    )

    if (realInput) {
      updateRealInputChecked(realInput, checked);
      realInput.dispatchEvent(new Event('change', { bubbles: true }));
      // синхронизация прокси UI
      syncUIFromForm(form)
    }
  })
}

function updateRealInputChecked(realInput, checked) {
  realInput.checked = checked;           // Меняем свойство
  if (checked) {
    realInput.setAttribute('checked', '');  // Атрибут для DOM
  } else {
    realInput.removeAttribute('checked');   // Убираем атрибут
  }
}

export function syncUIFromForm(form) {
  const allUI = document.querySelectorAll('[data-ui-proxy]')

  allUI.forEach(uiInput => {
    const name = uiInput.dataset.name
    const value = uiInput.dataset.value

    const realInput = [...form.querySelectorAll(`input[name="${name}"]`)]
      .find(input => input.value === value)

    if (realInput) {
      uiInput.checked = realInput.checked
    }
  })
}