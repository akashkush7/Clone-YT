import Image from "next/image"

const Cards = (props) => {
    return (
        <>
            <div className="card m-4" style={{ width: "400px" }}>
                <img src={props.imgsrc} className="card-img-top overflow-hidden" height='400' alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.about}</p>
                </div>
                <div className="d-flex">
                    <a href={props.url} target="blank" className="btn btn-danger m-3">Youtube Channel</a>
                </div>
            </div>
        </>
    )
}

export default Cards