export function className(...cls: Array<string | boolean | undefined | null>) {
  return cls.filter(Boolean).join(" ")
}

export function getCookie(name: string) {
  let arr,
    reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  }
  return null;
}