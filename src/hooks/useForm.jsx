import  {useState} from 'react'

const useForm = () => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const [err, setErr] = useState(false);
  const [newValue, setNewValue] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail.test(newValue)) {
      setErr(false);
      console.log("email2 enviado exitosamente");
      setNewValue("")
    } else {
      setErr(true);
    }
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };




  return  [err, handleChange, handleSubmit, newValue]
}

export default useForm