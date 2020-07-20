const title = <h1>My First React Element!</h1>;
//JSX and const way to create new Dom Node
/*const desc = React.createElement(
    'p',
    null,
    'I just leaned how to work with React!',
);*/

const desc = <p>I just leaned how to work with React!</p>;
const myTitleId = 'mian-title';
const name = 'Mengxue';

/*const header = React.createElement(
    'header',
    null,
    title,
    desc
);*/
const header = (
    <header>
        <h1 id={myTitleId}>{name}'s First React Project</h1>
        <p>{desc}</p>

    </header>
);
// Dom
ReactDom.render(
    header,
    document.getElementById('root'),
);