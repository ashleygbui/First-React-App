//PascalCasing
function Message(){
    //JSX: JS XML
    const name = 'sistas';
    if (name)
        return <h1>Hello {name}!</h1>;
    else //if string empty then return this
        return <h1>Hello World!</h1>;

}

export default Message;