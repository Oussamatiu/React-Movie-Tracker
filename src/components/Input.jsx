export default function Input ({ id , type = "text", placeholder, value , onChange}){
    return (
        <input id={id} type={type} placeholder={placeholder} value={value}
        onChange={onChange} style={{
          padding: "0.5rem",
          width: "100%",
          marginBottom: "1rem",
          borderRadius: "1px solid #ccc"
          
        }}/>
    )
}