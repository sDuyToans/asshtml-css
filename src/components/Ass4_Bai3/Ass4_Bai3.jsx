import Ass4_Bai3_Row from "../Ass4_Bai3_Row/Ass4_Bai3_Row";

const Ass4_Bai3 = () => {
    const data = [
        { author: "E.E. Cummings", title: "Tulips & Chimneys", reserve_price: "$2,000.00", current_bid: "$2,626.50" },
        { author: "Charles d'Orleans", title: "Poems", reserve_price: "", current_bid: "$5,866.00" },
        { author: "T.S. Eliot", title: "Poems 1909 - 1925", reserve_price: "$1,250.00", current_bid: "$8,499.35" },
        { author: "Sylvia Plath", title: "The Colossus", reserve_price: "", current_bid: "$1031.72" },
    ];
    return (
        <div className="px-5 py-8 bg-[#fff] flex flex-col items-center">
            <div className="mb-[20px] flex justify-start w-3/4">
                <h1 className="text-4xl">First Edition Auctions</h1>
            </div>
            <table className="border-t-2 border-grey-500">
                <thead>
                    <tr className="border-b-2 border-black">
                        <th className="border-r-2 border-white px-3.5">AUTHOR</th>
                        <th className="border-r-2 border-white px-3.5">TITLE</th>
                        <th className="border-r-2 border-white px-3.5">RESERVE PRICE</th>
                        <th className="border-r-2 border-white px-3.5">CURRENT BID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => {
                            if (index === 1) {
                                return <Ass4_Bai3_Row key={index} style={"bg-[#efefef]"} {...data} />
                            } else if (index === 3) {
                                return <Ass4_Bai3_Row key={index} style={"bg-[#c3e6e5]"} {...data} />
                            } else return <Ass4_Bai3_Row key={index} {...data} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Ass4_Bai3;