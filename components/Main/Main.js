import './Main.css';


const template = () =>`
<h2 id=message></h2>
<ul id=results></ul>
`;

const listeners= ()=>{

}

const Main= ()=>{
    document.querySelector('main').innerHTML = template();
    listeners();
}

export default Main;