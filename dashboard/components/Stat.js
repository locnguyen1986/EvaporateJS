/**
 * Stat Component
 * Displays a metric with label and value
 */

/**
 * Creates a Stat element
 * @param {Object} props - Component properties
 * @param {string} props.label - The metric label
 * @param {string|number} props.value - The metric value
 * @param {string} [props.icon] - Optional icon class
 * @returns {HTMLElement} Stat element
 */
export const Stat = (props) => {
  const { label, value, icon } = props;

  const statEl = document.createElement('div');
  statEl.className = 'stat';

  if (icon) {
    statEl.innerHTML = `
      <div class="stat-icon"><i class="${icon}"></i></div>
      <div class="stat-content">
        <div class="stat-value">${value}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  } else {
    statEl.innerHTML = `
      <div class="stat-content">
        <div class="stat-value">${value}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  return statEl;
};

export default Stat;