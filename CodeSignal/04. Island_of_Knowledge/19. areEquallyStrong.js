function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrong = Math.max(yourLeft, yourRight);
  const yourWeak = Math.min(yourLeft, yourRight);
  const friendsStrong = Math.max(friendsLeft, friendsRight);
  const friendsWeak = Math.min(friendsLeft, friendsRight);

  if (yourStrong !== friendsStrong) return false;
  if (yourWeak !== friendsWeak) return false;
  return true;
}
