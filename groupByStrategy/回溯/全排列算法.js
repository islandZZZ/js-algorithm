/**
 输入:
    const systems = ["mac", "windows"]
    const prices = ["$5000", "$10000"]
    const storages = ["512g", "1T"]
 返回:
    [
        ["mac", "$5000", "512g"],
        ["mac", "$5000", "1T"],
        ["mac", "$10000", "512g"],
        ["mac", "$10000", "1T"],
        ["windows", "$5000", "512g"],
        ["windows", "$5000", "1T"],
        ["windows", "$10000", "512g"],
        ["windows", "$10000", "1T"]
    ]

 思路：
    cateIndex 控制树的纵向遍历
    traverse 控制树的横向遍历

    递归出口：
        总是在最后一个cate数组，即叶子节点时, 添加状态的累积数组part至结果res
 */

const systems = ["mac", "windows"]
const prices = ["$5000", "$10000"]
const storages = ["512g", "1T"]
const genCombination = (...cateArrs) => {
    const res = []
    const totalCount = cateArrs.length
    const traverse = (part, cateIndex) => {
        cateArrs[cateIndex].forEach(v => {
            const cur = part.concat(v)
            cateIndex === totalCount - 1 ? res.push(cur) : traverse(cur, cateIndex + 1)
        })
    }
    traverse([], 0)
    return res
}

console.log(genCombination(systems, prices, storages));


/**
 * https://leetcode-cn.com/problems/combinations/comments/ 
 * https://blog.csdn.net/P6P7qsW6ua47A2Sb/article/details/121173047#comments_18868191 前端监控
 * @param {*} n 1~n 
 * @param {*} k k个数
 * 
 */
 const combine = (n,k)=>{

}








