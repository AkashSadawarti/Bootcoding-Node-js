interface Class {
    students : number,
    teacher : string
}

interface School extends Class {
    principal : string
}

const College : School ={
    students : 81,
    teacher : 'Aloknath',
    principal : 'Dinanath'
}

console.log(College);
