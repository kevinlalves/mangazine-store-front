import ReactStars from "react-rating-stars-component";

const RatingStars = (props) => {
    return(<ReactStars
        color={"#ffebb7"}
        activeColor={"#F4C01E"}
        value={props.valor}
        size={props.size}
        edit={false}
        />)
}
export default RatingStars