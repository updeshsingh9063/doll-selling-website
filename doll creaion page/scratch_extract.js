const fs = require('fs');
const path = require('path');

const root = 'D:\\doll creaion page\\assets\\ag-cyo-assets\\cyo\\dolls';

function getDistinctParts(dir, regex, groupIndices) {
    if (!fs.existsSync(dir)) return {};
    const files = fs.readdirSync(dir);
    const results = {};
    groupIndices.forEach(name => results[name] = new Set());
    
    files.forEach(f => {
        const match = f.match(regex);
        if (match) {
            groupIndices.forEach((name, i) => {
                results[name].add(match[i+1]);
            });
        }
    });
    
    for (let key in results) {
        results[key] = Array.from(results[key]).sort();
    }
    return results;
}

console.log("BODY:", getDistinctParts(path.join(root, 'body'), /^body-(.+)\.png$/, ['skin']));
console.log("FACE:", getDistinctParts(path.join(root, 'face'), /^face-(.+?)-(.+?)-(.+?)-(default|double-braids|double-pony|headband|low-pigtails)\.png$/, ['mold', 'skin', 'haircut', 'hairstyle']));
console.log("HAIR:", getDistinctParts(path.join(root, 'hair'), /^hair-(.+?)-(.+?)-(.+?)-(default|round)-(.+?)\.png$/, ['haircut', 'hairstyle', 'color', 'part', 'outfit']));
console.log("OUTFIT:", getDistinctParts(path.join(root, 'outfit'), /^outfit-(.+?)-(.+?)-(.+?)-(.+?)\.png$/, ['theme', 'mold', 'haircut', 'hairstyle']));
console.log("EYES:", getDistinctParts(path.join(root, 'eyes'), /^eyes-(left|right)-(.+?)-(.+?)-(.+?)\.png$/, ['side', 'color', 'mold', 'skin']));
console.log("FRECKLES:", getDistinctParts(path.join(root, 'freckles'), /^freckles-(.+)\.png$/, ['skin']));
console.log("GLASSES:", getDistinctParts(path.join(root, 'glasses'), /^glasses-(.+)\.png$/, ['type']));
console.log("HEARING AID:", getDistinctParts(path.join(root, 'hearing-aid'), /^hearing-aid-(.+)\.png$/, ['type']));
console.log("ACCESSORY:", getDistinctParts(path.join(root, 'accessory'), /^accessory-(.+)\.png$/, ['theme']));

