function Fib_Num (Arr, a, b) {
    Arr.push(a, b)
    let Next_Num
    for (i = 0; i < 19; i++) {
        Next_Num = a + b;
        a = b;
        b = Next_Num
        Arr.push(Next_Num)
    }
}
const Fib_Array = []
Fib_Num(Fib_Array, 0, 1)
console.log(Fib_Array)