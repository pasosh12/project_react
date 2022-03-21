
export const required =(value)=>{
    if (value) return undefined;
    else return "Field is required";
}

export const maxLength = (maxLength) => (value) => {
    if (value.length < maxLength) return undefined;
    else return `Max lenght is ${maxLength} symbols`;
}