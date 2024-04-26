import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ImgCard from "./components/ImgCard";

function App() {
    const [currencyLists, setCurrencyLists] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [FetchErr, setFetchErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        setIsLoading(true);
        await axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
            )
            .then(({ data }) => {
                if (!data) {
                    throw Error("Data Fetch Error Reload");
                }
                setIsLoading(false);

                return setCurrencyLists(data);
            })
            .catch((e) => {
                setFetchErr(e.message);
                setIsLoading(false);
            });
    };

    return (
        <>
            <header>
                <h1 className="text-center m-1">Crypto Currency</h1>
                <div className="container">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                        className="form-control m-2 border-dark"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </header>
            {isLoading ? (
                <>
                    <div className="d-flex justify-content-center ">
                        <p className=" spinner-border text-primary"></p>
                        <p className="ms-2">Loading...</p>
                    </div>
                </>
            ) : (
                <ImgCard
                    FetchErr={FetchErr}
                    currencyLists={currencyLists}
                    searchText={searchText}
                />
            )}
        </>
    );
}

export default App;
