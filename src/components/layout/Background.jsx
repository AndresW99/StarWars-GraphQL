const Background = ({children}) => {
    return (
        // Remove transition-all to disable the background color transition.
        <body className="bg-white dark:bg-slate-800 transition-all">
            {children}
        </body>
    )
}

export default Background;