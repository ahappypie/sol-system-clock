export const displayName = caps => {
    return caps.charAt(0) + caps.substring(1).toLowerCase()
}

export const msToReadableTime = time => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    let hours = Math.floor(time / hour % 24);
    let minutes = Math.floor(time / minute % 60);
    let seconds = Math.floor(time / second % 60);

    return (hours ? hours + 'hr' : '') + minutes + "m" + seconds + 's';
}