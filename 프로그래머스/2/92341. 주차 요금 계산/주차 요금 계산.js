function solution(fees, records) {
  const basicTime = fees[0];
  const basicFee = fees[1];
  const overTime = fees[2];
  const overFee = fees[3];

  const map = new Map();

  function findCar(carNum) {
    const index = records.findIndex((x) => {
      const split = x.split(' ');
      return split[1] === carNum && split[2] === 'OUT';
    });
    if (index === -1)
      return {
        index: '-',
        time: '23:59',
      };
    const time = records[index].split(' ')[0];
    return {
      index: index,
      time: time,
    };
  }

  function deleteCar(carIndex) {
    if (carIndex === '-') return;
    records.splice(carIndex, 1);
  }

  function timeToMinute(time) {
    const split = time.split(':');
    const minute = Number(split[0]) * 60 + Number(split[1]);
    return minute;
  }

  function feeCalculator(minute) {
    if (minute <= basicTime) return basicFee;
    else {
      let fee = 0;
      minute -= basicTime;
      fee += basicFee;
      fee += Math.ceil(minute / overTime) * overFee;
      return fee;
    }
  }

  function addToMap(carNum, minute) {
    if (map.has(carNum)) {
      map.set(carNum, map.get(carNum) + minute);
    } else {
      map.set(carNum, minute);
    }
  }

  records.forEach((rec, idx) => {
    const split = rec.split(' ');
    const inTime = split[0];
    const carNum = split[1];

    outCarInfo = findCar(carNum);
    const outTime = outCarInfo.time;
    const outIndex = outCarInfo.index;
    // console.log(carNum, '입차', inTime, '출차', outTime);
    const minute = timeToMinute(outTime) - timeToMinute(inTime);
    addToMap(carNum, minute);
    deleteCar(outIndex);
  });

  const mapToArr = Array.of(...map)
    .sort((a, b) => a[0] - b[0])
    .map((x) => (x[1] = feeCalculator(x[1])));

  return mapToArr;
}