import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ImgCard from "./components/ImgCard";

function App() {
    const [currencyLists, setCurrencyLists] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [FetchErr, setFetchErr] = useState(null);
    

    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        await axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
            )
            .then(({ data }) => {
                if (!data) {
                    throw Error("Data Fetch Error Reload");
                }

                return setCurrencyLists(data);
            })
            .catch((e) => {
                setFetchErr(e.message);
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
            <ImgCard
                FetchErr={FetchErr}
                currencyLists={currencyLists}
                searchText={searchText}
            />
        </>
    );
}

export default App;
