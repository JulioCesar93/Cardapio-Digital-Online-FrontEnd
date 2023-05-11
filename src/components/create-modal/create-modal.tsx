import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";

interface ModalProps {

}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange= {event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal ()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate}= useFoodDataMutate();

    const submit = {}
 
    return (
        <div className="modal-body">
                <h2>Cadastre um novo item no cardápio atual :</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
                </div>
    )