
export function TextMenu({children, setTypeContent,  typeContent, type, setTypeRequest, setGenre, setOrder, setValueButton}) {
    const changeMenu = () => {
        setTypeContent(type)
        setTypeRequest("discover");
        setGenre("");
        setOrder("");
        setValueButton("Todos");
        const select = document.querySelector('select');
        select.value = 'popularity.desc'; 

    }

if(typeContent === type) {
    return (<button onClick={changeMenu}  className=" p-2 border-b-2 border-b-slate-300">{children}</button>)
}else{
    return (<button onClick={changeMenu} className="p-2 border-2 border-transparent transition-all duration-300 hover:border-b-slate-300">{children}</button>)
}
}