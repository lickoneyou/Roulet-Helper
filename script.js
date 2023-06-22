const spin = document.querySelector('.out-spin')
const cost = document.querySelector('.out-cost')
const outAmount = document.querySelector('.out-amount')

function calculation() {
  let amount = +document.querySelector('.amount').value
  let oneRulet = +document.querySelector('.oneRulet').value
  let arr = []
  let probability = 0.49292929

  while (arr.reduce((acc, el) => acc + el, 0) + oneRulet <= amount) {
    arr.push(oneRulet)
    oneRulet *= 2
  }

  let probCount = 1

  while (probCount < arr.length) {
    probability /= 2
    probCount++
  }

  spin.innerHTML = `Spin: ${arr.length} <br> Probability: ${probability}`
  cost.innerHTML = `Cost: ${arr.join(' -> ')}`
  outAmount.textContent = `Amount: ${arr.reduce((acc, el) => acc + el, 0)}`
}

document.querySelector('.calculation').addEventListener('click', calculation)
