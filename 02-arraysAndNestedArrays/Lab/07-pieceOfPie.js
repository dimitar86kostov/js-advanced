function pieceOfPie(arr, start, end) {
    
let startIdx = arr.indexOf(start);
let endIdx = arr.indexOf(end);
let result = arr.slice(startIdx, endIdx + 1);
return result;

}
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie')