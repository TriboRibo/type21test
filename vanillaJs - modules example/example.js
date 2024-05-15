import create from "./moduleOne.js"

export function hello() {
    console.log('HELLO')
}

export default function some() {
    return create()
}