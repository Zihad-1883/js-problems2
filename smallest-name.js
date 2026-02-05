function smallestName(){
    let samllest = names[0];
    for(const name of names){
        if(name.length < samllest.length){
            samllest = name;
        }
    }
    return samllest;
}

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallestName(names));