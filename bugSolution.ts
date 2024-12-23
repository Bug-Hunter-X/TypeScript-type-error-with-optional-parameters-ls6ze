function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// Corrected call to printCoord
printCoord({ x: 3, y: 7 });

// To handle optional parameters, we can use optional properties with the '?' symbol:
function printCoordOptional(pt: { x: number; y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  if (pt.y !== undefined) {
    console.log("The coordinate's y value is " + pt.y);
  }
}

printCoordOptional({ x: 3 });
printCoordOptional({ x: 3, y: 7 });