export const onToogleClass = (e: React.MouseEvent<EventTarget>) => {
  const target = e.target as HTMLElement;
  target.classList.toggle('open');
  if (
    target.parentNode instanceof Node &&
    target.parentNode.parentNode instanceof Node &&
    target.parentNode.parentNode.parentNode instanceof HTMLElement
  ) {
    (target.parentNode.parentNode.parentNode as HTMLElement).classList.toggle(
      'open',
    );
  }
};
