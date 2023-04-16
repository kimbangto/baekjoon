function solution(M, N) {
    var answer = 0;
    if(1 < M && 1 < N) {
        return (M-1) + (N-1)*M
    } else if(1 < M && 1 == N) {
        return (M - 1);
    } else if(1 < N && 1 == M) {
        return (N - 1);
    } else if(1 == M && 1 == N) {
        return 0;
    }
        return answer;
}