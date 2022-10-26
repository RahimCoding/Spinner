const rotate = ['\r|    ', '\r/   ', '\r\\   ','\r|   ', '\r-   ','\r\  ']
let timer = 0

for (const char of rotate) {
  timer += 200
  setTimeout(() => {
  process.stdout.write(char);
}, timer);
}