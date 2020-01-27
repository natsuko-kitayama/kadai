const day = parseInt(process.argv[2])

if (day % 4 === 0) {
    console.log('あなたは陽気な性格です')
} else if (day % 4 === 1) {
    console.log ('あなたは楽観的な性格です')
} else if (day % 4 === 2) {
    console.log ('あなたは思慮深い性格です')
} else if (day % 4 === 3) {
    console.log ('あなたは気まぐれな性格です')
}