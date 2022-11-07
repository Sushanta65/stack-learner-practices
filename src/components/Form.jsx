import React, {useState} from "react";

const datas = {
  name: {
    type: "text",
    label: "What is your name?",
    placeholder: "Name",
  },
  email: {
    type: "email",
    label: "What is your email?",
    placeholder: "Email",
  },
  phone: {
    type: "tel",
    label: "What is your phone?",
    placeholder: "Phone",
  },
  password: {
    type: 'password',
    label: 'What is your password?',
    placeholder: 'Password'
  },
  color: {
    type: 'color',
    label: 'Color',
    placeholder: 'color'
  }
};

const addValuePropInObject = (obj) => {
    return Object.keys(obj).reduce((acc, cur) => {
      acc[cur] = {
        ...obj[cur],
        value: ''
      }
      return acc
    },{});
  };

const objectToArray = (obj) => {
  const arr = Object.keys(obj);
  const finalArr = arr.map((key) => ({
    ...obj[key],
    name: key,
  }));
  return finalArr;
};




const Form = () => {
    const formState = addValuePropInObject(datas)
    
    const [stateDatas, setStateDatas] = useState(formState)
    const formData = objectToArray(stateDatas);
    
    const handleChande = (e) => {
        setStateDatas({
            ...stateDatas,
            [e.target.name]: {
                ...stateDatas[e.target.name],
                value: e.target.value
            }

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = Object.keys(stateDatas).reduce((acc, cur) => {
            acc[cur] = stateDatas[cur].value
            return acc
        }, {})
        console.log(values)
        
    } 

  return (
    <form onSubmit={handleSubmit}>
      <h3>Reginstration Form</h3>
      {formData.map((item, index) => {
        return (
          <div key={index}>
            <label>{item.label}</label>
            <input
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              value={item.value}
              onChange={handleChande}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
