/* What is factors of a number N */

// Factors of a number N are the numbers that divide N completely

// N = 10

// [1,2,5,10]

// N = 24 [1,2,3,4,6,8,12,24]

function factorsOfN(n) {
    const arr = [];

    for(let i = 1; i <= n; i++) {
        if(n%2 === 0) {
            arr.push(i);
        }
    }

    return arr;
}

// No of iterations => N

// 10^8 iterations = 1sec

/*  N   =>  Iterations   =>  time */
/* 
    10^8    => 10^8     => 1sec
    10^9    => 10^9     => 10sec
    10^18   => 10^18    => 10^10sec = 317 years
*/

// 10^8 = 10,00,00,000
// 10^9 = 1,00,00,00,000
// 10^18

// N = 24

// [1,..,24]
// [1, 2, 3, 4, 6, 8, 12, 24]

// i * j = N
// j = N / i

// i    =>  n / i   =>  count
// 1    =>  24  =>  2
// 2    =>  12  =>  4
// 3    =>  8   =>  6
// 4    =>  6   =>  8

// 6    =>  4   => 10
// 8    =>  3   => 12
// 12   =>  2   =>  14
// 24   =>  1   =>  16

// i < n/i

// N = 36
// [1,2,3,4,6,9,12,18,36]

// i    =>  n / i   =>  count
// 1    => 36   =>  2
// 2    =>  18  =>  4
// 3    =>  12  =>  6
// 4    =>  9   =>  8
// 6    =>  6   =>  9

// i <= n/i

// i^2 <= n

// i <= sqrt(n)

// 10^18

function countFactors(N) {
    const sqrt = Math.sqrt(N);

    let count = 0;
    for(let i = 1; i <= sqrt; i++) {
        if(n % i === 0) {
            if(i === N/i) {
                count++;
            } else {
                count += 2;
            }
        }
    }

    return count;
}

// No of iterations = sqrt(N)

// N = 10 ^ 18
// Iterations = 10 ^ 9
// time = 10 sec

// Q2. Prime Numbers

// Prime Numbers are numbers where count of factors = 2

// ex. [2,3,5,7,11,13,17,19,23,29,31,37,...]


function checkPrime(N) {

    const factors = countFactors(N);

    if(factors === 2) {
        return true;
    }

    return false;
}

// Q3. sum of first N natural numbers

// 1,2,3,4,5,6,...,N

// N = 3, sum = 6
// N = 4, sum = 10

// N = 100; sum = ?

// S = 1 + 2 + 3 + 4 + 5 + ... + 100
// S = 100 + 99 + 98 + ... + 1

// 2S = 101 * 100

// S = (101 * 100) / 2

// S = ((N+1) * N) / 2



// [a,b] : a & b are included

// [3, 10]
// {3,4,5,6,7,8,9,10}
// b - a + 1


/* 
    for(i = 1; i <= n; i++) {
        if(i==n) {
            break;
        }
    }
    // [1, N]
    // N - 1 + 1


    for(i = 0; i <= 100; i++) {
        s = s + i + i;
    }


    function abc(n, m) {
        for(i = 1; i <= n; i++) {
            if(i%2 === 0) {
                print(i)
            }
        }

        for(j = 1; j <= m; j++) {
            if(j % 2 == 0) {
                print(j);
            }
        }
    }

    (n + m) Itrations
*/


/* 
personA = 10 => 10
personB = 15 => 8
*/