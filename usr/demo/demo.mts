export async function demo() {
    console.log(process.argv.slice(2).join(' '));
}

await demo();