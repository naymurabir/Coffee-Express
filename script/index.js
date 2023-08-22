let total = 0
function handleClickButton(target) {
    // Step-1
    const itemName = target.parentNode.childNodes[1].innerText
    const itemContainer = document.getElementById('item-container')
    const newLi = document.createElement('li')
    newLi.innerText = itemName
    itemContainer.appendChild(newLi)

    // Step-2
    const perItemPrice = target.parentNode.childNodes[5].innerText.split(" ")[0]
    const totalPrice = document.getElementById('total-price')
    total = parseInt(total) + parseInt(perItemPrice)
    totalPrice.innerText = total

    // Step-3
    const applyButton = document.getElementById('apply-btn')
    if (total >= 300) {
        applyButton.style.backgroundColor = '#502B24'
        applyButton.removeAttribute('disabled')
    } else {
        applyButton.style.backgroundColor = '#EFEFEF'
        applyButton.setAttribute('disabled', true)
    }

    // Step-4
    const paymentButton = document.getElementById('payment-btn')
    if (total >= 0) {
        paymentButton.style.backgroundColor = '#502B24'
        paymentButton.removeAttribute('disabled')
    } else {
        paymentButton.style.backgroundColor = '#EFEFEF'
        paymentButton.setAttribute('disabled', true)
    }

}

// Step-5
document.getElementById('apply-btn').addEventListener('click', function () {
    const discountAmount = document.getElementById('discount-amount')
    const grandTotalAmount = document.getElementById('grand-total')
    const couponField = document.getElementById('coupon-field').value

    if (couponField === "DISC300") {
        const discount = (total / 100) * 20
        const discountUpdate = total - discount
        discountAmount.innerText = discount.toFixed(2)
        grandTotalAmount.innerText = discountUpdate.toFixed(2)
    } else {
        alert("Input DISC300")
    }
})

// Step-6
function defaultPayment() {
    document.getElementById('coupon-field').value = ''
    document.getElementById('item-container').innerText = ''
    document.getElementById('total-price').innerText = '00'
    document.getElementById('discount-amount').innerText = '00'
    document.getElementById('grand-total').innerText = '00'
}
