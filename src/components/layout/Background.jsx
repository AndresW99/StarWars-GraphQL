const Background = ({children}) => {
    return (
        // Remove transition-all to disable the background color transition.
        <div className="bg-neutral-300 dark:bg-slate-800 transition-all">
            {children}
        </div>
    )
}

export default Background;