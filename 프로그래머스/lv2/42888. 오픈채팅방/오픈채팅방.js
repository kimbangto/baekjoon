function solution(record) {
    const user = new Map();

    record.forEach((msg) => {
      const message = msg.split(' ');
      if (message[0] === 'Enter' || message[0] === 'Change')
        user.set(message[1], message[2]);
    });

    const result = [];

    record.forEach((msg) => {
      const message = msg.split(' ');
      if (message[0] === 'Enter')
        result.push(`${user.get(message[1])}님이 들어왔습니다.`);
      else if (message[0] === 'Leave')
        result.push(`${user.get(message[1])}님이 나갔습니다.`);
    });
    
    return result;
}