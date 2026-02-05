function minInArray(){
    let min = heights[0];
    for(const height of heights){
        if(height < min){
            min = height;
        }
    }
    return min;
}

const heights = [167, 190, 120, 165, 137];
console.log(minInArray(heights));