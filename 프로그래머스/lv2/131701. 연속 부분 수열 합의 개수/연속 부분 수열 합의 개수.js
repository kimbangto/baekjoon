function solution(elements) {
    let answer = 0;

    const subsequenceSet = new Set();

    for (
      let subsequenceLength = 1;
      subsequenceLength <= elements.length;
      subsequenceLength++
    ) {
      for (let curIndex = 0; curIndex < elements.length; curIndex++) {
        let sum = 0;
        for (
          let target = curIndex;
          target < curIndex + subsequenceLength;
          target++
        ) {
          if (elements.length <= target) sum += elements[target % elements.length];
          else sum += elements[target];
        }
        subsequenceSet.add(sum);
      }
    }
    return subsequenceSet.size;
}