
function moneyFormat(event: any) {
    if(event === undefined) return 
    
    if (event.target !== undefined) {
        const onlyDigits = event.target.value
            .split("")
            .filter((s: string) => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        event.target.value = maskCurrency(digitsFloat)

    } else {
        const onlyDigits = String(event)
            .split("")
            .filter(s => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        return event = maskCurrency(digitsFloat)
    }
}

function maskCurrency(valor: any, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency
    }).format(valor)
}

export default moneyFormat
