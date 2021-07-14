const solution = (S, A) => {
  if (!S.length || !A.length) {
    return '';
  }
  let message = S[0];
  let idx = A[0];
  while (idx !== 0) {
    message = message.concat(S[idx]);
    idx = A[idx];
  }

  return message;
};
