import React from "react";
import classes from "./FormControls.module.css" ;

const Component =({meta, children })=>{
   const hasError=meta.error && meta.touched;
    return(
        <div className={classes.form + " " + (hasError ? classes.error : '')}>
            <div>
                {children}
            </div>
            {hasError ? <span>{meta.error}</span>:''}
        </div>
    )
}
 export const Input=(props)=>{
   const {input, meta, ...restProps}=props;
    return (<Component {...props}><input {...input} {...meta}{...restProps}/></Component>)
}

export const Textarea=(props)=>{
    const {input, meta,...restProps}=props;

        return (<Component {...props}><textarea {...input} {...meta}{...restProps}/></Component>)

}
