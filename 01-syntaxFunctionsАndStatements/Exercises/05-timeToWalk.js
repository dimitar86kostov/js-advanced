function walk(steps, footprint, studentSpeed) {

    let distance = steps * footprint

    let speed = studentSpeed * 1000 / 3600;

    let time = distance / speed;

    let breaks = Math.floor(distance / 500) * 60;

    let totalTime = distance / speed + breaks;

    let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
    let seconds = (totalTime % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);

}
walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5);