"use client";
import { useState } from "react";
import NavC from "./NavComponent";
import Cards from "./Cards";

const HomeComponent = () => {
    const [boxval, setBoxVal] = useState("");
    const [data, setData] = useState([]);

    const initData = (event) => {
        let val = event.target.value;
        setBoxVal(val);
    }

    const dataSubmit = (event) => {
        event.preventDefault();
        const fetchData = async () => {
            try {
                const result = await fetch(`https://core.woovit.com/api/v1/public-profiles/?format=json&limit=12&ordering=relevance&search=${boxval}`)
                const realData = await result.json();
                const out = realData.results;
                setData(out);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }
    return (
        <>
            <NavC />
            <div>
                <h3 className="text text-center m-3 fw-semibold">Search the Youtuber Name</h3>
                <div className="input-group rounded d-flex justify-content-center mt-3">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" name="ytsearch" aria-label="Search" onChange={initData} value={boxval} required />
                        <button className="btn btn-outline-success" type="submit" onClick={dataSubmit}>Search</button>
                    </form>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center m-3">
                {data.map((currEle, index, array) => {
                    return <Cards key={index} imgsrc={currEle.profile.avatar_url} title={currEle.profile.name} about={currEle.profile.bio} url={currEle.profile.youtube != null ? currEle.profile.youtube.account_url : ""} />
                })}
            </div>
        </>
    );
};

export default HomeComponent;