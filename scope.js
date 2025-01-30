let global = "this is global variable";



const greeting = () => {
    console.log("Hi there!!");
}



const task1 = () => {
    const task3 = () => {
        console.log("This is task3")
    }
    greeting();
}

const task2 = () => {
    greeting();
}

const task4 = () => {

}


task1();

























