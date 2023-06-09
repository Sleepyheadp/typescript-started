interface People {
    a: String;
    b: number;
}
interface person extends People {
    c: boolean;
}
function displayTitle1<T extends People>(t: T) {
    console.log(t.a);
}
let people: People = {
    a: "a",
    b: 1,
}
displayTitle1<People>(people);