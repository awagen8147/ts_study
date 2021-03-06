export default function study() : void {
//	type_procedure()
//	type_function()
	type_strategy()
}

// 手続型
const type_procedure = () => {
	for (let i = 1; i <= 100; i += 1) {
		if (i % 3 === 0 && i % 5) {
			console.log('F')
		} else if (i % 5 === 0 && i % 3) {
			console.log('B')
		} else if (i % 5 === 0 && i % 3 === 0) {
			console.log('FB')
		} else {
			console.log(i)
		}
	}
}

// 関数型
const type_function = () => {
	const arrays = [...Array(101).keys()].map(i => ++i)
	arrays.forEach(
		elm => {
			elm % 3 === 0 && elm % 5 ? console.log('F') :														// 3の倍数
			elm % 5 === 0 && elm % 3 ? console.log('B') :														// 5の倍数
			elm % 3 === 0 && elm % 5 === 0 ? console.log('FB') : console.log(elm)		// 3と5の倍数
		}
	)
}

// ストラテジパターン
abstract class JudgeDividable {
	abstract judge(n: number): boolean
}
class JudgeDividableThree extends JudgeDividable {
	judge(n: number): boolean {
		return (n % 3 === 0? true : false)
	}
}
class JudgeDividableFive extends JudgeDividable {
	judge(n: number): boolean {
		return (n % 5 === 0? true : false)
	}
}

const type_strategy = () => {
	const judgeThree: JudgeDividable = new JudgeDividableThree()
	const judgeFive: JudgeDividable = new JudgeDividableFive()

	const arrays = [...Array(101).keys()].map(i => ++i)
	arrays.forEach(
		elm => {
			judgeThree.judge(elm) && !judgeFive.judge(elm)? console.log('F') :
			judgeFive.judge(elm) && !judgeThree.judge(elm)? console.log('B') :
			judgeThree.judge(elm) && judgeFive.judge(elm)? console.log('FB') :
			console.log(elm)
		}
	)
}

// コンポジットパターン