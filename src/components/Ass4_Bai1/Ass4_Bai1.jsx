
const Ass4_Bai1 = () => {
    return (
        <div className="flex flex-col justify-center px-10 py-10 bg-[#fff] gap-5 border-2 border-black font-light">
            <div>
                <h6>Leave a Reply</h6>
                <p className="required text-[#a2a2a2]">Your email address will not be published. Required fields are marked </p>
            </div>
            <form className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <div className="flex flex-col w-[50%]">
                        <label htmlFor="name" className="required text-gray-500">Name</label>
                        <input type="text" id="name" className="outline outline-gray-500" />
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <label htmlFor="email" className="required text-gray-500">Email</label>
                        <input type="email" id="email" className="outline outline-gray-500" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="website" className="required text-gray-500">Website</label>
                    <input type="text" id="website" className="outline outline-gray-500" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="comment" className="required text-gray-500">Comment</label>
                    <textarea id="comment" className="outline outline-gray-500" />
                </div>
                <div className="flex justify-start">
                    <button type="button" className="px-3 py-2 w-1/6 text-sm font-thin bg-[#4884dc] text-white">Post Comment</button> 
                </div>
            </form>
        </div>
    )
}

export default Ass4_Bai1;