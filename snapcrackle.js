function snapCrackle(maxValue) {
    let text = "";
    for (let numb = 1; numb <= maxValue; numb++) {
        if (numb % 2 !== 0) {
            text += "Snap , ";
            continue;
        }
        if (numb % 5 === 0) {
        text += "Crackle , ";
        continue;
        }
        if (numb % 2 !== 0 && numb % 5 === 0) {
            text += "SnapCrackle , ";
            continue;
        }
        
        text += numb + ", ";
    }
    return text;
}

snapCrackle();