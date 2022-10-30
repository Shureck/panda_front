function Progressbar(props) {
    return (
        //Перед progress написать текст
        <div>
            <span>{props.name} </span>
            <progress id="file" max="100" value={props.val}></progress>
        </div>
    );
}

export default Progressbar;
