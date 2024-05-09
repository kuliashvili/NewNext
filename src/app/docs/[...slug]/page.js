function Docs( {params} ){

    if(params.slug.length == 1){
        return <h1>viewing details on: {params.slug[0]}</h1>
    }else if(params.slug.length == 2){
        return <h1>viewing details on: {params.slug[0]} about: {params.slug[1]}</h1>
    }else{
        return <h1>docsssssss page</h1>
    }
    
}

export default Docs