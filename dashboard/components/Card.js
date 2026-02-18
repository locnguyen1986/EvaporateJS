/**
 * Card Component
 * Container for dashboard content sections
 */

/**
 * Creates a Card element
 * @param {Object} props - Component properties
 * @param {string} props.title - Card title
 * @param {string} [props.className] - Additional CSS class
 * @param {HTMLElement|string} props.children - Card content
 * @returns {HTMLElement} Card element
 */
export const Card = (props) => {
  const { title, className = '', children } = props;

  const cardEl = document.createElement('div');
  cardEl.className = `card ${className}`.trim();

  const headerHTML = title ? `<div class="card-header"><h3 class="card-title">${title}</h3></div>` : '';
  const bodyHTML = `<div class="card-body">${typeof children === 'string' ? children : ''}</div>`;

  cardEl.innerHTML = headerHTML + bodyHTML;

  if (typeof children !== 'string' && children instanceof HTMLElement) {
    cardEl.querySelector('.card-body').appendChild(children);
  }

  return cardEl;
};

export default Card;