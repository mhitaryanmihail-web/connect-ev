export function findNearestPointIndex(targetPosition, points) {
    if (!points.length) return -1;

    let nearestIndex = 0;
    let minDistance = distance(targetPosition, points[0].position);

    for (let i = 1; i < points.length; i++) {
        const dist = distance(targetPosition, points[i].position);
        if (dist < minDistance) {
            minDistance = dist;
            nearestIndex = i;
        }
    }

    return nearestIndex;
}

function distance(pos1, pos2) {
    const dx = pos2[1] - pos1[1]; // разница по долготе
    const dy = pos2[0] - pos1[0]; // разница по широте
    return Math.sqrt(dx * dx + dy * dy);
}
