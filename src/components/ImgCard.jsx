import React from "react";

const ImgCard = ({ currencyLists, searchText, FetchErr }) => {
    return (
        <section>
            <div className="container">
                {FetchErr && (
                    <p className="text-center text-danger ">
                        {" "}
                        {FetchErr} Reload
                    </p>
                )}
                {!FetchErr && (
                    <div className="row d-flex justify-content-center">
                        {currencyLists
                            .filter((currency) =>
                                currency.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            )
                            .map((currency) => (
                                <div
                                    className="card m-3 text-center "
                                    key={currency.id}
                                    style={{ width: "350px" }}
                                >
                                    <img
                                        src={currency.image}
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                        }}
                                        alt={currency.name}
                                        className="mx-auto my-1"
                                    />
                                    <div className="card-body">
                                        <div className="card-title">
                                            {currency.name}
                                        </div>
                                        <div className="card-text">
                                            <p className="">
                                                Prices:
                                                {currency.current_price}
                                            </p>
                                            <p className="">
                                                Rank:
                                                {currency.market_cap_rank}
                                            </p>
                                            <p className="">
                                                Market Cap :
                                                {currency.market_cap}
                                            </p>

                                            {
                                                <p className="text-success">
                                                    Today High Price 🔺
                                                    {currency.high_24h}
                                                </p>
                                            }

                                            {
                                                <p className="text-danger">
                                                    Today Low Price🔻
                                                    {currency.high_24h}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ImgCard;
