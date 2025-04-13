const mondays = document.getElementById("mondays"),
    thursdays = document.getElementById("thursdays");
const month = {
    '1': 31,
    '2': 28, //special case
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31
}
let day = [14, 4, 2025];
function addDays(day, n) {
    let d = day[0] + n,
        p = day[1],
        m = month[day[1]],
        y = day[2];
    if (p === 2 && (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0))) m += 1;
    if (d > m) {
        d -= m;
        if (p === 12) {
            y += 1;
            p = 1;
        } else p += 1;
        return addDays([d, p, y], 0)
    }
    else return [d, p, y]
}
function differenceOfDays(A,B){
    let aa = 0;
    for(let i=1;i<=A[1];i++){
        aa += month[i];
        if (month[i] === 2 && (A[2] % 4 === 0 && (A[2] % 100 !== 0 || A[2] % 400 === 0))) aa += 1;
    }
    let aaa = (A[2] - (A[2] % 4)) / 4 - (A[2] - (A[2] % 100)) / 100 +  (A[2] - (A[2] % 400)) / 400;
    let a = A[0] + aa + aaa;
    let bb = 0;
    for(let i=1;i<=B[1];i++){
        bb += month[i];
        if (month[i] === 2 && (B[2] % 4 === 0 && (B[2] % 100 !== 0 || B[2] % 400 === 0))) bb += 1;
    }
    let bbb = (B[2] - (B[2] % 4)) / 4 - (B[2] - (B[2] % 100)) / 100 +  (B[2] - (B[2] % 400)) / 400;
    let b = B[0] + bb + bbb;
    return b - a
}
char = {
    1:'st',
    2:'nd',
    3:'rd'
}
let g = new Date(), pp = 0, dayNow = [g.getDate(),g.getMonth() + 1,g.getFullYear()], dnow = document.getElementById('now');
dnow.innerText = dayNow.join('/')
while (pp < 12) {
    let h = pp + 1,
    n = ((h > 20 || h < 10) ? h + char[h % 10] || h + 'th' : h + 'th'),
    M = addDays([14, 4, 2025], 7 * pp),
    T = addDays([17, 4, 2025], 7 * pp);
    mondays.innerText += n + ': ' + M.join('/') + '     ' + differenceOfDays(dayNow, M) + ' days later\n'
    thursdays.innerText += n + ': ' + T.join('/') + '     ' + differenceOfDays(dayNow, T) + ' days later\n'
    pp += 1
}