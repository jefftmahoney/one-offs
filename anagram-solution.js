const compare = (a, e, msg) => a === e
    ? `\nPASS: ${msg}\n`
    : `\nFAIL: ${msg}\n\texpected:\t ${e}\n\tactual:\t\t ${a}\n`

const areAnagrams = (x, y) => {
    const reducer = (acc, cur) => acc + cur
    const valueFrom = (x) => x.charCodeAt(0)
    const quantified = (x) => x.split('').map(valueFrom).reduce(reducer)

    return quantified(x) == quantified(y)
};

console.clear();
console.log(Date.now() % 100000)
console.log(compare(areAnagrams('abc', 'cba'), true, 'Similarity Test'))
console.log(compare(areAnagrams('abx', 'abz'), false, 'Nonsimilarity Test'))
console.log(compare(areAnagrams('London', 'donlon'), false, 'Similarity Test with No Cap'))
console.log(compare(areAnagrams('London', 'zzzzzzTop'), false, 'Nonsimilarity Test with Different Lengths'))