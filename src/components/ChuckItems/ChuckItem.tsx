interface Props{
  chuckImg:string
  title:string
}

const ChuckItem:React.FC<Props> = ({chuckImg, title}) => {
  return (
    <div className="col-4 mb-3">
      <img
        style={{width:"100px"}}
        src={chuckImg} alt="img"/>
      <p><strong>{title}</strong></p>
    </div>
  );
};

export default ChuckItem;