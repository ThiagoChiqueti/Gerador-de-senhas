import { useState } from "react"
import Input from "./components/input/input"

export default function App(){
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(8)
  const [showInput, setShowInput] = useState(false)


  function generate(){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    
    if(passwordSize <=  0){
      alert("Adicione um valor positivo para gerar sua senha!")

    }else{
      for (let i = 0; i < passwordSize; i++) {
        const position = Math.floor(Math.random() * characters.length)
        newPassword += characters[position]
        setPassword(newPassword)
      }
    }

    
    setCopyText("Copiar")
  }

  function copyToClipBoard(){
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return(
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div className="checkBox">
        <label htmlFor="showInput" id="showInput">Customizar tamanho</label>
        <input 
        type="checkbox" 
        id="showInput"
        value={showInput}
        onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput ? (
      <div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
      </div>
      ) : null }
      <button onClick={generate}>Gerar senha de {showInput ? passwordSize : 8} caracters</button>
      <button onClick={copyToClipBoard}>{copyText}</button>
      <div className="pass">{password}</div>
    </div>
  )
}