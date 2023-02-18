export const logger = (message: string) => {
    // change console color in node.js
    console.log('\x1b[36m%s\x1b[0m', "PDAO System Group", "\x1b[37m", `${message}`)
}