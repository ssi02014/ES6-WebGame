export function customFetch(options) {
  const { url, method, body, ...config } = options;

  return fetch(url, {
    method,
    body: body && JSON.stringify(body),
    ...config,
  });
}
