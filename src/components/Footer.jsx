function TextFooter({children}) {
    return <h1 className="font-bold text-slate-300 text-3xl">{children}</h1>
}

function Footer() {
    return (
        <div className="flex justify-center flex-col h-24 items-center mt-10">
            <TextFooter>VTFLIX</TextFooter> 
            <h2 className="font-bold text-slate-300 text">Copyright © 2024 Victor Schmidt</h2>
        </div>
    )
}

export default Footer;