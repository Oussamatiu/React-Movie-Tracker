 function Label ({ name , htmlFor}){


return (
   <label htmlFor={htmlFor} style={{ display: "block" , marginBottom: "0.5rem" , fontWeight: "bold"}}>
    {name}
   </label>
);
}

export default Label;