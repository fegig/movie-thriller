const Discover = () => {

    const pageData = [{
        title: "Genres",
        items: ["Action", "Comedy", "Drama"]
    }, {
        title: "Director",
        items: ["John Doe", "Jane Doe"]
    }, {
        title: "Cast",
        items: ["John Doe", "Jane Doe", "John Doe", "Jane Doe"]
    }]

    return (
        <div className="space-y-8 grid grid-cols-12 gap-4 h-[calc(100svh-8rem)]">
            <div className=" lg:col-span-9">
                Princess to work on the component filters and vertical slider
            </div>
            <div className="lg:col-span-3 hidden lg:block">
                <div className="gap-4 p-4 relative space-y-8 rounded-2px bg-stone-900/40 backdrop-blur-sm rounded-lg">
                    {/* <div className="absolute top-0 left-0  translate-y-1/2 inset-0 bg-linear-to-t from-accent-high-priority/10 to-transparent opacity-100 transition-opacity"></div> */}
                    <div>logo</div>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        <div className="col-span-1 justify-center items-center">1</div>
                        <div className="col-span-1 justify-center items-center">2</div>
                        <div className="col-span-1 justify-center items-center">3</div>
                    </div>
                    <p className="text-white/50 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam esse voluptas a aspernatur porro itaque maxime, sapiente nemo consequatur rem iusto ullam sed perferendis similique vitae. Doloribus harum consectetur consequatur?</p>

                    {pageData.map((item) => (
                        <div className="gap-2" key={item.title}>
                            <span className="text-white/50 text-sm uppercase tracking-widest">{item.title}</span>
                            <div className="flex items-center gap-2 flex-wrap">
                                {item.items.map((item) => {
                                    return (
                                        <span key={item} className="bg-white/20 text-slate-100 text-sm uppercase tracking-widest px-2 py-1 rounded-full">{item}</span>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    ))}

                    <div className=" grid grid-cols-12 items-end my-20">
                        <div className="col-span-2">
                            <span className="flex items-center justify-center h-14 w-14 text-white border border-white/10  hover:border-accent-high-priority/60 hover:text-accent-high-priority/20 transition-all smooth-300 text-xl rounded-full ">
                                <i className="fi fi-ts-popcorn"></i>
                            </span>
                        </div>
                        <div className="col-span-2">
                            <span className="flex items-center justify-center h-14 w-14 text-white border border-white/10  hover:border-accent-high-priority/60 hover:text-accent-high-priority/20 transition-all smooth-300 text-xl rounded-full ">
                                <i className="fi fi-ts-layer-plus"></i>
                            </span>
                        </div>
                        <div className="col-span-8">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center h-14 w-full text-white border border-white/10  hover:border-accent-high-priority/60 hover:text-accent-high-priority/20 transition-all smooth-300 text-xl rounded-full ">
                                    <i className="fi fi-rr-play"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Discover;