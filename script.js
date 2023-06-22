const spin = document.querySelector('.out-spin')
const cost = document.querySelector('.out-cost')
const outAmount = document.querySelector('.out-amount')

function calculation() {
  let amount = +document.querySelector('.amount').value
  let oneRulet = +document.querySelector('.oneRulet').value
  const probabilityOut = document.querySelector('.probability-out')
  probabilityOut.innerHTML = 'Probability: <br>'
  let arr = []
  let probability = 0.49292929

  while (
    arr.reduce((acc, el) => acc + el, 0) + oneRulet <= amount &&
    amount &&
    oneRulet
  ) {
    arr.push(oneRulet)
    oneRulet *= 2
  }

  let probCount = 1

  while (probCount <= 10 && arr.length > 0) {
    probabilityOut.innerHTML += `<br>${probCount}: ${probability} <br>`
    probability /= 2
    probCount++
  }

  spin.innerHTML = `Spin: ${arr.length}`
  cost.innerHTML = `Cost: ${arr.join(' -> ')}`
  outAmount.textContent = `Amount: ${arr.reduce((acc, el) => acc + el, 0)}`
}

document.querySelector('.calculation').addEventListener('click', calculation)
