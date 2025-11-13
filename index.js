const plus1 = prompt('birinch son: ');
const plus2 = prompt('ikkinchi soni: ')
plus = (son1 , son2) => {
    const resalt = son1 + son2;
    alert(`ikkta soni yigindisi: ${resalt}`)
}
plus(+plus1 , +plus2);
const min1 = prompt('birinchi soni kirit: ');
const min2 = prompt('ikkinchi soni kirit: ')
minus = (son1 , son2) => {
    const resalt = son1 - son2;
    alert(`ikkta soni ayirmasi: ${resalt}`)
}
minus(+min1 , +min2);
const div1 = prompt('birinchi soni kirit: ');
const div2 = prompt('ikkinchi soni kirit: ')
divide = (son1 , son2) => {
    const resalt = son1 / son2;
    alert(`ikkta soni bolinmasi: ${resalt}`)
}
divide(+div1 , +div2);
const mul1 = prompt('birinchi soni kirit: ');
const mul2 = prompt('ikkinchi soni kirit: ')
multiple = (son1 , son2) => {
    const resalt = son1 * son2;
    alert(`ikkta soni kopaytmasi: ${resalt}`)
}
multiple(+mul1 , +mul2);
const a = prompt('1-katet');
const b = prompt('2-katet'); 
const c = prompt('gipatenuza');
pifagor = (katet1 , katet2 , gipotenuza) => {
    if ((katet1**2) + (katet2**2) == gipotenuza**2) {
        alert('bu pifagor teoremasiga togri keladi')
    } else {
        alert('bu pifagor teoremasiga togri kelmaydi')
    }
}
pifagor(+a,+b,+c)