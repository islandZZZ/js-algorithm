

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 返回范围[1,n]中所有可能的k个数的组合
 * 得到基本数组1~n,得到所有的组合case chunksArr [[1],[2],[3]]
 * 基于chunksArr 得到
 */
var combine = function (n, k) {
    if (n + k <= 2) return [[1]]
    const chunkArr = Array(n).fill().map((v, i) => [i + 1])
    const res = []
    k = k >= n ? n : k
    // console.log(chunkArr);
    // console.log(n,k);
    // [[1],[2],[3]] 2
    const backTracking = (part, index) => {
        chunkArr[index].forEach(v => {
            // cur存储新值，以及用于上一次的旧址回溯
            chunkArr.forEach((v2,i)=>{
               const cur = part.concat(v,v2)
                if(i > index){
                    res.push(cur)
                }
                i === chunkArr.length - 1 && index < chunkArr.length - 1 && backTracking([],index + 1)
            })
            // const isLast = index === chunkArr.length - 1 || cur.length === k
            // if (isLast) {
            //     res.push(cur)
            //     // [1,3] index是2
            //     index < cur.length && backTracking(part, index + 1, index - 1)
            //     index - 1 > preIndex && backTracking([], preIndex+1)
            // } else {
            //     backTracking(cur, index + 1, index)
            // }
        })
    }

    backTracking([], 0)

    return res
}

console.log(combine(4, 3));