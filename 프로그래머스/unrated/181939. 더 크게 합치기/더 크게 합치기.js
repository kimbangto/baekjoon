function solution(a, b) {
    const ab = Number.parseInt(a.toString() + b.toString());
    const ba = Number.parseInt(b.toString() + a.toString());
    return (ba<=ab?ab:ba);
}