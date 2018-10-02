export const designerschema = {
    "form":{
        type:"form",
        props:{
            label:"",
            endpoint:"",
            child:[]
        }
    },
    "string":{
        type:"string",
        props:{
            min:5,
            max:5,
            label:"Text field",
            required:true
        }
    },
    "number":{
        type:"number",
        props:{
            min:5,
            max:5,
            label:"number field",
            required:true
        }
    },
    "dropdown":{
        type:"dropdown",
        props:{
            label:"dropdown",
            options:[],
            required:true
        }
    }
};