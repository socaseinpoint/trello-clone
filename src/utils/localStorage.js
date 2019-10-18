export function loadState() {
  const localState = localStorage.getItem('state');

  if (localState) {
    return JSON.parse(localState);
  }

  return undefined;
}

export function saveState(state) {
  localStorage.setItem('state', JSON.stringify(state));
}
