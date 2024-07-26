
function solution(ingredient) {
  let count = 0;

  const order = [1, 2, 3, 1];

  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (JSON.stringify(stack.slice(-4)) === JSON.stringify(order)) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      count++;
    }
  }

  return count;
}