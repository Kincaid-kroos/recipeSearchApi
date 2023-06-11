const Recipess = ({title,Calories,img}) => {

return (
<div className="Recipe">
<h1>{title}</h1>
<p>{Calories}</p>
<img src={img} alt="" ></img>


</div>
)

}
export default Recipess;