type List = {

element: number;
next: List;
} | null

const empty: List = null;
const append = (list: List, element: number) => ({
    element: element,
    next: list
});


//each element is a list

const list_one = append(empty, 1);
const lit_two = {
    element: 2,
    next: list_one,
}

console.log(append(append(append(empty, 1), 2), 3));