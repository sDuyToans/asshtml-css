
const Ass4_Bai2 = () => {
    return (
        <div className="flex flex-col gap-5 px-10 py-12  bg-orange-300 items-center text-white border-2 border-black">
            <h4>SIGNUP FOR FREE AND START EARNING...</h4>
            <form className="flex flex-col gap-5 font-thin">
                <div className="flex gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" className="rounded-[3px]"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="username">User Name</label>
                        <input type="text" id="username" className="rounded-[3px]"/>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="email">E-mail Adress</label>
                        <input type="email" id="email" className="rounded-[3px]"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmemail">Confirm E-mail</label>
                        <input type="email" id="confirmemail" className="rounded-[3px]"/>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="rounded-[3px]"/>
                    </div>
                    <div className="flex flex-col" >
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="password" id="confirmpassword" className="rounded-[3px]"/>
                    </div>
                </div>
                <div>
                    <input type="checkbox"  /> I have read and understood TOS
                </div>
                <div className="flex justify-end">
                    <button type="button" className="text-white font-thin bg-[#f38b17] px-3.5 py-2.5 rounded-[4px]">REGISTRATION</button>
                </div>
            </form>
        </div>
    )
}

export default Ass4_Bai2;