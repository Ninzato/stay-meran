export function splitTextIntoWords(element: Element): HTMLSpanElement[] {
  const text = element.textContent || '';
  const words = text.trim().split(/\s+/);
  const wordSpans: HTMLSpanElement[] = [];

  element.innerHTML = '';

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.style.display = 'inline-block';
    span.style.marginRight = index < words.length - 1 ? '0.25em' : '0';
    element.appendChild(span);
    wordSpans.push(span);
  });

  return wordSpans;
}