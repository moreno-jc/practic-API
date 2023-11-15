export async function getWatherFrom(country:string="mexico") {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":"af32dee011msh333f2f3a13f56cep10f9a2jsn8f199cf8ed72",
            "X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com",
    },
    };


    try{
        let url= "https://weatherapi-com.p.rapidapi.com/current.json?q="+country;
        let response = await fetch(url, options);
        let data = await response.json ();
        const {location,current} = data; 
        const {name,region,localtime} = location;
        const {temp_c,wind_kph,condition} = current;
        const {text,icon} = condition

        return {
            status: true,
            name,
            region,
            localtime,
            temp_c,
            wind_kph,
            text,
            icon
        }

    }catch (error){
        console.log(error);
        
        return{
            status: false
        }
    }
}