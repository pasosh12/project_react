import loaderImage from '../../assets/images/preloader.svg'

let LoaderComponent=(props)=>(
    <div style={{backgroundColor:'transparent',}}>
        <img style={{height:'100px'}} src={loaderImage}/> </div>
);


export default LoaderComponent;