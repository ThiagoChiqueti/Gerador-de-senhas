import { useState } from "react"

export default function App(){
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)


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
      <div>
        <label htmlFor="passWordSize">Tamanho: </label>
        <input type="number"
          id="passwordSize"
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      <button onClick={generate}>Gerar senha de {passwordSize} caracters</button>
      <button onClick={copyToClipBoard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}