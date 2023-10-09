const Textarea = ({className,value,setValue}) => {
    return (  
        
<div className="textarea">
<textarea onChange={(event)=>setValue(event.target.value)} value={value}  className={className}></textarea>


</div>

);
}
 
export default Textarea;